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
    {
      name: 'Sardine',
      image: 'https://news.artnet.com/app/news-upload/2015/03/sardine.jpg',
      description: 'This tiny gallery space, situated in Brooklyn’s Bushwick neighborhood, allows viewers to look at art in an intimate setting. Founded and run by Lacey Fekishazy and Jon Lutz, the space specializes in solo shows—up now at the gallery is a solo exhibition featuring works by Brooklyn-based artist Jaime Gecker.',
      lat: 40.702074,
      lng: -73.918738
    },
    {
      name: 'Mociun',
      image: 'https://media.glamour.com/photos/56964e0e16d0dc3747efa509/master/pass/fashion-2013-12-03-jj-caitlin-mociun-main.jpg',
      description: 'Mociun is a fine jewelry line and brick & mortar store based in Brooklyn, New York. Founded by Caitlin Mociun, the fine jewelry line is known for unique turquoise and diamond combinations, and one-of-kind stone cluster rings using antique diamonds and rare gemstones.',
      lat: 40.717922,
      lng: -73.962570,
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
