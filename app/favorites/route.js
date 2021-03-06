import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('favorite');
  },
  actions: {
    editFavorite (favorite) {
      console.log("inside favorites route, favorite is ", favorite);
      this.transitionTo('favorite/edit', favorite);
    },
    deleteFavorite (favorite) {
      favorite.destroyRecord();
    },
    willTransition () {
     let store = this.get('store');
     store.peekAll('artwalk').forEach(function (artwalk) {
       if (artwalk.get('isNew') && artwalk.get('hasDirtyAttributes')) {
         artwalk.rollbackAttributes();
       }
     });
     return true;
   },
  },
 //  activate: function(){
 //       $('body').css('background', "url('/assets/images/bw.jpg') no-repeat top fixed");
 //       $('body').css('background-size', 'cover');
 //       Ember.$('body').append();
 //     },
 // deactivate: function(){
 //       $('body').css('background-image', "none");
 //       Ember.$('body').toggleClass("rest");
 //     }
});
