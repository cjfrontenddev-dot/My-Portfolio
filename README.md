# My Portfolio

A modern, responsive portfolio website built with React and Vite, showcasing projects, skills, and experience as a frontend developer.

## Description

This is the personal portfolio of Vigneshwar, a passionate frontend developer focused on building modern, responsive, and high-performance web applications using React. The website features a clean design with smooth animations, interactive components, and a mobile-first approach.

## Features

- **Hero Section**: Eye-catching introduction with call-to-action buttons
- **About**: Personal background and professional summary
- **Skills**: Showcase of technical skills and expertise
- **Portfolio**: Display of featured projects with descriptions and links
- **Resume**: Downloadable resume and professional experience
- **Testimonials**: Client or colleague reviews
- **Contact**: Contact form and social media links
- **Responsive Design**: Optimized for all devices and screen sizes
- **Dark/Light Theme**: Theme toggle functionality with smooth transitions and localStorage persistence
- **Smooth Animations**: Engaging user interactions

## Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (built on Radix UI)
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation
- **Charts**: Recharts
- **Analytics**: Vercel Analytics
- **State Management**: React Context for theme management
- **Styling**: CSS Modules for component-specific styles

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/my-portfolio.git
   cd my-portfolio
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Start the development server:

   ```bash
   pnpm dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

### Development

Run the development server with hot reload:

```bash
pnpm dev
```

### Build for Production

Build the project for production:

```bash
pnpm build
```

### Preview Production Build

Preview the production build locally:

```bash
pnpm preview
```

### Linting

Run ESLint to check for code issues:

```bash
pnpm lint
```

## Project Structure

```
my-portfolio/
├── public/
│   └── images/          # Static assets
├── src/
│   ├── components/
│   │   ├── portfolio/   # Portfolio-specific components
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Portfolio.jsx
│   │   │   ├── Resume.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   └── ui/          # Reusable UI components (shadcn/ui)
│   ├── lib/
│   │   └── utils.ts     # Utility functions
│   ├── hooks/           # Custom React hooks
│   ├── App.jsx          # Main App component
│   ├── index.jsx        # Entry point
│   └── globals.css      # Global styles
├── app/                 # Next.js app directory (if used)
├── components.json      # shadcn/ui configuration
├── package.json
├── vite.config.js       # Vite configuration
├── tsconfig.json        # TypeScript configuration
├── jsconfig.json        # JavaScript configuration
├── postcss.config.mjs   # PostCSS configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── README.md
```

## Customization

1. **Personal Information**: Update the content in the portfolio components (Hero, About, etc.) with your own details.

2. **Projects**: Modify the `Portfolio.jsx` component to showcase your projects.

3. **Styling**: Adjust colors, fonts, and layouts in the Tailwind CSS classes or global styles.

4. **Images**: Replace placeholder images in the `public/images/` directory with your own.

## Deployment

This project can be deployed to various platforms:

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions for automated deployment

Build the project first:

```bash
pnpm build
```

Then deploy the `dist` folder to your hosting provider.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is private and not licensed for public use.

## Contact

Vigneshwar - [Your Email] - [Your LinkedIn]

Project Link: [https://github.com/yourusername/my-portfolio](https://github.com/yourusername/my-portfolio)
