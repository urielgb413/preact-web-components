import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/bundle.cjs.js',
      format: 'cjs',
      exports: 'auto'
    },
    {
      file: 'dist/bundle.esm.js',
      format: 'esm'
    },
    {
      name: 'PreactWebComponents',
      file: 'dist/bundle.umd.js',
      format: 'umd'
    }
  ],
  plugins: [
    resolve(),
    babel({ exclude: 'node_modules/**', babelHelpers: 'bundled' })
  ]
}
