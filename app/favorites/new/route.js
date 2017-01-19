import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),

  model () {
    return this.get('store').createRecord('favorite', {});
  },
  actions: {
    // createFavorite (favorite) {
    //   console.log("inside favorites/new route createFavorite");
    //   favorite.save();
    //   favorite.rollbackAttributes();
    //   this.transitionTo('favorites');
    // },
    cancelCreateFavorite (favorite) {
      console.log("inside favorites/new route cancel");
      favorite.rollbackAttributes();
      this.transitionTo('favorites');
    },
    createNewFavorite (data) {
      console.log("inside favorites/new route createNewFavorite");
      console.log("inside favorites/new route createNewFavorite", data);
      let favorite = this.get('store').createRecord('favorite', data);
      // favorite.save();
      // this.transitionTo("favorites");

      favorite.save()
        .then(function(){
          this.transitionTo('favorites');
        })
        .catch(function(){
          this.get('flashMessages')
          .danger('You already favorited this artwalk.');
          this.transitionTo('/artwalks');
        });
      favorite.rollbackAttributes();
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
