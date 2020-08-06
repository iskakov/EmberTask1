import Ember from 'ember';
const {set} = Ember;
export default Ember.Component.extend({
    classNames        : [ 'draggableDropzone','list' ],
    classNameBindings : [ 'dragClass' ],
    dragClass         : 'deactivated',

    dragLeave(event) {
        event.preventDefault();
        set(this, 'dragClass', 'deactivated');
    },

    dragOver(event) {
        event.preventDefault();
        set(this, 'dragClass', 'activated');
    },

    drop(event) {
        var data = event.dataTransfer.getData('text/data');
        this.sendAction('action', data, event);

        set(this, 'dragClass', 'deactivated');
    },
});
