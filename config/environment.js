/* jshint node: true */

module.exports = function (environment) {
  var ENV = {
    modulePrefix: 'capstone-frontend',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    apiHost: 'http://localhost:3000/',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
  };

  if (environment === 'production') {
    ENV.rootURL = '/capstone-frontend';
    ENV.locationType = 'hash';
    ENV.apiHost = '<% replace with the URL to your deployed API %>';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.rootUrl = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.locationType = 'hash';
  }

  return ENV;
};
