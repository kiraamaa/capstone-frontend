import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  flashMessages: Ember.inject.service(),

  actions: {
    signUp (credentials) {
      this.get('auth').signUp(credentials)
      .then(() => this.get('auth').signIn(credentials))
      .then(() => this.transitionTo('application'))
      .then(() => {
        this.get('flashMessages')
        .success('Successfully signed-up! You have also been signed-in.');
      })
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.');
      });
    },
  },
 //  activate: function(){
 //       $('body').css('background', "url('/assets/images/bw.jpg') no-repeat top fixed");
 //       $('body').css('background-size', 'cover');
 //       Ember.$('body').append();
 //     },
 // deactivate: function(){
 //       $('body').css('background-image', "none");
 //       Ember.$('body').toggleClass("rest");
 //     }
});
