import DS from 'ember-data';

export default DS.Model.extend({
  artwalkId: DS.attr('number'),
  title: DS.attr('string')
});
