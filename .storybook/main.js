const { mergeConfig } = require('vite');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-dark-mode",
  ],
  "framework": "@storybook/vue3",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  },
  async viteFinal(config, { configType }) {
    // return the customized config
    return mergeConfig(config, {
      // customize the Vite config here
      build: {
        rollupOptions: {
          output: {
            sanitizeFileName(name) {
              const INVALID_CHAR_REGEX = /[\x00-\x1F\x7F<>*#"{}|^[\]`;?:&=+$,]/g;
              const DRIVE_LETTER_REGEX = /^[a-z]:/i;
              
              const match = DRIVE_LETTER_REGEX.exec(name);
              const driveLetter = match ? match[0] : '';
              return (
                driveLetter +
                name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, "")
              );
            },
          },
        },
      },
    });
  },

}