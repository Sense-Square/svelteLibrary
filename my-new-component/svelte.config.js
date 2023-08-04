const sveltePreprocess = require('svelte-preprocess');

module.exports = {
  preprocess: sveltePreprocess({
    sourceMap: true,
    scss: {}, 
    postcss: {}, 
    less: {}, 
    stylus: {}, 
    includePaths: ['src'],
  }),
};
