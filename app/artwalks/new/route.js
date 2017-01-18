import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').createRecord('artwalk', {});
  },
  actions: {
    createArtwalk (artwalk) {
      console.log("inside artwalks/new route createArtwalk");
      console.log("this is artwalk", artwalk);
      artwalk.save();
      this.transitionTo('artwalks');
      artwalk.rollbackAttributes();
    },
    cancelCreateArtwalk (artwalk) {
      console.log("inside artwalks/new route cancel");
      artwalk.rollbackAttributes();
      this.transitionTo('artwalks');
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
  }
});
