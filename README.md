# Bubai Ghosh - Java Backend Developer Portfolio

A professional portfolio website showcasing Bubai Ghosh's experience as a Java Backend Developer at Boeing India, built with React, TypeScript, and Tailwind CSS.

## Features

- 🎯 Responsive design that works on all devices
- ⚡ Modern React with TypeScript for type safety
- 🎨 Beautiful UI with Tailwind CSS and shadcn/ui components
- 📱 Mobile-first design approach
- 🔄 Smooth scrolling navigation
- ✨ Animated typing effect in hero section
- 📋 Contact form with validation
- 🚀 Fast development with Vite

## Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality UI components
- **Lucide React** - Beautiful SVG icons
- **React Icons** - Popular icon libraries
- **Wouter** - Lightweight routing
- **React Hook Form** - Performant forms with validation
- **Zod** - TypeScript-first schema validation

### Backend
- **Express.js** - Fast, minimal web framework
- **TypeScript** - Type-safe server code
- **Drizzle ORM** - Type-safe database toolkit

### Development Tools
- **Vite** - Lightning fast build tool
- **ESBuild** - Fast JavaScript bundler
- **PostCSS** - CSS processing tool

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:
- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/bubai-ghosh/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Visit `http://localhost:5000` to see the website

## Available Scripts

### Development
```bash
npm run dev
```
Starts the development server with hot module replacement. The site will be available at `http://localhost:5000`.

### Production Build
```bash
npm run build
```
Creates an optimized production build in the `dist` folder.

### Start Production Server
```bash
npm start
```
Serves the production build. Make sure to run `npm run build` first.

### Type Checking
```bash
npx tsc --noEmit
```
Runs TypeScript compiler to check for type errors without generating files.

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── ui/         # shadcn/ui components
│   │   │   ├── About.tsx   # About section
│   │   │   ├── Contact.tsx # Contact form
│   │   │   ├── Footer.tsx  # Footer component
│   │   │   ├── Hero.tsx    # Hero section with typing effect
│   │   │   ├── Navbar.tsx  # Navigation bar
│   │   │   ├── Projects.tsx# Projects showcase
│   │   │   └── Skills.tsx  # Skills section
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility functions
│   │   ├── pages/          # Page components
│   │   ├── App.tsx         # Main App component
│   │   ├── main.tsx        # React entry point
│   │   └── index.css       # Global styles
│   └── index.html          # HTML template
├── server/                 # Backend Express application
│   ├── index.ts            # Server entry point
│   ├── routes.ts           # API routes
│   ├── storage.ts          # Data storage layer
│   └── vite.ts             # Vite development setup
├── shared/                 # Shared types and schemas
│   └── schema.ts           # Database schemas
├── package.json            # Dependencies and scripts
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration
```

## Key Components

### Hero Section
- Animated typing effect showing different roles
- Call-to-action buttons with smooth scrolling
- Social media links

### About Section
- Professional summary
- Experience timeline with Boeing India
- Education details from Masai School
- Achievement statistics

### Projects Section
- Featured backend projects
- Technology badges
- GitHub and demo links
- Responsive card layout

### Skills Section
- Interactive skill cards with hover effects
- Categorized by Backend, Database & Cloud, and Tools
- Problem-solving statistics

### Contact Section
- Validated contact form
- Contact information with social links
- Professional messaging

## Customization

### Updating Personal Information

1. **Profile Details**: Edit the content in each component file
2. **Projects**: Modify the projects array in `client/src/components/Projects.tsx`
3. **Skills**: Update skill arrays in `client/src/components/Skills.tsx`
4. **Contact Info**: Change contact details in `client/src/components/Contact.tsx`

### Styling

- **Colors**: Modify CSS variables in `client/src/index.css`
- **Components**: Customize component styles using Tailwind classes
- **Typography**: Update font settings in `tailwind.config.ts`

### Adding New Sections

1. Create a new component in `client/src/components/`
2. Import and add it to `client/src/pages/Home.tsx`
3. Update navigation in `client/src/components/Navbar.tsx`

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with default settings

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json: `"homepage": "https://yourusername.github.io/portfolio"`
3. Add deploy script: `"deploy": "gh-pages -d dist"`
4. Run: `npm run build && npm run deploy`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Commit: `git commit -m 'Add some feature'`
5. Push: `git push origin feature-name`
6. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

**Bubai Ghosh**
- Email: bubai.ghosh@email.com
- LinkedIn: [linkedin.com/in/bubai-ghosh](https://linkedin.com/in/bubai-ghosh)
- GitHub: [github.com/bubai-ghosh](https://github.com/bubai-ghosh)

---

Built with ❤️ and lots of ☕ by Bubai Ghosh