# Project Overview

This is a personal portfolio website built with Next.js, a React framework. The website is written in TypeScript and styled with Tailwind CSS. It uses Framer Motion for animations and React Email and Resend for the contact form.

The project is structured as a standard Next.js application with the `app` directory for pages, `components` for reusable UI elements, `context` for state management, `lib` for utility functions and data, and `public` for static assets.

# Building and Running

To get the project up and running, follow these steps:

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    ```
    This will start the development server on [http://localhost:3000](http://localhost:3000).

3.  **Build for production:**
    ```bash
    npm run build
    ```
    This will create an optimized production build in the `.next` directory.

4.  **Start the production server:**
    ```bash
    npm run start
    ```
    This will start the production server.

# Development Conventions

*   **Linting:** The project uses ESLint for code quality and consistency. To run the linter, use the following command:
    ```bash
    npm run lint
    ```
*   **Styling:** The project uses Tailwind CSS for styling. Utility classes are preferred over custom CSS.
*   **Components:** Components are organized in the `components` directory. Each component should be in its own file.
*   **Types:** TypeScript is used for type safety. Types are defined in the `lib/types.ts` file.
