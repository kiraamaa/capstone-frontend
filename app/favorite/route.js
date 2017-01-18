import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('favorite', params.favorite_id);
  },
  actions: {
    toggleWalkDone (walk) {
      console.log("inside favorite route and walk is ", walk.get('done'));
      walk.toggleProperty('done');
      console.log("inside favorite route after toggle and walk is ", walk.get('done'));
      walk.save();
    },
    delete (walk) {
      walk.destroyRecord();
    },
    createWalk (newWalk) {
      console.log("inside route createWalk, newWalk is ", newWalk);
      let walk = this.get('store').createRecord('walk', newWalk);
      console.log("inside route createWalk, walk is ", walk);
      walk.save();
      walk.rollbackAttributes();
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
