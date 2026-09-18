# Prashant Khadka - Portfolio

Personal portfolio website for Prashant Khadka, a Software Engineer at PayPal focused on AI-powered developer tools, backend systems, and full-stack web applications.

## Highlights

- PayPal troubleshooting agent built with Python, LangGraph, FastMCP, MCP, and RAG.
- Ruby on Rails, Python, JavaScript, React, Angular, SQL, PostgreSQL, and Elasticsearch experience.
- Project showcase with responsive cards, technology tags, live links, and source-code links.
- Embedded resume viewer and contact form.
- Responsive desktop and mobile layouts.

## Tech stack

- React 18
- React Router
- Sass
- Bootstrap
- Swiper
- Font Awesome
- React PDF Viewer
- EmailJS
- Vercel Analytics

## Requirements

- Node.js 24.x
- npm

The project uses Dart Sass. Do not replace it with the deprecated `node-sass` package.

## Getting started

```bash
git clone https://github.com/alis-khadka/portfolio.git
cd portfolio
npm install
npm start
```

The site opens at [http://localhost:3000](http://localhost:3000).

## Available scripts

| Command | Description |
| --- | --- |
| `npm start` | Runs the development server. |
| `npm run build` | Creates an optimized production build in `build/`. |
| `npm test` | Runs the test suite in watch mode. |

## Routes

| Route | Description |
| --- | --- |
| `/` | Main portfolio page. |
| `/resume` | Interactive resume viewer. |
| `/print_resume` | Print-friendly resume viewer. |
| `/links` | Social links page. |

## Project structure

```text
src/
├── components/       Portfolio sections and reusable UI components
├── custom_icons/     Custom technology icons
├── images/           Headshots, project previews, and generated artwork
├── App.js            Main application shell
├── Resume.js         Interactive resume route
└── index.js          Router and application entry point
```

## Updating the portfolio

- Edit introduction and profile messaging in `src/components/FixedContent.js` and `src/components/About.js`.
- Edit skills in `src/components/Skills.js`.
- Add or update projects in `src/components/Projects.js`.
- Add project images under `src/images/` and import them in `Projects.js`.
- Replace `src/Resume.pdf` and `src/PrintResume.pdf` when the resume changes.
- Update social and contact links in `src/components/SocialLinks.js` and `src/components/Contact.js`.

## Production build

```bash
npm run build
```

The generated files are placed in `build/` and can be deployed to Vercel or another static hosting provider. Vercel should use Node.js `24.x`, which is declared in `package.json`.

## License

This project is available under the terms of the [LICENSE](./LICENSE) file.
