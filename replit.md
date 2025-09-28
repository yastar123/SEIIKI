# SEIIKI - PT. Solusi Energi Kelistrikan Indonesia

## Overview
This is a Next.js application for SEIIKI (PT. Solusi Energi Kelistrikan Indonesia), which provides services related to electrical safety certification (SLO - Sertifikat Laik Operasi).

## Project Architecture
- **Frontend**: Next.js 15.3.3 with TypeScript
- **UI Framework**: Tailwind CSS with Radix UI components
- **Database**: PostgreSQL with Prisma ORM (configured but not yet connected)
- **Icons**: Lucide React
- **Carousel**: Embla Carousel
- **Form Handling**: React Hook Form with Zod validation

## Features
- Professional landing page with hero carousel
- Navigation with dropdown menus for various services
- Service sections for SLO (electrical certification) services
- Contact and company profile pages
- Dashboard functionality for user management
- Responsive design with mobile-first approach

## Recent Changes (September 28, 2025)
- ✅ Successfully imported GitHub project to Replit environment
- ✅ Configured Next.js for Replit (host binding to 0.0.0.0:5000)
- ✅ Installed all dependencies via npm
- ✅ Set up frontend development workflow
- ✅ Fixed JWT authentication (added JWT_SECRET environment variable)
- ✅ Configured Next.js to handle Replit proxy with allowedDevOrigins
- ✅ Set up PostgreSQL database connection
- ✅ Generated Prisma client and pushed database schema
- ✅ Configured deployment settings for autoscale deployment
- ✅ Application fully functional and tested

## Development Setup
The application is configured to run on:
- Host: 0.0.0.0 (allowing Replit proxy access)
- Port: 5000 (required for Replit environment)
- Dev command: `npm run dev`
- Environment: JWT_SECRET configured in .env.local
- Database: PostgreSQL connected via DATABASE_URL

## User Preferences
- The project uses Indonesian language for content
- Professional business theme with electrical industry focus (SEIIKI - PT. Solusi Energi Kelistrikan Indonesia)
- Uses modern UI components and responsive design
- Authentication system for user management
- Content management system for dynamic content

## File Structure
- `/src/app/` - Next.js App Router pages and API routes
- `/src/components/` - Reusable UI components (auth, layout, UI)
- `/src/lib/` - Utility functions, authentication, database configurations
- `/src/hooks/` - Custom React hooks
- `/src/contexts/` - React context providers
- `/prisma/` - Database schema and seed files
- `/docs/` - Project documentation

## Current Status
✅ Project fully imported and operational
✅ Frontend server running successfully on port 5000
✅ All dependencies installed and configured
✅ Database connected and schema deployed
✅ Authentication system configured
✅ Deployment configuration completed
✅ Ready for production deployment