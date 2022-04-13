module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-scss",
  ],
  // babel: async (options) => ({
  //   ...options,
  //   presets: ["solid"],
  // }),
  core: {
    builder: "@storybook/builder-webpack5",
  },
};
