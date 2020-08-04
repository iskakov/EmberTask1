import Ember from 'ember';
const {get,set} = Ember;
export default Ember.Component.extend({
    listEduProgr: null,
    didReceiveAttrs(){
        this._super(...arguments);
        let selSemestr = get(this, 'list');

        set(this, 'listEduProgr', selSemestr);
    },
    didUpdateAttrs() {
        this._super(...arguments);
       
        
      },
});
