import React, { useState, useMemo, useId } from 'react';

/**
 * Interactive poll-tracking line chart. No external chart library —
 * plain SVG + React state, so it drops into any Docusaurus site without
 * new dependencies.
 *
 * Usage (inside an .mdx file):
 *
 *   import PollChart from '@site/src/components/PollChart';
 *
 *   <PollChart
 *     title="NZ Party Vote, June–September 2026"
 *     yLabel="Party vote %"
 *     categories={['TM 1-10 Jun', 'Curia 4-8 Jun', ...]}
 *     series={[
 *       { name: 'National', color: '#0F4C8C', values: [29, 30.1, ...] },
 *       { name: 'Labour', color: '#D4001A', values: [34, 32.2, ...] },
 *       ...
 *     ]}
 *   />
 *
 * Props:
 *  - title (string)
 *  - yLabel (string, optional)
 *  - categories (string[]) — x-axis labels, one per data point
 *  - series ({ name, color, values }[]) — values.length must equal categories.length
 *  - height (number, optional, default 420)
 */
export default function PollChart({ title, yLabel, categories, series, height = 420 }) {
  const uid = useId();
  const [hidden, setHidden] = useState(() => new Set());
  const [hoverIdx, setHoverIdx] = useState(null);

  const width = 900;
  const margin = { top: 24, right: 24, bottom: 64, left: 44 };
  const plotW = width - margin.left - margin.right;
  const plotH = height - margin.top - margin.bottom;

  const visibleSeries = series.filter((s) => !hidden.has(s.name));

  const { yMin, yMax } = useMemo(() => {
    const all = visibleSeries.flatMap((s) => s.values);
    if (all.length === 0) return { yMin: 0, yMax: 50 };
    const rawMin = Math.min(...all);
    const rawMax = Math.max(...all);
    const pad = Math.max(2, (rawMax - rawMin) * 0.12);
    return {
      yMin: Math.max(0, Math.floor(rawMin - pad)),
      yMax: Math.ceil(rawMax + pad),
    };
  }, [visibleSeries]);

  const n = categories.length;
  const xStep = n > 1 ? plotW / (n - 1) : 0;
  const xAt = (i) => margin.left + i * xStep;
  const yAt = (v) => margin.top + plotH - ((v - yMin) / (yMax - yMin || 1)) * plotH;

  const toggleSeries = (name) => {
    setHidden((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  };

  const handleMove = (evt) => {
    const svg = evt.currentTarget;
    const rect = svg.getBoundingClientRect();
    const scaleX = width / rect.width;
    const localX = (evt.clientX - rect.left) * scaleX;
    let idx = Math.round((localX - margin.left) / (xStep || 1));
    idx = Math.max(0, Math.min(n - 1, idx));
    setHoverIdx(idx);
  };

  const yTicks = 5;
  const tickValues = Array.from({ length: yTicks + 1 }, (_, i) =>
    Math.round(yMin + ((yMax - yMin) * i) / yTicks)
  );

  const gridColor = 'var(--ifm-color-emphasis-300)';
  const axisTextColor = 'var(--ifm-color-emphasis-700)';
  const bgColor = 'var(--ifm-background-surface-color, transparent)';

  return (
    <div style={{ margin: '1.5rem 0' }}>
      {title && (
        <div
          style={{
            fontWeight: 600,
            fontSize: '1rem',
            marginBottom: '0.5rem',
            color: 'var(--ifm-heading-color, inherit)',
          }}
        >
          {title}
        </div>
      )}

      <div style={{ position: 'relative' }}>
        <svg
          viewBox={`0 0 ${width} ${height}`}
          role="img"
          aria-label={title || 'Poll tracking chart'}
          style={{ width: '100%', height: 'auto', background: bgColor }}
          onMouseMove={handleMove}
          onMouseLeave={() => setHoverIdx(null)}
        >
          {/* horizontal gridlines + y-axis labels */}
          {tickValues.map((tv) => (
            <g key={tv}>
              <line
                x1={margin.left}
                x2={width - margin.right}
                y1={yAt(tv)}
                y2={yAt(tv)}
                stroke={gridColor}
                strokeWidth={1}
              />
              <text
                x={margin.left - 8}
                y={yAt(tv)}
                textAnchor="end"
                dominantBaseline="middle"
                fontSize={11}
                fill={axisTextColor}
              >
                {tv}
              </text>
            </g>
          ))}

          {/* y-axis title */}
          {yLabel && (
            <text
              x={14}
              y={margin.top + plotH / 2}
              fontSize={11}
              fill={axisTextColor}
              textAnchor="middle"
              transform={`rotate(-90, 14, ${margin.top + plotH / 2})`}
            >
              {yLabel}
            </text>
          )}

          {/* x-axis labels, rotated to fit */}
          {categories.map((c, i) => (
            <text
              key={c + i}
              x={xAt(i)}
              y={height - margin.bottom + 14}
              fontSize={10}
              fill={axisTextColor}
              textAnchor="end"
              transform={`rotate(-40, ${xAt(i)}, ${height - margin.bottom + 14})`}
            >
              {c}
            </text>
          ))}

          {/* hover guideline */}
          {hoverIdx !== null && (
            <line
              x1={xAt(hoverIdx)}
              x2={xAt(hoverIdx)}
              y1={margin.top}
              y2={margin.top + plotH}
              stroke={axisTextColor}
              strokeWidth={1}
              strokeDasharray="3,3"
            />
          )}

          {/* series lines + points */}
          {visibleSeries.map((s) => {
            const d = s.values
              .map((v, i) => `${i === 0 ? 'M' : 'L'} ${xAt(i)} ${yAt(v)}`)
              .join(' ');
            return (
              <g key={s.name}>
                <path d={d} fill="none" stroke={s.color} strokeWidth={2} />
                {hoverIdx !== null && (
                  <circle
                    cx={xAt(hoverIdx)}
                    cy={yAt(s.values[hoverIdx])}
                    r={4}
                    fill={s.color}
                    stroke={bgColor === 'transparent' ? '#fff' : bgColor}
                    strokeWidth={1.5}
                  />
                )}
              </g>
            );
          })}
        </svg>

        {/* tooltip */}
        {hoverIdx !== null && (
          <div
            style={{
              position: 'absolute',
              top: 4,
              right: 4,
              background: 'var(--ifm-background-color, #fff)',
              border: '1px solid var(--ifm-color-emphasis-300)',
              borderRadius: 4,
              padding: '0.5rem 0.75rem',
              fontSize: '0.8rem',
              lineHeight: 1.5,
              pointerEvents: 'none',
              boxShadow: '0 2px 6px rgba(0,0,0,0.12)',
            }}
          >
            <div style={{ fontWeight: 600, marginBottom: 2 }}>
              {categories[hoverIdx]}
            </div>
            {visibleSeries.map((s) => (
              <div key={s.name} style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                <span
                  style={{
                    width: 8,
                    height: 8,
                    background: s.color,
                    borderRadius: '50%',
                    display: 'inline-block',
                  }}
                />
                <span>
                  {s.name}: <strong>{s.values[hoverIdx]}%</strong>
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* legend — click to toggle a party's line on/off */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem 1rem',
          marginTop: '0.5rem',
        }}
      >
        {series.map((s) => {
          const isHidden = hidden.has(s.name);
          return (
            <button
              key={s.name}
              onClick={() => toggleSeries(s.name)}
              aria-pressed={!isHidden}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '2px 4px',
                fontSize: '0.8rem',
                color: isHidden
                  ? 'var(--ifm-color-emphasis-500)'
                  : 'var(--ifm-font-color-base)',
                opacity: isHidden ? 0.5 : 1,
              }}
            >
              <span
                style={{
                  width: 10,
                  height: 10,
                  background: s.color,
                  borderRadius: '50%',
                  display: 'inline-block',
                }}
              />
              {s.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
