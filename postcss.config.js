export default {
  plugins: {
    'tailwindcss': {},
    'autoprefixer': {},
    'postcss-preset-env': {
      stage: 3,
      features: {
        'nesting-rules': true
      }
    },
    'cssnano': {
      preset: 'default',
      plugins: [
        ['cssnano-preset-default', {
          discardComments: {
            removeAll: true,
          },
          normalizeWhitespace: true,
          minifyFontValues: true,
          minifyGradients: true,
          minifyParams: true,
          minifySelectors: true,
          reduceIdents: false,
          zindex: false,
          colormin: true
        }]
      ]
    }
  }
};