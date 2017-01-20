/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    fingerprint: {
    exclude: [
      'images/layers-2x.png',
      'images/layers.png',
      'images/marker-icon-2x.png',
      'images/marker-icon.png',
      'images/marker-shadow.png'
    ]
  },
    sassOptions: {
      includePaths: [
        'bower_components/bootstrap-sass/assets/stylesheets'
      ]
    }
  });

  app.import('bower_components/bootstrap-sass/assets/javascripts/bootstrap.js');

  return app.toTree();
};
