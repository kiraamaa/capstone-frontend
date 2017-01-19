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
      name: 'Real Fine Arts',
      image: 'https://news.artnet.com/app/news-upload/2015/03/IMG_8840.jpg',
      description: 'This Greenpoint gallery was founded by Tyler Dobson and Ben Morgan-Cleveland in 2008 as a place where they could stage art-related activities for themselves and their friends. The gallery works closely with Yuji Agematsu, Nicolas Ceccaldi, Jana Euler, New Museum Triennialist Lena Henke (see The New Museum Triennial Offer a Dazzling and Dystopian Vision of the Future), Mathieu Malouf, and Sam Pulitzer, among others.',
      lat: 40.722885,
      lng: -73.940452
    },
    {
      name: 'Clearing',
      image: 'https://news.artnet.com/app/news-upload/2015/03/clearing.jpg',
      description: 'The Brussels and Brooklyn-based gallery founded by Olivier Babin boasts a relatively new 5,000 square-foot space in the neighborhood of Bushwick, a venue formerly used as a truck repair depot. Artists on the gallery’s roster include Harold Ancart, Korakrit Arunanondchai, Aaron Augjla, Sebastian Black, Koenraad Dedobbeleer, Ryan Foerster, Calvin Marcus, Marina Pinsky, Loïc Raguénès, and Lili Reynaud-Dewar.',
      lat: 40.707463,
      lng: -73.932686,
    },
    {
      name: 'Microscope Gallery',
      image: 'https://news.artnet.com/app/news-upload/2015/03/microscope.jpg',
      description: 'Founded in 2010 by artists and curators Elle Burchill and Andrea Monti, the Bushwick gallery specializes in sound, digital, video, and performance art. The gallery recently moved to a new space at 1329 Willoughby Avenue, with its inaugural solo show featuring Zach Nader. The gallery also hosts events at night, with talks, screenings, and performances.',
      lat: 40.706314,
      lng: -73.921075
    },
    {
      name: 'Sardine',
      image: 'https://news.artnet.com/app/news-upload/2015/03/sardine.jpg',
      description: 'This tiny gallery space, situated in Brooklyn’s Bushwick neighborhood, allows viewers to look at art in an intimate setting. Founded and run by Lacey Fekishazy and Jon Lutz, the space specializes in solo shows—up now at the gallery is a solo exhibition featuring works by Brooklyn-based artist Jaime Gecker.',
      lat: 40.702074,
      lng: -73.918738
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
