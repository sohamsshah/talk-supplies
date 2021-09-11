/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
     // directory name: 'build directory'
     public: '/',
     src: '/dist',
  },
  plugins: ['@snowpack/plugin-react-refresh'],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2018',
  },
  packageOptions: {
    // source: 'remote',
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
