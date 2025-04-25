# Astronomy Picture of the Day
A responsive web app that displays NASA's daily Astronomy Picture of the Day. Built with modern web technologies, the app fetches and presents stunning space imagery along with detailed explanations, using the official NASA APOD API.

# Getting Started

To configure your local development environment, follow these steps:

1. Copy the Template File:

    Duplicate the `.env.template` file and rename the copy to `.env`

2. Set Up the API Key:

    Open the `.env` file and define the following variables:

```bash
VITE_NASA_BASE_URL=https://api.nasa.gov
VITE_APOD_API_KEY=DEMO_KEY
```

### Setting Up Your API Key

For development purposes, a demo API key is provided:

```bash
VITE_APOD_API_KEY=DEMO_KEY
```

This demo key has usage limitations and may not support all features. To ensure full functionality, especially if you encounter usage limits, please obtain your own API key.

#### Steps to Obtain Your API Key:
1. Visit the official [NASA API](https://api.nasa.gov/) website to register for an API key.
2. Fill out the form with the required data and Sign Up.
3. You will receive an email with your NASA API key.
4. Once you have your API key, update the `.env` file in the root of your project::

```bash
VITE_APOD_API_KEY=your_actual_api_key
```

Replace `your_actual_api_key` with the key you obtained.

This setup ensures that your application uses your personal API key, allowing for higher usage limits and full access to all features.

To run the application: on the local machine:

```bash
npm install
npm run dev
```

# Building For Production

To build this application for production:

```bash
npm run build
```

## Testing

This project uses [Vitest](https://vitest.dev/) for testing. You can run the tests with:

```bash
npm run test
```

## Styling

This project uses [Tailwind CSS](https://tailwindcss.com/) for styling.

## Linting & Formatting

This project uses [eslint](https://eslint.org/) and [prettier](https://prettier.io/) for linting and formatting. Eslint is configured using [tanstack/eslint-config](https://tanstack.com/config/latest/docs/eslint). The following scripts are available:

```bash
npm run lint
npm run format
npm run check
```

## T3Env

- You can use T3Env to add type safety to your environment variables.
- Add Environment variables to the `src/env.mjs` file.
- Use the environment variables in your code.

### Usage

```ts
import { env } from '@/env'

console.log(env.VITE_APP_TITLE)
```

## Routing

This project uses [TanStack Router](https://tanstack.com/router) with a file-based routing setup. Routes are defined and managed through files located in the `src/routes` directory.