import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNameBindings: ['favoriteWalkCompleted'],
  favoriteWalkCompleted: Ember.computed.alias('walk.done'),
  actions: {
    toggleDone () {
      console.log("youre in toggleDone in artwalk-favorite component and this.get(walk is)", this.get('walk'));
      this.sendAction('toggleDone', this.get('walk'));
    },
    delete () {
      console.log("yeaah delete this");
      this.sendAction('delete', this.get('walk'));
    },
  },
});
