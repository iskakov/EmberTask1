import DS from 'ember-data';

const { attr, hasMany } = DS;

export default DS.Model.extend({
    name : attr('number'),
    dateBeg : attr('date'),
    dateEnd : attr('date'),

    listEdu : hasMany('edu-progr'),
    sortedItems: function () {
        var items = this.get('listEdu').toArray();
        console.log(items);
        return items.sort(function (lhs, rhs) {
          return lhs.get('sort') - rhs.get('sort');
        });
      }.property('listEdu.@each.isLoaded')
});
