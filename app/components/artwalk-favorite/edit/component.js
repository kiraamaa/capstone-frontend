import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save () {
      this.sendAction('save', this.get('favorite'));
    },
    cancel () {
      this.sendAction('cancel', this.get('favorite'));
    },
  }
});
