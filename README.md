# Lumen by RJDP

[Live demo](https://rajdeepkushwaha5.github.io/Lumen-by-RJDP)

A small, minimal GitHub Pages theme optimized for readable content and simple customization. This repository contains the HTML, CSS and minimal JavaScript used by the theme.

Why use Lumen?

- Minimal, responsive layout that looks great on GitHub Pages.
- Theme variables (CSS custom properties) make color tweaks easy.
- Accessible dark/light theme toggle with persisted preference.
- Small, dependency-free codebase (vanilla HTML/CSS/JS).

Use cases

- Personal or technical blogs where content readability is the priority — quick to set up and low maintenance.
- Documentation or project README sites that need a clean, distraction-free presentation for API docs or guides.
- Simple portfolios or project landing pages showcasing a small number of projects without a heavy static-site generator.
- Demos and proof-of-concept pages where you want a predictable layout and minimal CSS/JS overhead.
- Teaching materials and slides hosted on GitHub Pages — easy to clone and reuse in classrooms or workshops.

What's included

- `index.html` — example page and the theme's markup.
- `stylesheets/styles.css` — main theme stylesheet and tokens.
- `stylesheets/pygment_trac.css` — optional syntax highlighting styles.
- `javascripts/dark-mode.js` — lightweight theme toggle and persistence logic.

Quick start

1. Fork or clone this repo.

```pwsh
git clone https://github.com/RajdeepKushwaha5/Lumen-by-RJDP.git
cd Lumen-by-RJDP
```

1. Edit `index.html` and `stylesheets/styles.css` to add your content and branding.

1. Push to a GitHub repository and enable GitHub Pages in the repository settings (choose `main` or `gh-pages` as the source). Your site will appear at:

`https://<your-username>.github.io/Lumen-by-RJDP`

Theme toggle (light/dark)

- The theme toggle uses a `data-theme="dark"` attribute on the document root to switch tokens.
- The selection is saved to `localStorage` under the key `lumen-theme` so visitors keep their preference.
- The toggle button is `#lumen-theme-toggle` if you need to hook into it.

Customization

- Colors: edit CSS variables defined in `:root` and the `[data-theme="dark"]` block inside `stylesheets/styles.css`.
- Typography: edit the body font stack or per-element rules in `styles.css`.
- Syntax highlighting: regenerate or edit `stylesheets/pygment_trac.css` if you use Pygments or another highlighter.

Deploying to GitHub Pages (short)

1. Push your repository to GitHub.
2. Settings → Pages → Branch: choose `main` (or `gh-pages`) and `/ (root)` as the folder.
3. Save and wait a couple minutes for the site to publish.

Advanced: using as a theme

- You can adapt this repository as a starting point for a simple project site or personal pages. Copy the `stylesheets` and `index.html` into another repo, or use this repository as a template.

License

This project is distributed under Creative Commons Attribution-ShareAlike 3.0 (CC BY-SA 3.0). See `LICENSE` for the full legal text.

Contributing

- Bug reports, suggestions, and pull requests are welcome. See `CONTRIBUTING.md` for guidelines.

Contact

- Maintained by Rajdeep Kushwaha (<https://github.com/RajdeepKushwaha5>). If you need to reach out directly, an email address appears in the repository files.

Troubleshooting

- If styling doesn't appear to update, clear your browser cache or open the site in an incognito/private window.
- If the theme toggle doesn't persist, check that `localStorage` is available and not blocked by browser settings.

Changelog

- 2025-09-30 — Reworked decorative artwork to an accessible ASCII-art figure; added theme toggle and overall polishing.

If you'd like, I can also:

- Commit these edits and push them for you (tell me the branch to push to).
- Add a ready-to-use Open Graph image and update the meta tags in `index.html`.

