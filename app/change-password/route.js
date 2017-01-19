import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  flashMessages: Ember.inject.service(),

  actions: {
    changePassword (passwords) {
      this.get('auth').changePassword(passwords)
      .then(() => this.get('auth').signOut())
      .then(() => this.transitionTo('sign-in'))
      .then(() => {
        this.get('flashMessages')
        .success('Successfully changed your password!');
      })
      .then(() => {
        this.get('flashMessages').warning('You have been signed out.');
      })
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.');
      });
    },
  },
  activate: function(){
       $('body').css('background', "url('/assets/images/bw.jpg') no-repeat top fixed");
       $('body').css('background-size', 'cover');
       Ember.$('body').append();
     },
 deactivate: function(){
       $('body').css('background-image', "none");
       Ember.$('body').toggleClass("rest");
     }
});
