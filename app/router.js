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

  this.route('artwalks');
  this.route('artwalks/new');
  this.route('artwalk', { path: 'artwalks/:artwalk_id' });
  this.route('artwalk/edit', { path: 'artwalks/:artwalk_id/edit' });

  this.route('points');

  this.route('favorites');
  this.route('favorites/new');
  this.route('favorite', { path: 'favorites/:favorite_id' });
  this.route('favorite/edit', { path: 'favorites/:favorite_id/edit' });
  this.route('hipster-galleries');
  this.route('artisanal-shops');
});

export default Router;
