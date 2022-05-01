/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    /* ... */
    public: { url: "/" },
    src: { url: "/dist" },
  },
  plugins: [
    /* ... */
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
    {
      match: "routes",
      src: ".*",
      dest: "/index.html",
    },
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
    knownEntrypoints: ["framesync"],
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
    out: "docs",
    metaUrlPath: "snowpack",
    clean: true,
    jsxInject: `import React from 'react'`,
  },
};
