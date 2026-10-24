# Lokesh Beri Portfolio

A responsive, single-page personal portfolio built with semantic HTML, CSS, and vanilla JavaScript—no frameworks or libraries required.

## Run locally

1. Download or clone this project.
2. Open `index.html` in a modern web browser.

For the best development experience, open the folder in VS Code and use a local static-server extension such as Live Server. No build step or dependency installation is needed.

## Customize

- Replace `assets/profile-placeholder.svg` with your photo (or update the image path in `index.html`).
- The StudySync project card uses `assets/exam-timetable-planner.png`. Replace it with an updated screenshot whenever needed.
- Add real StudySync GitHub and live-demo URLs to the two links in the first project card.
- Update the two placeholder project cards as new work is ready.

## Features

- Mobile-first responsive layout with 600px and 900px breakpoints
- Sticky accessible navigation with mobile menu and active-section highlighting
- Light/dark theme saved in `localStorage`
- Smooth scrolling and reduced-motion support
- Scroll-in effects using `IntersectionObserver`
- Client-side contact-form validation (no backend)

## Deploy to GitHub Pages

1. Create a GitHub repository and push these files to its `main` branch.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Choose the `main` branch and `/ (root)` folder, then save.
5. After GitHub publishes the site, use the URL shown in the Pages settings.
