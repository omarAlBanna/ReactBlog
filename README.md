# React Blog

#### _A dynamic [React](https://react.dev/) + [Typescript](https://www.typescriptlang.org/) application with multi language support, nested dynamic routes and responsive design_

<br/>

## Table of contents:

| Section                       | Description                                     |
| ----------------------------- | ----------------------------------------------- |
| [Overview](#overview)         | A brief summary of the project and what it does |
| [Features](#features)         | Key features implemented in the app             |
| [Technologies](#technologies) | Libraries, frameworks and tools used            |
| [Installation](#installation) | How to install dependencies and start the app   |
| [Testing](#testing)           | What is tested, and how to run tests            |

<br/>

## Overview:

This project is a [React](https://react.dev/) + [Typescript](https://www.typescriptlang.org/) app demonstrating:

- Nested dynamic routes using [React_Router](https://reactrouter.com/) v7
- Multi language support using React context API
- Safely loading data using `useLoaderData / useRouteLoaderData` as well as custom hooks
- Fully responsive pages and clean reusable components

<br/>

## Features:

- Nested dynamic routes: category/sub
- Language toggle **(English / Arabic)**
- Custom hooks for **safe** and **DRY** data handling
- Loading fallbacks while fetching is happening
- Responsive design from screen width of 250px up to 2500px using [Tailwind_CSS](https://tailwindcss.com/)
- Unit tests using: [React_Testing_Library](https://testing-library.com/docs/react-testing-library/intro/) and [Vitest](https://vitest.dev/)
- Use of [Vite](https://vite.dev/) as a development server and build tool.
- Use of [Sentry](https://share.google/7v042xZQyS0A2gOH9) for error tracking and monitoring

<br/>

## Technologies:

1. [React](https://react.dev/) v19
2. [Typescript](https://www.typescriptlang.org/)
3. [Tailwind_CSS](https://tailwindcss.com/)
4. [Vite](https://vite.dev/)
5. [React_Router](https://reactrouter.com/) v7
6. [Javascript](https://en.wikipedia.org/wiki/JavaScript)
7. [CSS](https://en.wikipedia.org/wiki/CSS)
8. [HTML5](https://en.wikipedia.org/wiki/HTML5)
9. [Vitest](https://vitest.dev/)
10. [React_Testing_Library](https://testing-library.com/docs/react-testing-library/intro/)
11. [Sentry](https://share.google/7v042xZQyS0A2gOH9)

<br/>

## Installation:

1. **Clone the repository:**
   <br/>
   ```bash
   git clone https://github.com/omarAlBanna/ReactBlog.git
   ```
2. **Move to the project directory:**
   <br/>
   ```bash
   cd ReactBlog
   ```
3. **Install dependencies:**
   <br/>

   ```bash
   npm install
   ```

4. **Start the development server:**
   <br/>
   ```bash
   npm run dev
   ```

<br/>

## Testing:

1. This app utilizes unit testing to test all components and pages by using [React_Testing_Library](https://testing-library.com/docs/react-testing-library/intro/) and [Vitest](https://vitest.dev/)

2. Tests cover the rendering of tags and components, click events and state using modern techniques such as:
   <br/>

   > MemoryRouter and createMemoryRouter

   > beforeEach

   > mockReturnValue

   > vi.spyOn

   > data-testid

   > reusable mocks

   > mock types for type safety

3. To run these tests, run:
   <br/>
   ```bash
    npm run test
   ```
