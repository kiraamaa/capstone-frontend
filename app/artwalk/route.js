import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('artwalk', params.artwalk_id);
  },
  actions: {
    togglePointDone (point) {
      console.log("inside artwalk route and point is ", point.get('done'));
      point.toggleProperty('done');
      console.log("inside artwalk route after toggle and point is ", point.get('done'));
      point.save();
    },
    delete (point) {
      point.destroyRecord();
    },
    createPoint (newPoint) {
      console.log("inside route createPoint, newPoint is ",  newPoint);
      let point = this.get('store').createRecord('point', newPoint);
      console.log("inside route createPoint, point is ", point);
      point.save();
    },
  },
});
