import Ember from 'ember';

export default Ember.Controller.extend({

  lat: 40.669447,
  lng: -73.962884,
  zoom: 12,

  galleries: Ember.A([
    {
      name: 'Brooklyn Historical Society',
      image: 'http://brooklynhistory.org/photos/BHS_AlixPiorun-3_Thumbnail.jpg',
      description: 'The Brooklyn Historical Society, founded in 1863, is a museum, library, and educational center preserving and encouraging the study of Brooklyn\'s 400-year history.',
      lat: 40.694796,
      lng: -73.992408,
    },
    {
      name: 'Brooklyn Botanic Garden',
      image: 'http://www.nycgo.com/images/venues/1116/brooklynbotanicgarden_taggeryanceyiv_9877__x_large.jpg',
      description: 'Brooklyn Botanic Garden (BBG) is a botanical garden in the borough of Brooklyn in New York City. Founded in 1910, and located in the Prospect Park neighborhood, the 52-acre (21 ha) garden includes a number of specialty "gardens within the Garden", plant collections and the Steinhardt Conservatory.',
      lat: 40.669447,
      lng: -73.962884
    },
    {
      name: 'Brooklyn Museum',
      image: 'https://d1lfxha3ugu3d4.cloudfront.net/about/images/Photo_Shoots_1_Plaza_at_night_650x431.jpg',
      description: 'The Brooklyn Museum is an art museum located in the New York City borough of Brooklyn. At 560,000 square feet, the museum is New York City\'s third largest in physical size and holds an art collection with roughly 1.5 million works.',
      lat: 40.670966,
      lng: -73.940452
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
