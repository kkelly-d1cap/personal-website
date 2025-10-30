# Katie Kelly Personal Website

This repository contains the Next.js 14 + Tailwind CSS implementation of Katie Kelly's
personal website. The site includes a content-driven homepage, featured work and
experience sections, and an MDX-powered blog.

## Getting Started

Install dependencies and launch the development server:

```bash
npm install
npm run dev
```

The app will be available at http://localhost:3000.

## Project Structure

- `app/` – Next.js App Router pages, layout, and UI components
- `content/` – Structured TypeScript data and MDX posts used to populate the UI
- `public/` – Static assets such as the profile illustration and resume PDF
- `tailwind.config.ts` – Tailwind theme extension with brand colors and fonts

## Production Build

To verify the site builds successfully, run:

```bash
npm run build
```

This command compiles the production bundle and performs type checking.
