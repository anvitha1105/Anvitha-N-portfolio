# Anvitha N — Portfolio

A single-page portfolio site (HTML/CSS/JS, no build step) styled like a warm notebook/pinboard — polaroids, washi tape, and sticky-note skill tags. Built for non-tech roles: Customer Success, Operations, Business Development, Implementation.

## File structure
```
index.html          → all page content
style.css            → design tokens, layout, animations
script.js            → scroll reveals, counters, nav
images/              → photos used on the page
resume/Anvitha_N_Resume.pdf → downloadable résumé
```

## How to host this on GitHub Pages (free)

**Option A — using GitHub's website (no terminal needed)**

1. Go to [github.com](https://github.com) and log in (create a free account if you don't have one).
2. Click the **+** icon top-right → **New repository**.
3. Name it exactly: `your-username.github.io` (replace `your-username` with your actual GitHub username) — this gives you the shortest possible URL. Or name it anything else, e.g. `portfolio`, and it'll live at `your-username.github.io/portfolio`.
4. Set it to **Public**, then click **Create repository**.
5. On the new repo page, click **uploading an existing file**.
6. Drag in **all the files and folders** from this project (`index.html`, `style.css`, `script.js`, the `images` folder, the `resume` folder) — keep the folder structure intact.
7. Scroll down, click **Commit changes**.
8. Go to the repo's **Settings** tab → **Pages** (left sidebar).
9. Under "Build and deployment" → Source, choose **Deploy from a branch**. Branch: `main`, folder: `/ (root)`. Click **Save**.
10. Wait 1–2 minutes, then refresh — GitHub shows the live URL at the top (something like `https://your-username.github.io/portfolio/`). That's your live site.

**Option B — using git from a terminal**

```bash
cd portfolio
git init
git add .
git commit -m "Launch portfolio"
git branch -M main
git remote add origin https://github.com/your-username/your-repo.git
git push -u origin main
```
Then repeat steps 8–10 above to turn on Pages.

## Making changes later
Edit `index.html` for text/content, `style.css` for colors/spacing/fonts, `script.js` for behavior. Commit and push (or re-upload on GitHub's website) — the live site updates automatically within a minute or two.

## Customizing
- **Colors**: all defined as CSS variables at the top of `style.css` under `:root`.
- **Swap/replace a photo**: drop a new file into `images/` with the same filename, or update the `src=` path in `index.html`.
- **Update résumé**: replace `resume/Anvitha_N_Resume.pdf` with a new file of the same name (or update the `href` in `index.html` if you rename it).
