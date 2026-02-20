/**
 * Shared styled-component primitives.
 * These replace the reusable classes from font.css and recurring inline styles.
 * Import from here instead of adding one-off className or style={{}}.
 */

import { Figure, Tabs } from 'react-bootstrap';
import styled, { keyframes } from 'styled-components';

import { alpha, colors } from './theme';

// ─── Typography ────────────────────────────────────────────────────────────────

/** filson-pro light — replaces className="subtitle" */
export const Subtitle = styled.span`
  font-family: filson-pro, sans-serif;
  font-weight: 100;
  font-style: normal;
`;

/** filson-pro regular — replaces className="subtitle_bold" */
export const SubtitleBold = styled.span`
  font-family: filson-pro, sans-serif;
  font-weight: 400;
  font-style: normal;
`;

/** objektiv-mk1 light — replaces className="paragraph" */
export const Paragraph = styled.p`
  font-family: objektiv-mk1, sans-serif;
  font-weight: 200;
  font-style: normal;
`;

/** objektiv-mk1 regular — replaces className="paragraph_bold" */
export const ParagraphBold = styled.p`
  font-family: objektiv-mk1, sans-serif;
  font-weight: 400;
  font-style: normal;
`;

/** acier-bat-strokes — replaces className="font_text" */
export const FontText = styled.span`
  font-family: acier-bat-strokes, sans-serif;
  font-weight: 400;
  font-style: normal;
`;

const fontShow = keyframes`
  from { color: ${alpha.primary(0)}; }
  to   { color: ${alpha.primary(1)}; }
`;

/** acier-bat-gris animated — replaces className="font_text_2" */
export const FontText2 = styled.span`
  font-family: acier-bat-gris, sans-serif;
  font-weight: 400;
  font-style: normal;
  animation: ${fontShow} 1.7s ease-in-out infinite alternate;
`;

// ─── Layout ────────────────────────────────────────────────────────────────────

/**
 * Full-viewport section used by About, Core, Likes, and Achievements.
 * Replaces the recurring style={{ height: '92vh' }} pattern.
 */
export const ViewportSection = styled.div`
  height: 92vh;
`;

/**
 * Thin horizontal rule used as a section separator.
 * Replaces the recurring <div style={{ backgroundColor: 'white', height: '3px' }} />.
 */
export const SectionDivider = styled.div`
  width: 100%;
  height: 3px;
  background-color: ${colors.white};
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

/**
 * Standard page-level container padding used by Publications and Projects.
 * Replaces style={{ padding: '90px', paddingTop: '50px' }} on <Container>.
 */
export const PageContainer = styled.div`
  padding: 50px 90px 90px;

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

// ─── Splash screen ──────────────────────────────────────────────────────────

const fadeOut = keyframes`
  0%   { opacity: 1; }
  100% { opacity: 0; }
`;

/**
 * Full-viewport overlay that fades out after 3 s, used in App.tsx.
 * Replaces className="loader-container" + splashscreen.css.
 */
export const LoaderContainer = styled.div`
  z-index: 200;
  height: 100vh;
  width: 100vw;
  position: fixed;
  display: inline;
  animation: ${fadeOut} 1s 3s;
`;

// ─── Project image sizing ────────────────────────────────────────────────────

/** Responsive figure image — 75% mobile, 100% desktop. Replaces proper_img_size. */
export const ProperImgSize = styled(Figure.Image)`
  width: 75%;
  margin-top: 40px;

  @media (min-width: 992px) {
    width: 100%;
    margin-top: 0;
  }
`;

/** Responsive figure image — 74% mobile, 99% desktop. Replaces proper_img_size_2. */
export const ProperImgSize2 = styled(Figure.Image)`
  width: 74%;
  margin-top: 40px;

  @media (min-width: 992px) {
    width: 99%;
    margin-top: 0;
  }
`;

/** Responsive figure image — 74% mobile, 50% desktop. Replaces proper_img_size_3. */
export const ProperImgSize3 = styled(Figure.Image)`
  width: 74%;
  margin-top: 40px;

  @media (min-width: 992px) {
    width: 50%;
    margin-top: 10px;
  }
`;

// ─── Overlay text containers ────────────────────────────────────────────────

/**
 * Outer container for the acier-bat overlay effect (splash / error screens).
 * The static FontText sits here; TopText is positioned absolutely on top.
 * Replaces className="bottom_text".
 */
export const BottomText = styled.div`
  position: relative;
  margin: 0 auto;
  text-align: center;
`;

/**
 * Absolutely-positioned overlay for the animated FontText2 layer.
 * Replaces className="top_text".
 */
export const TopText = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
`;

/**
 * Project-page variant of BottomText — left-aligned.
 * Replaces className="bottom_project_text".
 */
export const BottomProjectText = styled.div`
  position: relative;
  text-align: left;
`;

/**
 * Project-page variant of TopText — same absolute overlay.
 * Replaces className="top_project_text".
 */
export const TopProjectText = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
`;

// ─── Tabs ────────────────────────────────────────────────────────────────────

/**
 * Ensures .tab-content fills 100% width inside project-page Tabs.
 * Replaces tabs.css. Used in Covid19, GlobalWarming, Hare, VitalSigns.
 */
export const StyledTabs = styled(Tabs)`
  .tab-content {
    width: 100%;
  }
`;
