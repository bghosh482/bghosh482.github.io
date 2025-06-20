# Bubai Ghosh - Java Backend Developer Portfolio

## Overview

This is a full-stack web application for a Java Backend Developer's portfolio website. The application uses a modern tech stack with React for the frontend and Express.js for the backend, featuring a clean, professional design with shadcn/ui components and Tailwind CSS styling.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens and dark mode support
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Authentication**: Basic user schema with bcrypt for password hashing (via Drizzle)
- **API Design**: RESTful API structure with `/api` prefix
- **Development**: Hot module replacement and runtime error overlay for enhanced DX

### Data Storage
- **Primary Database**: PostgreSQL (configured via Drizzle)
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Migration System**: Drizzle Kit for database migrations
- **Connection**: Neon Database serverless connection (@neondatabase/serverless)
- **Fallback**: In-memory storage implementation for development/testing

## Key Components

### Frontend Components
- **Layout Components**: Navbar, Hero, About, Projects, Skills, Contact, Footer
- **UI Components**: Comprehensive shadcn/ui component library
- **Custom Hooks**: 
  - `useTypingEffect` for animated text display
  - `useIsMobile` for responsive behavior
  - `useToast` for notifications

### Backend Components
- **Route Registration**: Modular route system with Express router
- **Storage Interface**: Abstract storage interface with memory and database implementations
- **Middleware**: Request logging, error handling, and JSON parsing
- **Development Tools**: Vite integration for SSR during development

### Database Schema
- **Users Table**: Basic user authentication with username/password
- **Type Safety**: Drizzle Zod integration for runtime validation
- **Schema Location**: Shared schema definition in `/shared/schema.ts`

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **API Layer**: Express.js handles requests with proper error handling and logging
3. **Data Access**: Storage interface abstracts database operations
4. **Database**: PostgreSQL stores persistent data via Drizzle ORM
5. **Response**: JSON responses with proper HTTP status codes
6. **Client Update**: TanStack Query manages cache updates and UI re-renders

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React with comprehensive Radix UI components
- **Styling**: Tailwind CSS with PostCSS processing
- **Icons**: Lucide React icons and React Icons
- **Form Handling**: React Hook Form with Zod validation
- **Date Handling**: date-fns for date manipulation
- **Carousel**: Embla Carousel for interactive components

### Backend Dependencies
- **Database**: PostgreSQL with Neon serverless driver
- **ORM**: Drizzle ORM with Drizzle Kit for migrations
- **Session**: Connect-pg-simple for PostgreSQL session store
- **Development**: tsx for TypeScript execution and esbuild for production builds

### Development Tools
- **Build**: Vite with React plugin and runtime error overlay
- **Replit Integration**: Cartographer plugin for Replit-specific features
- **TypeScript**: Strict type checking with modern ES module configuration

## Deployment Strategy

### Development Environment
- **Command**: `npm run dev` - Runs development server with hot reload
- **Port**: 5000 (mapped to external port 80)
- **Database**: PostgreSQL module in Replit environment
- **Features**: Vite HMR, runtime error overlay, TypeScript compilation

### Production Build
- **Frontend Build**: `vite build` - Optimized React bundle
- **Backend Build**: `esbuild` - Bundled Node.js application
- **Output**: Static files in `dist/public`, server bundle in `dist/index.js`
- **Start Command**: `npm run start` - Runs production server

### Replit Configuration
- **Modules**: Node.js 20, Web, PostgreSQL 16
- **Deployment**: Autoscale deployment target
- **Environment**: Nix channel stable-24_05
- **Workflows**: Parallel execution with proper port waiting

## Changelog

```
Changelog:
- June 20, 2025. Initial setup
- June 20, 2025. Created complete portfolio website for Bubai Ghosh with React/TypeScript
- June 20, 2025. Added comprehensive README.md with local development instructions
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```