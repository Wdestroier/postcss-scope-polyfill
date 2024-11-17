A PostCSS plugin to generate the required CSS for the [CSS `@scope` polyfill](https://github.com/barneycarroll/scope-polyfill).

- Install PostCSS.
`npm install postcss postcss-preset-env postcss-cli --save-dev`

- Process a single file.
`npx postcss "global.css" -o "output.css" --no-map --config "postcss.config.js"`

- Process all CSS files.
`npx postcss "./styles/**/*.css" --dir "./output/styles/" --no-map --config "postcss.config.js"`

This project is licensed under the MIT License - see the LICENSE file for details.