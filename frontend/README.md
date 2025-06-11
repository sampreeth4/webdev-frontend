# ProVital Frontend

This is the frontend for the **ProVital** web application, built with **React 19**, **Vite**, and **SCSS**.

## 📁 Project Structure

```
sampreeth4-webdev-frontend/
└── frontend/
    ├── public/                   # Static assets
    ├── src/
    │   ├── App.jsx               # Root component
    │   ├── App.scss              # Global styles
    │   ├── index.css             # Base CSS (if any)
    │   ├── main.jsx              # Entry point
    │   ├── assets/               # General assets
    │   └── components/           # Reusable components
    │       ├── Header.jsx
    │       ├── Header.scss
    │       ├── HeroSection.jsx
    │       ├── HeroSection.scss
    │       ├── HowItWorks.jsx
    │       ├── HowItWorks.scss
    │       └── images/
    │           ├── column1/
    │           └── column2/
    ├── index.html                # Main HTML file
    ├── package.json              # Project metadata and scripts
    ├── package-lock.json         # Exact dependency versions
    ├── vite.config.js            # Vite configuration
    ├── eslint.config.js          # ESLint rules
    └── .gitignore                # Git ignored files
```

## 🛠️ Tech Stack

- ⚛️ React 19
- ⚡ Vite
- 🎨 SCSS (with `sass-embedded`)
- ✅ ESLint (with React plugin support)

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open your browser and visit `http://localhost:5173`

### 3. Build for production

```bash
npm run build
```

### 4. Preview the production build

```bash
npm run preview
```

### 5. Run lint

```bash
npm run lint
```

## 📦 Scripts

| Script             | Description                    |
|--------------------|--------------------------------|
| `npm run dev`      | Start local dev server         |
| `npm run build`    | Build for production           |
| `npm run preview`  | Preview production build       |
| `npm run lint`     | Run ESLint on project files    |

## 🧾 Notes

- This is a **modular SCSS**-based React project.
- Ensure **Node.js ≥ 18** is installed.
- ESLint is configured using `eslint.config.js`.

## 📬 Feedback

Feel free to open issues or pull requests if you'd like to contribute or suggest improvements.
