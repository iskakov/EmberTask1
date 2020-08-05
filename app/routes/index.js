import Ember from 'ember';

const {set, get} = Ember;

export default Ember.Route.extend({
    listEdu : null,
    model(){
        let sem = this.store.createRecord('semester',{
            name: 'this is a test Name semester',
            dateBeg : new Date('2019-09-01T00:00:00'),
            dateEnd : new Date('2019-12-30T00:00:00'),
        }); 
        let sem1 = this.store.createRecord('semester',{
            name: 'this is a test Name semester',
            dateBeg : new Date('2019-09-01T00:00:00'),
            dateEnd : new Date('2019-12-30T00:00:00'),
            // listEdu: list
        }); 
        let edu = this.store.createRecord('edu-progr', {
            title: 'this is a test Title',
            desc: 'this is a test Description',
            sort : 0,
            semester: sem
        });
        let edu1 = this.store.createRecord('edu-progr', {
            title: 'this is a test Title2',
            desc: 'this is a test Description2',
            sort : 1,
            semester: sem
        });

        let edu2 = this.store.createRecord('edu-progr', {
            title: 'this is a test Title1',
            desc: 'this is a test Description1',
            sort : 0,
            semester: sem1
        });
        return this.store.findAll('semester');
    },
    setupController(controller, model){
        set(controller, 'semesters', model);
        set(controller, 'listEdu', null);
        console.log('this is a model222');
    },
    actions: {
        getEduProgr(selSemester){
            if(selSemester !== null){
                console.log(get(this, 'listEdu'));
                set(this.controller, 'listEdu', selSemester.get('listEdu'));
                console.log(get(this, 'listEdu'));
            }
        }
    } 
});
