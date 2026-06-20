<p align="center">
  <img src="https://img.shields.io/badge/Status-Production%20Ready-success?style=for-the-badge"/>

  <img src="https://img.shields.io/badge/React-v19-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
  <img src="https://img.shields.io/badge/Vite-v7-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E"/>
  <img src="https://img.shields.io/badge/TailwindCSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"/>
  <img src="https://img.shields.io/badge/React_Router-v7-CA4245?style=for-the-badge&logo=react-router&logoColor=white"/>
</p>

# GlobeScope (REST Countries Explorer)

A modern REST Countries Explorer built with React 19, Vite 7, and Tailwind CSS v4. GlobeScope allows users to search, filter, and explore detailed country information through a responsive and accessible interface. The project focuses on performance optimization, code splitting, reusable architecture, automated testing, and modern frontend development best practices.

<p align="center">
  <img src="https://img.shields.io/badge/Performance-99%2F100-brightgreen?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Accessibility-100%2F100-brightgreen?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Tests-Passing-brightgreen?style=for-the-badge&logo=vitest&logoColor=white"/>
  <img src="https://img.shields.io/badge/SEO-100%2F100-brightgreen?style=for-the-badge"/>
</p>

---

## ✨ Features

- Real-time country search with instant filtering
- Region-based filtering system
- Detailed country information with dynamic routing
- Border country navigation for seamless exploration
- Dark / Light theme with persistent state
- Fully responsive UI across all devices
- Skeleton loaders for better perceived performance
- Error boundaries with fallback UI
- SEO optimized pages using dynamic metadata (React Helmet Async)

---

## 🏗️ Architecture

The application is built using a modular, component-driven architecture:

- React Context API for global state management
- React Router v7 for client-side routing
- Custom hooks for reusable logic abstraction
- Lazy loading and code splitting using React.lazy & Suspense
- Tailwind CSS v4 for utility-first styling
- React Helmet Async for dynamic SEO metadata
- Vitest + Testing Library for unit testing

---

## 🎯 Project Goals

This project was built to:

- Explore modern React 19 development practices.
- Build a scalable and reusable component-based architecture.
- Implement client-side routing using React Router v7.
- Practice state management with the React Context API.
- Improve web performance through lazy loading and code splitting.
- Enhance accessibility and SEO using semantic HTML and dynamic metadata.
- Gain hands-on experience with automated testing using Vitest.
- Create a fully responsive user experience across mobile, tablet, and desktop devices.

---

## 🔗 Important Links

- 🌐 **Live Website:** https://globescope.netlify.app/
- 📂 **GitHub Repository:** https://github.com/maganstackforge/GlobeScope
- 💻 **GitHub Profile:** https://github.com/maganstackforge
- 👤 **LinkedIn:** https://linkedin.com/in/maganstackforge
- 📧 **Email:** magan.stackforge@gmail.com

---

## 📸 Application Screenshots

### Home Dashboard (Light & Dark Environments)

![Home Page Dark](./public/screenshots/home-page-dark.png)
![Home Page Light](./public/screenshots/home-page-light.png)

### Advanced Navigation & Search Operations

![Search by Country](./public/screenshots/search-by-country.png)
![Search by Region](./public/screenshots/search-by-region.png)

### Deep Country Analytics View

![Country Details](./public/screenshots/country-details.png)

## ⚡ Performance Audit (Google PageSpeed Insights)

#### Mobile Performance

![Mobile PSI](./public/screenshots/lighthouse-mobile.png)

#### Desktop Performance

## ![Desktop PSI](./public/screenshots/lighthouse-desktop.png)

---

### 📄 Full Performance Report

- 📥 [Download PageSpeed Insights Report](./public/reports/lighthouse-report.pdf)

---

## 🚀 Performance Optimizations

- Route-based code splitting
- Lazy loading using React.lazy and Suspense
- Optimized font loading
- Lighthouse performance improvements
- Skeleton loading states
- Reduced unnecessary re-renders
- Context-based state sharing
- Efficient search and filtering logic

---

## 🧪 Testing

The project includes automated unit testing using Vitest and Testing Library.

### Tested Areas

- Country search functionality
- Region filtering logic
- Custom hook behavior
- Edge case validation

Run tests locally:

```bash
npm run test
npm run test -- --coverage
```

