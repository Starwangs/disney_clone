import preprocess from 'svelte-preprocess'

const svelte = require('@sveltejs/vite-plugin-svelte');
const { defineConfig } = require('vite');
const { minify } = require('html-minifier');

const minifyHtml = () => {
  return {
    name: 'html-transform',
    transformIndexHtml(html) {
      return minify(html, {
        collapseWhitespace: true,
      });
    },
  };
};

module.exports = defineConfig(({ mode }) => {
  const isProduction = mode === 'production';

  return {
    optimizeDeps: {
      exclude: ['@roxi/routify'],
    },
    plugins: [svelte({ preprocess: preprocess() }), isProduction && minifyHtml()],
    build: {
      minify: isProduction,
    },
  };
});
