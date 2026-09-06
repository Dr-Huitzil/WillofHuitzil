// src/components/ui/SectionHeader/SectionHeader.jsx
// Shared pill + serif title header used by all portfolio sections.
// Replaces manually repeated markup in Projects, BlogSection,
// CurrentWork, Timeline, and BlogPage.

import React from 'react';

/**
 * @param {object} props
 * @param {string} props.tag   - Short label shown in the pill (e.g. "PROJECTS").
 * @param {string} props.title - Section heading text (e.g. "Selected Works").
 * @param {string} [props.as]  - Heading element to render ("h2" | "h1"). Defaults to "h2".
 */
const SectionHeader = ({ tag, title, as: Tag = 'h2' }) => (
  <>
    <div className="pill section-pill">{tag}</div>
    <Tag className="serif-header serif-glow section-title">{title}</Tag>
  </>
);

export default SectionHeader;