<p align="center">
  <img src="./public/screenshots/vitest-tests.png" alt="Vitest Total Suite Execution" width="49%">
  <img src="./public/screenshots/vitest-tests-logic.png" alt="Filtering Logic Assertions" width="49%">
</p>

---

## 📚 Challenges & Learnings

During development, I gained hands-on experience with:

- Implementing route-based code splitting
- Managing global state with Context API
- Writing unit tests using Vitest
- Improving Lighthouse performance metrics
- Creating reusable custom hooks
- Implementing responsive layouts with Tailwind CSS
- Handling dynamic metadata using React Helmet Async
- Optimizing user experience with loading skeletons

---

## 🧰 Technical Stack

### ⚙️ Core Technologies

- ![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
- ![React Router](https://img.shields.io/badge/React_Router_7-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
- ![Vite](https://img.shields.io/badge/Vite_7-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E)
- ![TailwindCSS](https://img.shields.io/badge/TailwindCSS_4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

### 🎨 UI & Assets

- ![Nunito Font](https://img.shields.io/badge/Nunito_Font-007ACC?style=for-the-badge)
- ![React Icons](https://img.shields.io/badge/React_Icons-61DAFB?style=for-the-badge&logo=react&logoColor=black)

### 🚀 Developer Tools & Quality

- ![Vitest](https://img.shields.io/badge/Vitest_3-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)
- ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
- ![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black)

---

## 💡 Skills Demonstrated

- Building scalable React applications with component-driven architecture
- Managing global state using Context API
- Implementing client-side routing with React Router v7
- Designing reusable custom hooks for logic abstraction
- Optimizing performance using lazy loading & code splitting
- Developing fully responsive, mobile-first user interfaces
- Implementing accessibility best practices (WCAG principles)
- Enhancing SEO using dynamic metadata (React Helmet Async)
- Writing unit tests with Vitest & Testing Library
- Structuring clean, maintainable, and reusable codebase
- Using Git & GitHub for version control and workflow management

---

## 📁 Project Structure

```bash
GlobeScope/
│
├── public/
│   ├── fonts/
│   └── screenshots/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── CountriesListShimmer.jsx
│   │   ├── CountryCard.jsx
│   │   ├── CountryDetail.jsx
│   │   ├── CountryDetailShimmer.jsx
│   │   ├── Error.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Home.jsx
│   │   ├── ScrollToTop.jsx
│   │   └── SearchFilterControls.jsx
│   │
│   ├── Contexts/
│   │   ├── CountriesContext.jsx
│   │   └── ThemeContext.jsx
│   │
│   ├── data/
│   │   └── countries-v3.json
│   │
│   ├── hooks/
│   │   └── useWindowSize.js
│   │
│   ├── SearchFilterControls.test.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
│   └── setupTests.js
│
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

---

## ⚙️ Installation & Setup

Clone the repository:

```bash
git clone https://github.com/maganstackforge/GlobeScope.git
```

Navigate to the project directory:

```bash
cd GlobeScope
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

👉 Ye technically wrong Markdown hai (table ko bash block me mat rakho)

---

## 🛠️ Available Scripts

| Command               | Description                           |
| --------------------- | ------------------------------------- |
| npm run dev           | Starts the development server         |
| npm run build         | Creates an optimized production build |
| npm run preview       | Previews production build locally     |
| npm run test          | Runs Vitest test suites               |
| npm run test:coverage | Generates test coverage report        |
| npm run test:ui       | Opens Vitest UI                       |
| npm run lint          | Checks ESLint issues                  |
| npm run lint:fix      | Fixes ESLint issues automatically     |
| npm run format:fix    | Formats code using Prettier           |
| npm run clean         | Runs lint fix + format + check        |

---

## 👨‍💻 Author

**Magan Singh**  
Frontend Developer passionate about building modern, responsive, and high-performance web applications using React and JavaScript.

- 🎓 MCA Graduate
- ⚛️ React & JavaScript Enthusiast
- 🎯 Focused on Frontend Development and UI/UX Design

### 💼 Experience

**Frontend Developer (Intern)**  
Namrata Universal — Nov 2025 – Present

- Working on frontend development tasks using HTML, CSS, JavaScript, and React
- Building responsive UI components and improving user experience
- Collaborating on real-world projects

## 📄 Disclaimer

This project is created for educational and portfolio purposes only. It is not intended for commercial use.

## 📌 Note

This project is actively maintained and built as part of continuous learning in modern frontend development.
