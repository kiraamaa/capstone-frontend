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
});
