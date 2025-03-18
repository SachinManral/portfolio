# Personal Portfolio Website

A modern, responsive portfolio website built with React.js to showcase my skills, projects, and professional experience.

## Table of Contents

- [Overview](#overview)
- [Demo](#demo)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [Issues](#issues)
- [License](#license)
- [Contact](#contact)

## Overview

This Personal Portfolio Website presents a clean and professional online presence, highlighting my skills, projects, and experience. Designed with a mobile-first approach, the site delivers smooth animations, interactive UI, and an intuitive layout that adapts across all devices. The project follows best practices for performance and accessibility, serving as a strong foundation for showcasing creative and technical work.

## Demo

Check out the live demo: [Portfolio](sachinmanral.netlify.app)

## Features

- **Responsive Design:** Optimized for desktops, tablets, and smartphones.
- **Interactive UI:** Engaging animations powered by Framer Motion.
- **Comprehensive Sections:** Home, About, Resume, Portfolio, Blog, and Contact.
- **Dark Theme:** Customizable dark mode with accent color highlights.
- **Contact Form:** Easy-to-use form for direct communication.

## Technologies

- **React.js:** A robust library for building dynamic user interfaces.
- **CSS3:** Custom styling with advanced animations.
- **Framer Motion:** For creating fluid, interactive animations.
- **React Icons:** Scalable icons for a modern look.
- **Responsive Design:** Ensuring an optimal experience on every device.

## Installation

To get started locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/SachinManral/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

   ```bash
   yarn install
   ```

## Usage

To run the project in development mode:

```bash
npm start
```

Then, open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the website. The page will automatically reload when you make changes.

To build the app for production, run:

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```bash
portfolio/
│
├── public/                  # Static files
│   ├── 404.html            # Custom error page
│   ├── assets/             # Public assets
│   ├── index.html          # HTML entry point
│   ├── manifest.json       # Web app manifest
│   └── robots.txt          # Search engine instructions
│
├── src/                     # Source code
│   ├── assets/             # Project assets
│   │   └── images/         # Image files
│   │
│   ├── components/         # Reusable UI components
│   │   ├── About.jsx       # About section
│   │   ├── Blog.jsx        # Blog section
│   │   ├── Contact.jsx     # Contact form
│   │   ├── Footer.jsx      # Footer component
│   │   ├── Header.jsx      # Navigation header
│   │   ├── Hero.jsx        # Hero/landing section
│   │   ├── Portfolio.jsx   # Portfolio/projects section
│   │   ├── Resume.jsx      # Resume/experience section
│   │   ├── ScrollToTop.jsx # Scroll utility
│   │   └── Testimonials.jsx# Testimonials section
│   │
│   ├── pages/              # Page components
│   │   ├── AboutPage.jsx   # About page
│   │   ├── BlogPage.jsx    # Blog page
│   │   ├── HomePage.jsx    # Home page
│   │   ├── PortfolioPage.jsx # Portfolio page
│   │   └── ResumePage.jsx  # Resume page
│   │
│   ├── styles/             # CSS stylesheets
│   │   ├── About.css       # About styles
│   │   ├── globals.css     # Global styles
│   │   ├── Portfolio.css   # Portfolio styles
│   │   └── Resume.css      # Resume styles
│   │
│   ├── App.js              # Main application component
│   ├── App.jsx             # Alternative app component
│   ├── index.js            # JavaScript entry point
│   └── reportWebVitals.js  # Performance monitoring
│
├── .gitignore              # Git ignore rules
├── firebase.json           # Firebase configuration
├── netlify.toml            # Netlify deployment config
├── package.json            # Project dependencies
└── README.md               # Project documentation
```

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes.
4. Push your branch: `git push origin feature/your-feature-name`
5. Open a pull request with a detailed description of your changes.

## Issues

If you encounter any bugs or have feature requests, please submit an issue on the GitHub repository or contact me directly.

## License

This project is licensed under the MIT License. See the [LICENSE](https://opensource.org/licenses/MIT) file for more details.

## Contact

For any inquiries or further information, please reach out:

- **Name**: Sachin Manral
- **Email**: [sachinmanral2431@gmail.com](mailto:sachinmanral2431@gmail.com)
- **GitHub**: [https://github.com/SachinManral](https://github.com/SachinManral)
