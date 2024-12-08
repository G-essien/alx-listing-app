# ALX Listing App

## Project Description

The **ALX Listing App** is the foundational setup for an Airbnb clone that serves as the starting point for building a modern property listing page. This project focuses on creating a clean, scalable, and maintainable codebase using **Next.js**, **TypeScript**, **TailwindCSS**, and **ESLint**. The goal is to create a responsive, user-friendly interface for displaying property listings, enabling functionalities like booking, viewing details, and more.

By completing this project, learners will gain hands-on experience in web development using modern technologies and best practices, while ensuring the app is ready for further enhancements and production deployment.

## Project Structure

The **ALX Listing App** is structured to promote scalability and maintainability. Below is a breakdown of the core directories and files:

### `components/`
This directory contains all reusable UI components that can be shared across different pages. It includes:

- **common/Card.tsx**: A reusable Card component used to display property details (title, description, image).
- **common/Button.tsx**: A reusable Button component used for interactive actions like "Book Now" or "View Details".

These components are designed to be modular and flexible, making it easier to add or modify UI elements without affecting other parts of the app.

### `interfaces/`
The `interfaces/` directory contains TypeScript interfaces that define the structure and types of data passed to components. This ensures type safety and code consistency. Currently, it includes:

- **index.ts**: Contains interfaces like `CardProps` and `ButtonProps` to ensure the correct types are passed into components.

### `constants/`
This directory holds reusable constant values and settings for the application. This includes things like API URLs or UI text that may need to be accessed throughout the app. For example:

- **index.ts**: Includes constants like `API_URL` (for API requests) and `DEFAULT_IMAGE` (for fallback images).

### `public/assets/`
This directory is where all static assets (images, SVGs, icons, etc.) are stored. These assets are referenced in components and pages, such as property images used in the Card component. By organizing assets in this way, we make them easy to manage and maintain. For example:

- Property images, icons, and other media files used in the app are stored here for easy reference.

### `styles/`
Contains the global CSS styles for the app, including the TailwindCSS setup.

- **globals.css**: This file imports TailwindCSS base, components, and utilities to style the app. It includes any additional global styling as needed.

### `pages/`
This is the standard directory for Next.js pages. It contains:

- **index.tsx**: The main landing page where the property listings will be displayed.

### `README.md`
This file provides documentation for the project, describing its purpose, goals, and folder structure. It is intended to help developers understand the setup and guide them through running the app locally.

## How to Run the Project Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/alx-listing-app.git

