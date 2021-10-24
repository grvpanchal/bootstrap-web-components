import litcss from 'rollup-plugin-lit-css';
import sass from 'sass';
import copy from 'rollup-plugin-copy';

export default {
  input: ['src/index.js'],
  output: {
    dir: 'dist',
    format: 'esm',
    preserveModules: true,
  },
  plugins: [
    litcss({
      include: '/**/*.scss',
      transform: (data, { filePath }) =>
        sass.renderSync({ data, file: filePath })
          .css.toString(),
    }),
    copy({
      targets: [
          { src: './public/*', dest: 'dist' },
      ]
    }),
  ]
}