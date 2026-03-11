# Trinix Travel Platform

Production-oriented MERN+ monorepo scaffold for a B2C travel booking platform.

This repository now uses React page components in `apps/web/src/pages` and an Express API in `apps/api/src`. The earlier standalone static HTML prototype files were removed.

## Stack

- Frontend: React 18, Vite, TypeScript, Tailwind CSS, Framer Motion, React Router
- Backend: Node.js, Express, TypeScript, Mongoose, Zod, JWT, Swagger, Winston
- Infra: MongoDB, Redis, Docker Compose, GitHub Actions
- Testing: Vitest, React Testing Library, Jest, Supertest, Cypress scaffold

## Workspace Layout

- `apps/web`: React application
- `apps/api`: Express API
- `packages/shared`: shared domain types
- `infra`: deployment assets

## Quick Start

1. Install dependencies: `npm install`
2. Copy envs: use `.env.example` as `.env`
3. Start infra: `docker compose up -d mongodb redis`
4. Run apps: `npm run dev`

## Important Notes

- Payment, OAuth, Redis, monitoring, and cloud deployment are scaffolded as integration points and still require real credentials and environment-specific hardening.
- This repository provides a production-grade foundation and representative implementation, not a completed live-commerce deployment.
