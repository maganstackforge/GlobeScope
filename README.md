# 🌍 REST Countries Explorer

A modern and responsive country explorer application built with **React.js**, **Vite**, and **Tailwind CSS**. The application fetches data from the REST Countries API and allows users to search, filter, and explore detailed information about countries around the world.

![React](https://img.shields.io/badge/React-v19-blue)
![Vite](https://img.shields.io/badge/Vite-v7-purple)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-06B6D4)
![React Router](https://img.shields.io/badge/React_Router-v7-red)
![Vitest](https://img.shields.io/badge/Vitest-v3-green)
![Responsive](https://img.shields.io/badge/Responsive-Yes-success)

## 🔗 Live Demo & Links

- **Live Site:** https://globescope.netlify.app/
- **GitHub Repository:** https://github.com/maganstackforge/GlobeScope
- **GitHub Profile:** https://github.com/maganstackforge
- **LinkedIn:** https://linkedin.com/in/maganstackforge
- **Email:** [magan.stackforge@gmail.com](mailto:magan.stackforge@gmail.com)

---

## 📸 Application Preview

### Home Page

![Home Page](public/screenshots/HomePage.png)
![Home Page](public/screenshots/HomePageLight.png)

### Country Details

![Country Details](public/screenshots/countryDetails.png)

### Dark Mode

![Search by Country](public/screenshots/SearchByCountry.png)
![Search by Region](public/screenshots/SearchByReasion.png)

---

## 📖 About The Project

REST Countries Explorer is a frontend application that helps users discover countries worldwide through a clean and intuitive interface. Users can search countries by name, filter them by region, switch between light and dark themes, and view detailed information about each country.

The project focuses on modern React development practices, reusable components, performance optimization, and responsive design.

---

## ✨ Features

- Search countries by name
- Filter countries by region
- View detailed country information
- Navigate between neighboring countries
- Light and Dark theme support
- Responsive design for mobile, tablet, and desktop
- Skeleton loading states during data fetching
- Lazy loading using React Suspense
- Error handling for invalid routes and API failures
- Custom hooks for reusable business logic
- Unit testing for filtering functionality

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- Tailwind CSS
- React Router DOM

### State Management

- React Context API

### API

The application uses the REST Countries API to fetch country information, including:

- Country Name
- Capital
- Population
- Region
- Subregion
- Languages
- Currencies
- Border Countries
- Flags

### Testing & Code Quality

- Vitest
- ESLint
- Prettier

---

## 🧪 Test Results

![Vitest Test Results](public/screenshots/vitest-tests.png)

The project includes automated unit tests for custom filtering logic using Vitest.

![Filtering Logic Tests](public/screenshots/vitest-tests-logic.png)

## 📂 Project Structure

```bash
GLOBESCOPEAPP
│
├── public
│
├── src
│   ├── assets
│   ├── components
│   ├── Contexts
│   ├── hooks
│   │   ├── useSearchFilter.js
│   │   ├── useSearchFilter.test.js
│   │   └── useWindowSize.js
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── setupTests.js
│
├── .gitignore
├── .prettierrc.json
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 📂 Installation & Setup

### Clone the Repository

```bash
git clone https://github.com/maganstackforge/GlobeScope.git
```

### Navigate to the Project Directory

```bash
cd GlobeScope
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 🧪 Running Tests

Run the test suite using:

```bash
npm run test
```

The project includes unit tests for custom filtering logic to ensure accurate search and region filtering functionality.

---

## 📱 Responsive Design

The application follows a mobile-first approach and is optimized for:

- Mobile Devices
- Tablets
- Laptops
- Desktop Screens

---

## ⚡ Performance Optimizations

- React Lazy Loading
- Code Splitting with Suspense
- Skeleton Loading Components
- Reusable Custom Hooks
- Optimized Component Rendering

---

## 🚀 Future Improvements

- Country comparison feature
- Population and area statistics charts
- Multi-language support
- Bookmark favorite countries
- Advanced sorting options

---

## 👨‍💻 Author

**Magan Singh**

Frontend Developer Intern @ Namrata Universal

- MCA Graduate
- React.js Developer
- JavaScript Enthusiast
- Passionate about building responsive and user-friendly web applications
- Currently Learning Node.js

---

## 📄 License

This project was created for learning, portfolio, and demonstration purposes.
