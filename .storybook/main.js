const path = require('path');
module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.css|\.s(c|a)ss$/,
      use: [{
        loader: 'lit-scss-loader',
        options: {
          minify: true, // defaults to false
        },
      }, 'extract-loader', 'css-loader', 'sass-loader'],
    });

    config.resolve.alias['style-shelter'] = path.resolve(__dirname, '../public/lib/style-shelter');
    config.resolve.alias['bootstrap-element'] = path.resolve(__dirname, '../public/lib/bootstrap-element');

    // Return the altered config
    return config;
  },
}