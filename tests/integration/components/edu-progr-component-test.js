import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('edu-progr-component', 'Integration | Component | edu progr component', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{edu-progr-component}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#edu-progr-component}}
      template block text
    {{/edu-progr-component}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
