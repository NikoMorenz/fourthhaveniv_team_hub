# FourthHaven Team Hub — V19

This folder contains the complete V19 Team Hub project.

## Upload these files to GitHub exactly as they are

The repository root should look like:

FourthHaven-Team-Hub/
├── index.html
├── .nojekyll
├── README.md
├── VERSION.txt
├── assets/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── app.js
└── source/
    └── FourthHaven_Team_Hub_v19_Standalone.html

## What each file does

- `index.html` — the website entry point GitHub Pages expects.
- `assets/css/styles.css` — all V19 styling, desktop/tablet/phone responsive layouts, animations, visual states, sidebar, mobile dock, forms, gallery, manager UI, etc.
- `assets/js/app.js` — all V19 Team Hub behavior and application logic.
- `source/FourthHaven_Team_Hub_v19_Standalone.html` — the exact all-in-one V19 build with CSS and JavaScript embedded. Keep this as a backup/source snapshot.
- `.nojekyll` — tells GitHub Pages to serve the project directly without Jekyll processing.
- `VERSION.txt` — build/version notes.

## GitHub Pages

1. Put the CONTENTS of this folder in the root of your GitHub repository.
2. Make sure the root file is named exactly `index.html`.
3. In GitHub: Settings → Pages.
4. Deploy from the branch containing these files, normally `main`, from `/ (root)`.
5. Save and wait for GitHub Pages to publish.

Do not rename `assets`, `styles.css`, or `app.js` unless you also update their paths in `index.html`.

## Important data note

V19 is still a front-end build. Browser-local data/storage does not automatically become shared live data between different employees/devices. The project is organized and deployment-ready, but true cross-device syncing still requires the shared backend/sync layer.
