import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    console.log(params);
    return this.get('store').findRecord('artwalk', params.artwalk_id);
  },
  actions: {
    saveArtwalk (artwalk) {
      console.log("you got to the artwalk/edit route. your artwalk is ", artwalk);
      artwalk.save();
      this.transitionTo('artwalks');
      artwalk.rollbackAttributes();
    },
    cancel (artwalk) {
      artwalk.rollbackAttributes();
      this.transitionTo('artwalks');
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
});
