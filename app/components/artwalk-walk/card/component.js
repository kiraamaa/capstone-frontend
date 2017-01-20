import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),

  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),

  newFavorite: {
    title: null,
  },
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
    createNewFavorite () {
      console.log("in create favorite");
      let data = this.get('newFavorite');
      console.log("this is createNewFavorite data inside editWalk", data.title);
      data.artwalkId = this.get('artwalk').get('id');
      data.title = this.get('artwalk.title');
      console.log("this is createNewFavorite data inside editWalk after", data.title);
      console.log("this is data in createNewFavorite", data);
      this.sendAction('createNewFavorite', data);
    },
  },
});
