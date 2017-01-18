import Ember from 'ember';

export default Ember.Component.extend({
  // isEmpty: Ember.computed('artwalk', function() {
  //   let points = this.get('artwalk').hasMany('points');
  //   console.log("points is", points);
  //   return points.ids().length === 0;
  // }),
  actions: {
    edit () {
      console.log("inside editWalk in artwalk-walk/card component");
      console.log("the artwalk im clicking edit on is", this.get('artwalk'));
      this.sendAction('edit', this.get('artwalk'));
    },
    delete () {
      console.log("testtttttttt",this.get('artwalk') );

      this.sendAction('delete', this.get('artwalk'));
    },
  },
});
