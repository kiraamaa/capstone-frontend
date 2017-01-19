import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    console.log(params);
    return this.get('store').findRecord('artwalk', params.artwalk_id);
  },
  actions: {
    saveFavorite (favorite) {
      console.log("you got to the favorite/edit route. your favorite is ", favorite);
      favorite.save();
      this.transitionTo('favorites');
      favorite.rollbackAttributes();
    },
    cancel (favorite) {
      favorite.rollbackAttributes();
      this.transitionTo('favorites');
    },
    willTransition () {
     let store = this.get('store');
     store.peekAll('favorite').forEach(function (favorite) {
       if (favorite.get('hasDirtyAttributes')) {
         favorite.rollbackAttributes();
       }
     });
     return true;
   },
  },
});
