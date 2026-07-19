# Plum AI GitHub Pages Launch

This folder is ready to publish as a simple GitHub Pages site.

## What is inside

- `index.html`
  Main mysterious landing page for `plum-ai.net`
- `services/index.html`
  Secondary services page
- `assets/`
  Shared CSS and JS
- `contact/`
  Contact form routed through FormSubmit
- `.nojekyll`
  Prevents GitHub Pages from applying Jekyll processing
- `CNAME.example`
  Example custom domain file

## Fastest launch flow

### 1. Create a new GitHub repo

Use a public repo if you want GitHub Pages on the free plan.

Recommended repo name if this is your main site:

- `<your-github-username>.github.io`

That gives you the simplest Pages behavior.

### 2. Copy this folder to its own repo directory

If you want to use this folder directly:

```bash
cd github-pages-site
git init
git add .
git commit -m "Initial Plum AI landing site"
git branch -M main
git remote add origin https://github.com/<your-github-username>/<your-github-username>.github.io.git
git push -u origin main
```

### 3. Add the custom domain file

When you are ready to point `www.plum-ai.net`, create a file named `CNAME` with:

```text
www.plum-ai.net
```

You can do it from the CLI:

```bash
cp CNAME.example CNAME
git add CNAME
git commit -m "Add custom domain"
git push
```

### 4. Turn on GitHub Pages

On GitHub:

- open the repo
- go to `Settings`
- go to `Pages`
- set source to `Deploy from a branch`
- choose `main`
- choose `/ (root)`

If the repo is named `<your-github-username>.github.io`, GitHub may detect it automatically, but check anyway.

### 5. Point DNS

From your current Squarespace DNS screen:

- change `www` to GitHub Pages using a `CNAME`
- optionally point root `@` using GitHub Pages `A` records

Do not touch your email records.

## Local preview

Open the files directly in a browser, or run a tiny local server:

```bash
cd github-pages-site
python3 -m http.server 8080
```

Then visit:

- `http://localhost:8080/`
- `http://localhost:8080/services/`

## Contact form note

The contact form posts to FormSubmit and redirects to `/contact/thanks/`.
The first submission to a new destination email may trigger a one-time confirmation email from FormSubmit before regular delivery starts.

## Important note

`gh` is not installed in this environment, so this package is set up for plain `git` commands and normal GitHub web setup.
