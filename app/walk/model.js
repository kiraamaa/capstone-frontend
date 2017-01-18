import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr('string'),
  done: DS.attr('boolean'),
  favorite: DS.belongsTo('favorite'),
});
