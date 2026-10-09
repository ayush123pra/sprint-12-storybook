# Sprint 12 — Storybook Component Library

**Track:** A — Frontend Specialist  
**Technology:** Next.js, React, TypeScript, Storybook

## Overview

This project implements an isolated UI component library using Storybook as part of Sprint 12.

The objective is to develop reusable UI components, preview them independently, and configure interactive controls and theme support.

## Components

- **Button** — Reusable button with different variants and states.
- **Input** — Reusable input field with configurable properties.
- **Card** — Reusable card component for displaying content.

## Features

- Isolated component previews in Storybook.
- Interactive Args and Controls.
- Button variants, sizes, and disabled state.
- Light Mode and Dark Mode support.
- Static Storybook production build.

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run Storybook

```bash
npm run storybook
```

Open the local URL displayed in the terminal, usually `http://localhost:6006`.

### 3. Build Storybook

```bash
npm run build-storybook
```

The static build output is generated in `storybook-static/`.

## Project Structure

```text
sprint-12-storybook/
├── .storybook/
├── app/
├── components/
│   ├── Button.tsx
│   ├── Button.stories.tsx
│   ├── Input.tsx
│   ├── Input.stories.tsx
│   ├── Card.tsx
│   └── Card.stories.tsx
├── public/
├── package.json
├── package-lock.json
├── README.md
└── Prompts.md
```

## Submission

- **GitHub Repository:** Add repository URL after publishing.
- **Live Storybook:** Add URL after deployment.
- **QA Demo:** Add video URL after recording.

## AI Usage

AI assistance was used during development and documentation. The prompt engineering process is documented in [`Prompts.md`](./Prompts.md).
