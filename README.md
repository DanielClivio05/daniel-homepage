# danielclivio05.github.io

Personal site. Four static pages, one stylesheet, no framework, no build step and
no JavaScript at all — so it loads instantly and works with scripting disabled.

```
index.html          the one-pager a recruiter reads first
stackedroster.html  StackedRoster: architecture, decisions, what I'd change
booknooklane.html   Book Nook Lane: same shape
calibration.html    write-up — calibrating a ranking against someone else's
styles.css          everything, ~210 lines
assets/
  daniel.jpg        portrait, square, shown at 132px
  og.png            1200x630 link preview card
  Daniel-Clivio-Resume.pdf
```

## Things that need updating by hand

**The rankings snapshot** in `index.html`, under the `RANKINGS SNAPSHOT` comment.
It is deliberately hand-written HTML rather than a fetch or a build step, so it
cannot fail in front of a visitor. Update the five rows and the caption when the
2026-27 season starts in January.

**The résumé PDF.** `assets/Daniel-Clivio-Resume.pdf` is linked from the header and
the footer of every page. Keep it in step with LinkedIn — the site must never
contradict either.

**`Last updated`** in the footer of `index.html`.

## Deploying

GitHub Pages serves the default branch from the repository root. Because the repo
is named `DanielClivio05.github.io`, it publishes to `https://danielclivio05.github.io`
with no path prefix — which is why every internal link is root-relative.

## Accessibility and rendering notes

- Colours are defined for light and dark via `prefers-color-scheme`; both are checked.
- Every page has a skip link, real focus outlines, and labelled SVG diagrams
  (`role="img"` with `<title>` and `<desc>`).
- `prefers-reduced-motion` is respected.
- Diagrams scroll horizontally inside their own container so the page body never does.
