import nodeResolve  from '@rollup/plugin-node-resolve'
import commonjs  from '@rollup/plugin-commonjs'

export default {
  // foo.js は jquery, オリジナルのbarクラスをimportしている
  input: 'src/js/foo.js',
  output: {
    file: 'dist/assets/js/bundle.js',
  },
  plugins: [
    nodeResolve({ jsnext: true }),
    commonjs(),
  ]
};
