import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

/**
 * ArticleKit — a small set of building blocks for turning a plain course
 * note into a magazine-style feature page (masthead kicker, big headline,
 * hero photo, callout cards, glossary chips, and end-of-article course
 * navigation). Built for the Computer Security unit; reusable on any
 * session by changing only the props and body content.
 */

// ── Masthead ─────────────────────────────────────────────────────────────
//
// ArticleShell wraps the whole doc body so page-wide typography (heading
// style, table style, blockquotes) can be scoped to just these feature
// pages via one CSS-module class, without touching the site's global
// stylesheet or other docs.

export function ArticleShell({ children }) {
  return <div className={styles.articleShell}>{children}</div>;
}

export function Kicker({ children }) {
  return <p className={styles.kicker}>{children}</p>;
}

export function Headline({ children }) {
  return <h1 className={styles.headline}>{children}</h1>;
}

export function Dek({ children }) {
  return <p className={styles.dek}>{children}</p>;
}

export function Byline({ children }) {
  return <div className={styles.byline}>{children}</div>;
}

export function Hero({ src, alt, caption }) {
  return (
    <figure className={styles.hero}>
      <img src={src} alt={alt} className={styles.heroImg} loading="eager" />
      {caption ? <figcaption className={styles.heroCaption}>{caption}</figcaption> : null}
    </figure>
  );
}

// ── Executive summary ────────────────────────────────────────────────────

export function Lede({ children }) {
  return (
    <div className={styles.lede}>
      <p className={styles.ledeLabel}>Executive summary</p>
      <div className={styles.ledeBody}>{children}</div>
    </div>
  );
}

// ── Callout cards ────────────────────────────────────────────────────────

const CALLOUT_LABELS = {
  case: 'Case file',
  example: 'Worked example',
  pitfall: 'Common mistake',
  activity: 'Activity',
  watch: 'Watch',
  diagnostic: 'Before you start',
  exit: 'Exit question',
  note: 'Note',
  homework: 'Homework',
  assessment: 'Timed assessment',
  marking: 'Marking guide',
};

export function Callout({ kind = 'note', title, children }) {
  const label = title || CALLOUT_LABELS[kind] || 'Note';
  return (
    <aside className={clsx(styles.callout, styles[`callout-${kind}`])}>
      <p className={styles.calloutLabel}>{label}</p>
      <div className={styles.calloutBody}>{children}</div>
    </aside>
  );
}

// ── Glossary chips ───────────────────────────────────────────────────────

export function KeyTerms({ terms = [] }) {
  return (
    <div className={styles.keyTerms}>
      <p className={styles.keyTermsLabel}>Key terms</p>
      <ul className={styles.keyTermsList}>
        {terms.map((term) => (
          <li key={term} className={styles.keyTermsChip}>{term}</li>
        ))}
      </ul>
    </div>
  );
}

// ── Reveal / answer key ──────────────────────────────────────────────────

export function CheckWork({ children, label = 'Reveal model answers and check your work' }) {
  return (
    <details className={styles.checkWork}>
      <summary className={styles.checkWorkSummary}>{label}</summary>
      <div className={styles.checkWorkBody}>{children}</div>
    </details>
  );
}

// ── Stop banner ──────────────────────────────────────────────────────────
//
// A hard, high-contrast divider for a genuine "do not proceed" instruction
// (a timed assessment followed by its own marking guide). Deliberately not
// a Callout — a callout reads as supplementary framing, and this needs to
// read as an instruction to physically stop scrolling/reading.

export function StopBanner({ children, label = 'Stop' }) {
  return (
    <div className={styles.stopBanner} role="note">
      <p className={styles.stopBannerLabel}>{label}</p>
      <div className={styles.stopBannerBody}>{children}</div>
    </div>
  );
}

// ── End-of-article course navigation ─────────────────────────────────────
//
// Deliberately two pieces, not one "smart" nav component that takes href
// strings as props: Roadmap is purely decorative (no links, so nothing to
// get wrong), and UnitLinks is just a styled wrapper — the actual links
// inside it are written as ordinary MDX markdown links
// (`[label](02-file.mdx)`), so Docusaurus's own link resolver and
// broken-link checker handle them exactly as it does everywhere else in
// this site. A component that generated hrefs itself would bypass that
// resolver and could silently ship a dead link.

export function Roadmap({ length = 8, current }) {
  const steps = Array.from({ length }, (_, i) => i + 1);
  const label = current ? `Session ${current} of ${length} in this unit` : `${length} sessions in this unit`;
  return (
    <ol className={styles.roadmap} aria-label={label}>
      {steps.map((n) => (
        <li
          key={n}
          className={clsx(styles.roadmapStep, n === current && styles.roadmapStepCurrent)}
          aria-current={n === current ? 'step' : undefined}
        >
          {n}
        </li>
      ))}
    </ol>
  );
}

export function UnitLinks({ children }) {
  return <div className={styles.navLinks}>{children}</div>;
}

// ── Section listing cards ────────────────────────────────────────────────
//
// Used on a category "hub" page (e.g. the Computer Science section index)
// to list its child units/topics — modelled on a magazine topic page's
// article list. `children` should be ordinary markdown: a heading
// containing a real MDX link (`### [Title](path.mdx)`) plus a short dek
// paragraph, so cross-page links stay real markdown syntax and get
// Docusaurus's normal link resolution and broken-link checking, exactly
// like UnitLinks above. `image` is optional — omit it for a topic that
// doesn't have art yet (e.g. a still-placeholder section), and the card
// renders as text-only. `eyebrow` is a short status/label string (e.g.
// "8 sessions · Ready" or "In development").

export function SectionCard({ image, imageAlt, eyebrow, variant, children }) {
  return (
    <div className={clsx(styles.sectionCard, variant === 'placeholder' && styles.sectionCardPlaceholder)}>
      {image ? (
        <div className={styles.sectionCardMedia}>
          <img src={image} alt={imageAlt} className={styles.sectionCardImg} loading="lazy" />
        </div>
      ) : null}
      <div className={styles.sectionCardBody}>
        {eyebrow ? <p className={styles.sectionCardEyebrow}>{eyebrow}</p> : null}
        {children}
      </div>
    </div>
  );
}
