# Lokesh Beri — Personal Portfolio

This project is my personal portfolio website, It gives visitors a single place to learn about Lokesh, understand his education and experience, see the technologies and strengths he is developing, explore a featured project, and find ways to get in touch.

The site is designed as a clear, responsive introduction for recruiters, collaborators, and anyone interested in his work. It is built with plain HTML, CSS, and JavaScript, so it can be opened and hosted as a static website without a framework or build process.

## What the website includes

- **Introduction:** Name, current CSE student role, a short statement of focus, and links to the projects and contact sections.
- **About and education:** A brief biography, degree, institution, expected graduation date, and languages.
- **Skills:** Frontend, backend and database technologies, developer tools, and strengths such as responsive design and accessibility.
- **Experience:** A timeline of internships and training, including organizations, dates, and summaries.
- **Projects:** A featured StudySync exam timetable planner project, plus two editable cards reserved for future work.
- **Contact:** Email, LinkedIn, GitHub, location, and a contact form.

## How it works

- The navigation links scroll to page sections; on smaller screens, a menu button opens and closes the navigation.
- Visitors can switch between light and dark themes. Their choice is saved in browser `localStorage`; when no choice has been saved, the site follows the device's color preference.
- The current section is highlighted in the navigation, and content fades into view as visitors scroll.
- The contact form checks that a name is entered, the email has a basic valid format, and the message is at least 10 characters long. It then displays a confirmation in the page.
- The site adapts to mobile, tablet, and desktop screens and includes keyboard focus styles, a skip-to-content link, and reduced-motion support.

## Important limitations

- **The contact form does not send or store messages.** Validation and the confirmation message happen only in the browser. Connect the form to a backend or form service before using it to receive inquiries.
- The StudySync GitHub and live-demo links are currently `#` placeholders and need real project URLs.
- The other two project cards are examples to replace when projects are ready to feature.
- The profile image currently loads from an external image URL. Replace it with an approved, locally stored portrait if desired.
- Google Fonts are loaded online. The site uses fallback fonts if they are unavailable.

## Technology

- HTML5 for page content and structure
- CSS3 for layout, responsive styling, themes, and reveal transitions
- Vanilla JavaScript for navigation, theme persistence, section highlighting, form validation, and the dynamic footer year

There are no npm packages, build tools, or environment variables.

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

`index.html` contains the portfolio content, `css/style.css` contains the presentation and responsive rules, and `js/script.js` provides the interactive behavior. The featured project uses `assets/exam-timetable-planner.png`. The two SVG placeholder assets are included in the repository but are not currently used by the page.

## Run locally

1. Clone or download this repository.
2. Open `index.html` in a modern web browser.

You can also open the folder in VS Code and use a static server extension such as Live Server. A server is optional; there is no build command.

## Customize

- Edit the personal information, education, skills, experience, section text, metadata, and links in `index.html`.
- Replace the profile image URL in the About section with a local image path, and update its alternative text.
- Replace or add project cards in `index.html`. Update each project's description, technology badges, image, GitHub URL, and demo URL.
- Adjust colors, spacing, typography, responsive breakpoints, or motion in `css/style.css`.
- Update interactive behavior in `js/script.js`. If connecting the form to a service, replace its current client-side-only success behavior with the actual submission flow.

## Publish with GitHub Pages

This is a static website, so it can be published directly from the repository:

1. Push the project to GitHub.
2. Open the repository's **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Choose the branch containing the site and the `/ (root)` folder, then save.
5. Visit the URL shown in the Pages settings after deployment completes.

Keep asset paths relative to `index.html` so they continue to work after publishing.
