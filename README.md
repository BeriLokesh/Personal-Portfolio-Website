# Lokesh Beri — Personal Portfolio

A responsive, single-page portfolio for Lokesh Beri, a Computer Science and Engineering student and aspiring web developer. The site introduces its owner, presents skills, experience, and projects, and provides contact details.

Built with semantic HTML, CSS, and vanilla JavaScript. There is no build step or package installation required.

## Contents

- [Features](#features)
- [Project structure](#project-structure)
- [Run locally](#run-locally)
- [Customize the site](#customize-the-site)
- [Contact form behavior](#contact-form-behavior)
- [Deploy to GitHub Pages](#deploy-to-github-pages)

## Features

- Responsive layout with mobile navigation and tablet/desktop styling.
- Light and dark themes. The selected theme is saved in browser `localStorage`; on first visit, the site uses the system color preference.
- Sticky navigation with current-section highlighting, smooth scrolling, and a skip-to-content link.
- Scroll-triggered reveal effects, with reduced-motion preferences respected.
- Portfolio sections for an introduction, about and education, skills, experience, projects, and contact.
- Client-side contact form validation and accessible inline status messages.

## Project structure

```text
.
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── exam-timetable-planner.png
│   ├── profile-placeholder.svg
│   └── studysync-placeholder.svg
└── README.md
```

`index.html` contains the page content, `css/style.css` defines its layout and themes, and `js/script.js` handles navigation, theme preference, scroll effects, and form validation. The StudySync project card uses `assets/exam-timetable-planner.png`. The profile and StudySync SVG assets are included but are not currently used by the page.

## Run locally

1. Clone or download this repository.
2. Open `index.html` directly in a modern browser.

Alternatively, open the project folder in VS Code and serve it with a static server extension such as Live Server. No dependencies, build tools, or environment variables are required. Google Fonts are loaded from Google Fonts when the page is online; fallback sans-serif fonts are used if they are unavailable.

## Customize the site

- **Profile image:** In `index.html`, replace the current remote image URL in the About section with a local image path, such as `assets/profile.jpg`. Update its `alt` text to describe the image.
- **Personal details:** Edit the introduction, biography, education, skills, experience, contact links, and page metadata in `index.html`.
- **Projects:** Update the project cards in `index.html`, including titles, summaries, technology badges, image paths, and destination links. Two cards are currently placeholders. The StudySync GitHub and live-demo links also currently use `#` and should be replaced with real URLs.
- **Appearance:** Adjust colors, spacing, typography, breakpoints, and motion styles in `css/style.css`.
- **Behavior:** Navigation, theme persistence, section highlighting, reveal effects, form validation, and the footer year are handled in `js/script.js`.

## Contact form behavior

The contact form currently runs entirely in the browser. It checks that a name is provided, the email has a basic valid format, and the message contains at least 10 characters. On valid input it shows a confirmation message and resets the fields; **it does not send or store the message**. To receive submissions, connect the form to a backend or a form-handling service and update the submit handler in `js/script.js`.

## Deploy to GitHub Pages

1. Push the project files to the `main` branch of a GitHub repository.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and `/ (root)` folder, then save.
5. Open the published URL shown in the Pages settings.

Because this is a static site, no build command is needed. Ensure any local asset paths remain relative to `index.html` when publishing.
