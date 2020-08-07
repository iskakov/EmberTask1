import Ember from 'ember';
const {get,set} = Ember;
export default Ember.Component.extend({
    classNames:['cont'],
    selEdu: null,
    listEdu:null,
    didReceiveAttrs(){
        this._super(...arguments);
        let listEdu = get(this, 'listEdu');
        console.log(listEdu);
        
        set(this, 'listEdu', listEdu);
    },
    actions:{
        setEdu(edu){
            this.selEdu = edu;
        },
        left(){
            if(this.selEdu!=null){
                console.log('left');
                this.sendAction('dropLeft', this.selEdu);
            }
        },
        right(){
            if(this.selEdu!=null){
                console.log('left');
                this.sendAction('dropRight', this.selEdu);
            }
        }
    }
});
