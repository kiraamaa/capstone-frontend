import DS from 'ember-data';

export default DS.Model.extend({
  // description: DS.attr('string'),
  // done: DS.attr('boolean'),
  // artwalk: DS.belongsTo('artwalk'),
  content: DS.attr('string'),
  done: DS.attr('boolean'),
  artwalk: DS.belongsTo('artwalk'),
});
