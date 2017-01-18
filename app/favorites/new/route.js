import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').createRecord('favorite', {});
  },
  actions: {
    createFavorite (favorite) {
      console.log("inside favorites/new route createFavorite");
      favorite.save();
      favorite.rollbackAttributes();
      this.transitionTo('favorites');
    },
    cancelCreateFavorite (favorite) {
      console.log("inside favorites/new route cancel");
      favorite.rollbackAttributes();
      this.transitionTo('favorites');
    },
    willTransition () {
     let store = this.get('store');
     store.peekAll('favorite').forEach(function (favorite) {
       if (favorite.get('isNew') && favorite.get('hasDirtyAttributes')) {
         favorite.rollbackAttributes();
       }
     });
     return true;
   },
  }
});
