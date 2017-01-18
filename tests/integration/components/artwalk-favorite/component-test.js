import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('artwalk-favorite', 'Integration | Component | artwalk favorite', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{artwalk-favorite}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#artwalk-favorite}}
      template block text
    {{/artwalk-favorite}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
