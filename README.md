# Web Dev & Accessibility — Project Milestone #2

Last updated: 2025-11-21

## Overview

This is a small static website produced for an introductory web development course (IT 3203). The site teaches web accessibility, semantic HTML, forms, ARIA usage, color & contrast, and provides a client-side quiz for student self-assessment.

The project is intentionally small and static: no server-side components or persistent storage. The emphasis is on accessible markup, clear content structure, and lightweight client-side interactions.

## Features
- Multiple content pages covering accessibility topics.
- Off-canvas sidebar navigation and skip link for keyboard users.
- Accessible focus styles and reduced-motion support.
- A self-assessment quiz with per-question feedback and final scoring (`quiz.js`).
- Print-friendly rules and responsive layout.

## File map
- `index.html` — Home / landing page
- `page1.html` — Accessibility fundamentals
- `page2.html` — Semantic HTML
- `page3.html` — ARIA & ARIA labels
- `page4.html` — Accessible forms
- `page5.html` — Color & contrast
- `page6.html` — Key concepts / summary
- `about.html` — Project and author info
- `references.html` — Citations and sources
- `quiz.html` — Quiz interface
- `sitemap.html` — Site map
- `style.css` — All styles (navigation, layout, utilities)
- `script.js` — Site interactions (menu toggle, back-to-top)
- `quiz.js` — Quiz logic, scoring, feedback
- `web-dev-home.jpg` — Hero image used on the homepage
- `README.md` — This file
- `DESIGN.md` (optional) — Project design document (you can add this from the repo)

## Local preview
Because this is a static site, you can preview it by opening `index.html` in a browser directly.

## Accessibility & QA checklist
Before publishing, ensure the following pass for each major page and the quiz flow.

Core accessibility checks
- [ ] Keyboard navigation: Tab order covers all interactive elements and the sidebar/overlay is operable with keyboard only.
- [ ] Focus styles visible: focus outlines are present and contrasty.
- [ ] Skip link present and visible on focus.
- [ ] Headings follow a logical hierarchy (one `h1` per page, then `h2`/`h3`).
- [ ] Images have descriptive `alt` attributes or, if decorative, an empty `alt=""`.
- [ ] Color contrast meets WCAG AA for normal text (4.5:1) and large text (3:1) where applicable.
- [ ] ARIA used only when native semantics are insufficient. Dynamic updates (quiz feedback) use an `aria-live` region.
- [ ] Reduced motion is respected via `prefers-reduced-motion`.
- [ ] Print stylesheet hides non-essential chrome (header, footer, nav) and prints main content legibly.

Functional checks
- [ ] Quiz: correct scoring for fully/partially correct answers; results and per-question feedback display as expected.
- [ ] No uncaught JavaScript errors in the console.
- [ ] Back-to-top button appears when expected and is operable.

Automated checks (recommended)
- Lighthouse accessibility audit (Chrome DevTools).
- axe DevTools or axe-cli scan.
- HTML validation (W3C markup validator).

## Testing the quiz (manual)
1. Open `quiz.html` with a local server.
2. Try: all correct answers -> expect full score and success message.
3. Try: all incorrect answers -> expect zero score and incorrect feedback messages.
4. Partially answered -> ensure partial scoring is handled (or add a validation that requires completion).
5. With a screen reader (VoiceOver or NVDA), confirm the feedback is announced (look for `aria-live="polite"` on the feedback container).

## Development notes
- Keep styles in `style.css` and avoid page-specific inline styles. Use utility classes (e.g., `.spaced-list`, `.sr-only`) for common behaviors.
- Keep JavaScript small and modular; structure the quiz logic so the scoring is a pure function to make it testable.
- When modifying the quiz, ensure IDs and fieldset/legend structure remain stable to prevent breaking the JS.

## Recommended tooling (optional)
- Visual Studio Code for development.
- ESLint for JavaScript linting.
- stylelint for CSS linting.
- axe-core or axe-cli for automated accessibility checks.
- GitHub Actions to run linters and an accessibility scan on push/PR.

## Contribution guide
- Branch off `main` (or your primary branch). Use feature branches with descriptive names.
- Add tests or manual test-steps for non-trivial changes (especially to `quiz.js`).
- Run the QA checklist locally before opening a pull request.
- Keep commits small and focused; document non-obvious accessibility decisions in the PR description.

## Changelog (high level)
- 2025-11-21: Rewrote README; added references-list spacing; removed an unused CSS transform; added accessibility improvements and quality guidance.
- Earlier: Initial milestone content and pages.

## License
This repository contains course work. If you want to reuse content, please credit the original author and conform to your institution's policies. Add an explicit license file (e.g., `LICENSE`) if you want to grant reuse rights.
