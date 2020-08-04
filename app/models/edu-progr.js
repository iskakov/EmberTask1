import DS from 'ember-data';

const {attr, belongsTo} = DS;

export default DS.Model.extend({
    title : attr('string'),
    desc : attr('string'),
    sort : attr('number'),
    semester: belongsTo('semester')
});
