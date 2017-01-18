import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('artwalk-walk/edit', 'Integration | Component | artwalk walk/edit', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{artwalk-walk/edit}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#artwalk-walk/edit}}
      template block text
    {{/artwalk-walk/edit}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
