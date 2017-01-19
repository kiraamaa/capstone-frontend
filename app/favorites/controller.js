import Ember from 'ember';

export default Ember.Controller.extend({
  // var greenIcon = new L.Icon({
  //   iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  //   shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  //   iconSize: [25, 41],
  //   iconAnchor: [12, 41],
  //   popupAnchor: [1, -34],
  //   shadowSize: [41, 41]
  // });
  //
  // L.marker([51.5, -0.09], {icon: greenIcon}).addTo(map);

  lat: 40.706314,
  lng: -73.921075,
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
      name: 'Clearing',
      image: 'https://news.artnet.com/app/news-upload/2015/03/clearing.jpg',
      description: 'The Brussels and Brooklyn-based gallery founded by Olivier Babin boasts a relatively new 5,000 square-foot space in the neighborhood of Bushwick, a venue formerly used as a truck repair depot. Artists on the gallery’s roster include Harold Ancart, Korakrit Arunanondchai, Aaron Augjla, Sebastian Black, Koenraad Dedobbeleer, Ryan Foerster, Calvin Marcus, Marina Pinsky, Loïc Raguénès, and Lili Reynaud-Dewar.',
      lat: 40.707463,
      lng: -73.932686,
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
