import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNameBindings: ['artwalkPointCompleted'],
  artwalkPointCompleted: Ember.computed.alias('point.done'),
  actions: {
    // toggleDone () {
    //   this.sendAction('toggleItemDone', this.get('item'));
    //   // return this.toggleProperty('listItemCompleted');
    // },
    toggleDone () {
      console.log("youre in toggleDone in artwalk-walk component and this.get(point is)", this.get('point'));
      this.sendAction('toggleDone', this.get('point'));
    },
    delete () {
      console.log("yeaah delete this");
      this.sendAction('delete', this.get('point'));
    },
  },
});
