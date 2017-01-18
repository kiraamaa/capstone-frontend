import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');

  this.route('brooklyn-standards');
  this.route('artwalk', function() {
    this.route('edit');
  });
  this.route('artwalks', function() {
    this.route('new');
  });
});

export default Router;
