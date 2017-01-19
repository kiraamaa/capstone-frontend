import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('artwalk');
  },
  actions: {
    editArtwalk (artwalk) {
      console.log("inside artwalks route, artwalk is ", artwalk);
      this.transitionTo('artwalk/edit', artwalk);
    },
    deleteArtwalk (artwalk) {
      artwalk.destroyRecord();
    },
    createNewFavorite (artwalk) {
      console.log("inside artwalks route, new favorite artwalk is", artwalk);
      let favorite = this.get('store').createRecord('favorite', artwalk);

      favorite.save()
        .then(() => {
          console.log("inside then");
          this.transitionTo('favorites');
        })
        .catch(() => {
          favorite.destroyRecord();
          this.get('flashMessages')
          .danger('You already favorited this artwalk.');
        });

      favorite.rollbackAttributes();
    },
    willTransition () {
     let store = this.get('store');
     store.peekAll('artwalk').forEach(function (artwalk) {
       if (artwalk.get('hasDirtyAttributes')) {
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
