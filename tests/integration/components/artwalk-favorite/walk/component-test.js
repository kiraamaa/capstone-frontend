import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('artwalk-favorite/walk', 'Integration | Component | artwalk favorite/walk', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{artwalk-favorite/walk}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#artwalk-favorite/walk}}
      template block text
    {{/artwalk-favorite/walk}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
