import Ember from 'ember';

const {get,set} = Ember;

export default Ember.Component.extend({
    tagName : 'scroll',
    didReceiveAttrs(){
        this._super(...arguments);
        let semesters = get(this, 'model');
        console.log(semesters);
        set(this, 'semesters', semesters); 
    },
    actions:{
        test(semester){
            this.sendAction('action', semester);
        }
    }
});
