/* eslint-disable */

module.exports = {
  apps: [
    {
      name: 'blog client',
      script: './initializers/server/index.jsx',
      env: {
        'NODE_ENV': 'development'
      },
      env_production: {
        'NODE_ENV': 'production'
      }
    }
  ]
};
