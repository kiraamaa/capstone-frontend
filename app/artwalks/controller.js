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
