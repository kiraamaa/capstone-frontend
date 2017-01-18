import Ember from 'ember';

export default Ember.Component.extend({
  newWalk: {
    content: null,
    done: false,
  },
  classNames: ['artwalk'],
  classNameBindings: ['favoriteDetailHidden'],
  favoriteDetailHidden: false,
  actions: {
    toggleFavoriteDetail () {
      return this.toggleProperty('favoriteDetailHidden');
    },
    toggleWalkDone (walk) {
      console.log("you're inside toggleWalkDone");
      this.sendAction('toggleWalkDone', walk);
    },
    deleteWalk (walk) {
      this.sendAction('deleteWalk', walk);
    },
    createWalk () {
      // console.log("inside createItem", this.get('newItem'));
      // this.sendAction('createItem', this.get('newItem'));
      console.log("inside createWalk, this.get(newWalk) is ", this.get('newWalk'));
      let data = this.get('newWalk');
      data.favorite = this.get('favorite');
      this.sendAction('createItem', data);
    },
  },
});
