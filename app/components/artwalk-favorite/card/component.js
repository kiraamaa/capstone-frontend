import Ember from 'ember';

export default Ember.Component.extend({
  // isEmpty: Ember.computed('favorite', function() {
  //   let walks = this.get('favorite').hasMany('walks');
  //   console.log("walks is", walks);
  //   return walks.ids().length === 0;
  // }),
  actions: {
    edit () {
      console.log("inside editFavorite in artwalk-favorite/card component");
      console.log("the favorite im clicking edit on is", this.get('favorite'));
      this.sendAction('edit', this.get('favorite'));
    },
    delete () {
      this.sendAction('delete', this.get('favorite'));
    },
  },
});
