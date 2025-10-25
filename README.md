# 📚 Bookly

**Bookly** is a small educational project created using **HTML, CSS, and JavaScript**.
It was created **solely for educational purposes** mainly for practicing frontend development, using a third-party API, and setting up builds and version control using Git.

## 🧩 Tech Stack
- **HTML / CSS / JavaScript**  
- **Build tool:** Rollup  
- **Linting:** ESLint  
- **Dependency:** on-change  

## 🧠 Purpose
Bookly was made to explore:
- basic project structure and modular JS  
- dependency management with npm  
- Rollup build configuration  
- working with branches in Git  

## ⚙️ Scripts
```bash
npm install     # install dependencies
npm run build   # build the project
npm run lint    # run ESLint checks
```

## 📁 Structure
```
bookly/
├── src/                    # Main source code
│   ├── common/             # Shared utilities and helpers
│   ├── components/         # UI components
│   └── views/              # Page views
│
├── static/                 # Static assets (Global styles, SVG)
│
├── index.html              # Entry point
├── app.js                  # Main JS file
├── rollup.config.js        # Rollup build config
├── eslint.config.mjs       # ESLint setup
├── package.json            # Dependencies and scripts
└── .gitignore              # Ignored files
```

## ⚠️ Note
This is a learning-only project and not intended for production use.
