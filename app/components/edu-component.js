import Ember from 'ember';
const {get,set} = Ember;

export default Ember.Component.extend({
    classNames        : [ 'draggableItem' ],
    attributeBindings : [ 'draggable' ],
    draggable         : 'true',

    dragStart(event) {
        return event.dataTransfer.setData('text/data', get(this, 'content'));
    },
    classNames: ['edu']
});
