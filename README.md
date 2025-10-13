# Busiman Documentation

Official documentation site for Busiman — an all-in-one business management platform (https://busiman.in).

This repository contains the Docusaurus-based documentation that powers https://docs.busiman.in.

Quick highlights

- Written with Docusaurus v3
- Served from the custom domain: `docs.busiman.in` (CNAME is included)
- License: MIT — see `LICENSE`

Requirements

- Node.js >= 20
- npm (or yarn)

Getting started (local)

1. Install dependencies

```bash
npm install
```

2. Start the local development server (live reload)

```bash
npm run start
```

3. Build the site

```bash
npm run build
```

4. Serve the built site locally to test production output

```bash
npm run serve
# open http://localhost:3000/ and test nested routes (e.g. /intro)
```

Deploying

- The repository includes an npm deploy script that pushes the built site to GitHub Pages:

```bash
npm run deploy
```

- If your deployment requires SSH or a specific GIT user, set the environment vars the same way the script expects (see `package.json`).

Custom domain

- This project uses `docs.busiman.in`. A `static/CNAME` file is present so GitHub Pages will keep the custom domain after deploy.
- Ensure your DNS has a CNAME record for `docs` pointing to `Busiman-official.github.io` (or the correct GitHub Pages target) and that GitHub Pages shows the custom domain as configured.

Contributing

- See `CONTRIBUTING.md` for how to contribute, `CODE_OF_CONDUCT.md` for community guidelines, and `.github/ISSUE_TEMPLATE/` for issue templates.
- Typical flow:
  1.  Fork and branch
  2.  Make changes and run `npm run build` to validate
  3.  Open a pull request describing the change and link any related issues

Security & reporting

- For security issues, see `SECURITY.md` and report privately as described there.

License

- This project is distributed under the MIT license. See `LICENSE`.

Contact

- For general inquiries or maintainers, email: hello@busiman.in (replace with preferred contact).

Thank you for helping improve Busiman documentation — contributions are welcome and appreciated.
