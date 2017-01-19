import Ember from 'ember';

export default Ember.Route.extend({
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
