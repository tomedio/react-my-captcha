import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
    stories: [
        "../src/__docs__/main.mdx",
        "../src/**/__docs__/*.stories.tsx",
        "../src/**/__docs__/*.mdx",
    ],
    addons: [
        "@storybook/preset-create-react-app",
        "@storybook/addon-onboarding",
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@chromatic-com/storybook",
        "@storybook/addon-interactions",
    ],
    framework: {
        name: "@storybook/react-webpack5",
        options: {},
    },
    staticDirs: ["../public"],
};
export default config;
