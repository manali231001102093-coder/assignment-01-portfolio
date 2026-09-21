# Assignment 01: Personal Portfolio

## Objective
Develop a simple personal portfolio webpage using React, demonstrating component reusability, responsive design, and JSX.

## Technologies Used
- React (Vite)
- JSX
- External CSS
- Lucide React (Icons)

## Features
- Fully responsive design
- Modern premium aesthetic
- Smooth scrolling and hover animations
- 6+ Reusable components (Header, Hero, Education, Skills, Projects, Contact, Footer)

## Folder Structure
```
assignment-01-portfolio/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Education.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── styles/
│   │   ├── Header.css
│   │   ├── Hero.css
│   │   ├── Education.css
│   │   ├── Skills.css
│   │   ├── Projects.css
│   │   ├── Contact.css
│   │   └── Footer.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
```

## How to Install
1. Navigate to the project directory: `cd assignment-01-portfolio`
2. Install dependencies: `npm install`

## How to Run
Run the development server:
```bash
npm run dev
```

## Important React Concepts Demonstrated
- **Functional Components**: Breaking down a complex UI into smaller, manageable, and reusable pieces.
- **JSX**: Writing HTML-like syntax inside JavaScript to define the UI structure.
- **State Management**: Using `useState` to manage mobile menu toggle and form data.
- **Side Effects**: Using `useEffect` to handle window scroll events for the sticky header.
