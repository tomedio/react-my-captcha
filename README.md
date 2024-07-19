# React My Captcha

Welcome to the React My Captcha library documentation. This library provides a flexible and easy-to-use Captcha component for React applications, aiming to enhance security by requiring users to solve a captcha challenge before submitting forms or accessing certain functionalities.

## Installation

To get started with React My Captcha in your project, you can install it via npm or yarn. Here are the steps for each package manager:

-   **npm**:

```bash
npm install react-my-captcha
```

-   **yarn**:

```bash
yarn add react-my-captcha
```

After installation, you can import the `Captcha` component or the `useCaptcha` hook into your React components to start using them.

## Library development

### Publishing Library to npm

1. **Build Your Library**: Run the build script to compile the newest version of the library:

```bash
npm run build
```

2. **Publish to npm**: Navigate to the project directory in the terminal and run:

```bash
npm publish --access public
```

### Running Storybook locally

1. **Start Storybook**: Run the following command to start Storybook locally:

```bash
npm run storybook
```

2. **Access Storybook**: Open your browser and navigate to http://localhost:6006 to view your Storybook.

### Building Storybook for GitHub Pages

**Build and Deploy Storybook**: Run the following commands to build and deploy your Storybook:

```bash
npm run deploy-storybook
```

This will generate a static Storybook in the storybook-static directory and push it to the gh-pages branch of your repository.

### Viewing the Storybook on GitHub Pages

After deployment, access your Storybook at https://tomedio.github.io/react-my-captcha/.
