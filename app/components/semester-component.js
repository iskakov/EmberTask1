import Ember from 'ember';

const {get,set} = Ember;

export default Ember.Component.extend({
    semesters: null,
    didReceiveAttrs(){
        this._super(...arguments);
        let semesters = get(this, 'model');
        set(this, 'semesters', semesters); 
    },
    actions:{
        test(semester){
            this.sendAction('action', semester);
        }
    }
});
