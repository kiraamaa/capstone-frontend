import Ember from 'ember';

export default Ember.Controller.extend({

  lat: 40.669447,
  lng: -73.962884,
  zoom: 12,

  galleries: Ember.A([
    {
      name: 'Mociun',
      image: 'https://media.glamour.com/photos/56964e0e16d0dc3747efa509/master/pass/fashion-2013-12-03-jj-caitlin-mociun-main.jpg',
      description: 'Mociun is a fine jewelry line and brick & mortar store based in Brooklyn, New York. Founded by Caitlin Mociun, the fine jewelry line is known for unique turquoise and diamond combinations, and one-of-kind stone cluster rings using antique diamonds and rare gemstones.',
      lat: 40.717922,
      lng: -73.962570,
    },
    {
      name: 'KikaNY',
      image: 'https://cdn.shopify.com/s/files/1/0224/4349/files/kika2.jpg?8115751021730876993',
      description: 'Founded in 2009 by Kika Vliegenthart and Sabine Spanjer, Kika NY\'s stated goal is to design high quality goods that will last a lifetime - ones with clean, simple lines that eliminate the unnecessary.',
      lat: 40.699383,
      lng: -73.974156
    },
    {
      name: 'MINNA',
      image: 'http://media.vogue.com/r/w_320/2015/10/27/01-minna-collection.jpg',
      description: 'MINNA is a New York based home textile brand established in 2013 by Sara Berks. What began as an exploration in tapestry weaving evolved into the MINNA home textile collection. Designs are informed and inspired by Feminist art, the Bauhaus, traditional craft, and vintage textiles.',
      lat: 40.685751,
      lng: -73.984603
    },
  ]),

  dangerZone: Ember.computed('galleries.@each.lat', 'galleries.@each.lng', function() {
    return this.get('galleries').map(g => ({lat: g.lat, lng: g.lng}));
  }),

  actions: {
    updateLocation(g, e) {
      let location = e.target.getLatLng();
      Ember.setProperties(g, {
        lat: location.lat,
        lng: location.lng
      });
    }

  }

});
