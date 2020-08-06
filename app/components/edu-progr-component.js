import Ember from 'ember';
const {get,set} = Ember;
export default Ember.Component.extend({
    classNames:['cont'],
    
    listEdu:null,
    didReceiveAttrs(){
        this._super(...arguments);
        let listEdu = get(this, 'listEdu');
        console.log(listEdu);
        set(this, 'listEdu', listEdu);
    },
    didUpdateAttrs(){
        this._super(...arguments);
        console.log('update');
    },
    actions:{
        dropped(data, event){
            console.log(data);
            console.log(event);
        }
    }
});
