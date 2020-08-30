const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-essentials'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [{loader: require.resolve('ts-loader')}],
    });
    config.resolve.extensions.push('.ts', '.tsx');
    config.resolve.plugins.push(new TsconfigPathsPlugin({}));
    return config;
  },
};
