import DS from 'ember-data';

const {attr} = DS;

export default DS.Model.extend({
    title : attr('string'),
    desc : attr('string'),
    sort : attr('numbre')
});
