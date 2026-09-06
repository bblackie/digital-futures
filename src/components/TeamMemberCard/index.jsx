import React, { useState, useEffect, useCallback } from 'react';
import styles from './styles.module.css';

// ── Video Modal ────────────────────────────────────────────────────────────────

function VideoModal({ videoId, onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <div className={styles.modalOverlay} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.modalClose} onClick={onClose} aria-label="Close video">✕</button>
        <div className={styles.videoWrapper}>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="Team member video intro"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

// ── Toast ──────────────────────────────────────────────────────────────────────

function Toast({ message, onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2000);
    return () => clearTimeout(t);
  }, [onDone]);
  return <div className={styles.toast}>{message}</div>;
}

// ── Team Member Card ───────────────────────────────────────────────────────────

export function TeamMemberCard({
  name,
  role,
  department,
  avatarUrl,
  featuredImgUrl,
  quote,
  bio,
  skills = [],
  workShowcase = [],
  youtubeVideoId,
  contactEmail,
  reversed = false,
}) {
  const [showVideo, setShowVideo] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = useCallback(() => {
    navigator.clipboard.writeText(contactEmail).then(() => setCopied(true));
  }, [contactEmail]);

  return (
    <article className={`${styles.card} ${reversed ? styles.reversed : ''}`}>
      {/* Left column — featured image */}
      <div className={styles.imageCol}>
        <div className={styles.featuredImgWrap}>
          <img
            src={featuredImgUrl}
            alt={`${name} featured`}
            className={styles.featuredImg}
          />
          {youtubeVideoId && (
            <button
              className={styles.videoBtn}
              onClick={() => setShowVideo(true)}
              aria-label={`Watch ${name}'s video intro`}
            >
              ▶ Watch Video Intro
            </button>
          )}
        </div>
      </div>

      {/* Right column — bio */}
      <div className={styles.bioCol}>
        {/* Header */}
        <div className={styles.header}>
          <img src={avatarUrl} alt={`${name} avatar`} className={styles.avatar} />
          <div className={styles.headerText}>
            <div className={styles.nameLine}>
              <h2 className={styles.name}>{name}</h2>
              <span className={styles.activeBadge}>Active</span>
            </div>
            <p className={styles.role}>{role}</p>
            <p className={styles.department}>{department}</p>
          </div>
        </div>

        {/* Quote */}
        {quote && <blockquote className={styles.quote}>"{quote}"</blockquote>}

        {/* Bio */}
        <p className={styles.bio}>{bio}</p>

        {/* Skills */}
        {skills.length > 0 && (
          <div className={styles.skills}>
            {skills.map((skill) => (
              <span key={skill} className={styles.skillPill}>{skill}</span>
            ))}
          </div>
        )}

        {/* Work Showcase */}
        {workShowcase.length > 0 && (
          <div className={styles.workShowcase}>
            <h3 className={styles.showcaseTitle}>Work Showcase</h3>
            <div className={styles.workGrid}>
              {workShowcase.map((item) => (
                <a
                  key={item.url}
                  href={item.url}
                  className={styles.workItem}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className={styles.workImgWrap}>
                    <img src={item.imgUrl} alt={item.title} className={styles.workImg} />
                    <div className={styles.workOverlay}>
                      <span className={styles.workZoom}>🔍</span>
                    </div>
                  </div>
                  <p className={styles.workTitle}>{item.title}</p>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Contact */}
        {contactEmail && (
          <div className={styles.contact}>
            <a href={`mailto:${contactEmail}`} className={styles.emailLink}>
              ✉ {contactEmail}
            </a>
            <button className={styles.copyBtn} onClick={copyEmail}>
              Copy
            </button>
            {copied && <Toast message="Email copied!" onDone={() => setCopied(false)} />}
          </div>
        )}
      </div>

      {showVideo && (
        <VideoModal videoId={youtubeVideoId} onClose={() => setShowVideo(false)} />
      )}
    </article>
  );
}

// ── Team Showcase Wrapper ──────────────────────────────────────────────────────

export function TeamShowcase({ members = [] }) {
  const [search, setSearch] = useState('');
  const [activeDept, setActiveDept] = useState('All');

  const departments = ['All', ...new Set(members.map((m) => m.department))];

  const filtered = members.filter((m) => {
    const matchesDept = activeDept === 'All' || m.department === activeDept;
    const q = search.toLowerCase();
    const matchesSearch =
      !q ||
      m.name.toLowerCase().includes(q) ||
      m.role.toLowerCase().includes(q) ||
      (m.skills || []).some((s) => s.toLowerCase().includes(q));
    return matchesDept && matchesSearch;
  });

  return (
    <section className={styles.showcase}>
      {/* Filter bar */}
      <div className={styles.filterBar}>
        <div className={styles.deptTabs}>
          {departments.map((dept) => (
            <button
              key={dept}
              className={`${styles.deptTab} ${activeDept === dept ? styles.deptTabActive : ''}`}
              onClick={() => setActiveDept(dept)}
            >
              {dept}
            </button>
          ))}
        </div>
        <input
          type="search"
          placeholder="Search by name, role or skill…"
          className={styles.searchInput}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search team members"
        />
      </div>

      {/* Cards */}
      <div className={styles.cardList}>
        {filtered.length === 0 ? (
          <p className={styles.noResults}>No members match your search.</p>
        ) : (
          filtered.map((member, idx) => (
            <TeamMemberCard key={member.name} {...member} reversed={idx % 2 !== 0} />
          ))
        )}
      </div>
    </section>
  );
}
