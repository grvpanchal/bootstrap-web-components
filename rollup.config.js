// rollup.config.js
import litcss from 'rollup-plugin-lit-css';
import Sass from 'sass';

export default {
  input: 'src/**/*.js',
  output: {
    dir: 'dist',
    format: 'esm'
  },
  plugins: [
    litcss({
      include: '/**/*.scss',
      transform: (data, { filePath }) =>
        Sass.renderSync({ data, file: filePath })
          .css.toString(),
    }),
  ]
}