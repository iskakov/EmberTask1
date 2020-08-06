import Ember from 'ember';

const {set, get} = Ember;

export default Ember.Route.extend({
    listEdu : null,
    model(){
        let year = 2019;
        let sems = [];
        for(let i = 0; i<8; i++){
            let dateBeg = "";
            let dateEnd = "";
            if(i%2 === 0){
                dateBeg += year + "-09-01T00:00:00";
                dateEnd += year + "-12-30T00:00:00";
            }
            else {
                year = year +1;
                dateBeg = year + "-01-01T00:00:00";
                dateEnd = year + "-06-30T00:00:00";
            }
            sems.push(this.store.createRecord('semester',{
                name: 'Семестер №'+(i+1),
                dateBeg : new Date(dateBeg),
                dateEnd : new Date(dateEnd),
            }));
        }
         let edus = [
             {
                title: 'Алгебра',
                desc: 'Круто',
                sort : 2,
                semester: sems[0]
             },
             {
                title: 'История',
                desc: 'Будешь понимать мир',
                sort : 1,
                semester: sems[0]
             },
             {
                title: 'Алгебра 2',
                desc: 'Круто x2',
                sort : 0,
                semester: sems[1]
             },
             {
                title: 'Матан',
                desc: 'Не круто',
                sort : 1,
                semester: sems[1]
             },
             {
                title: 'Физ-ра',
                desc: 'бе',
                sort : 2,
                semester: sems[1]
             },
             {
                title: 'БЖД',
                desc: 'Будешь понимать мир',
                sort : 0,
                semester: sems[2]
             },
             {
                title: 'Английский',
                desc: 'Круто',
                sort : 0,
                semester: sems[3]
             },
             {
                title: 'Матан 2',
                desc: 'Круто',
                sort : 1,
                semester: sems[3]
             },
             {
                title: 'Дифуры',
                desc: 'Будешь понимать мир',
                sort : 2,
                semester: sems[3]
             },
             {
                title: 'База данных',
                desc: 'Круто',
                sort : 0,
                semester: sems[4]
             },
             {
                title: 'Английский',
                desc: 'Будешь понимать мир',
                sort : 1,
                semester: sems[4]
             },
             {
                title: 'Теория систем',
                desc: 'Круто',
                sort : 2,
                semester: sems[4]
             },
             {
                title: 'Физ-ра',
                desc: 'Будешь понимать мир',
                sort : 3,
                semester: sems[4]
             },
             {
                title: 'Английский',
                desc: 'Круто',
                sort : 0,
                semester: sems[5]
             },
             {
                title: 'Физ-ра',
                desc: 'Будешь понимать мир',
                sort : 1,
                semester: sems[5]
             },
             {
                title: 'Интелектуальные системы',
                desc: 'Круто',
                sort : 2,
                semester: sems[5]
             },
             {
                title: 'Программная иженерия',
                desc: 'Будешь понимать мир',
                sort : 3,
                semester: sems[5]
             },
             {
                title: 'Менеджмент',
                desc: 'Круто',
                sort : 0,
                semester: sems[6]
             },
             {
                title: 'Физ-ра',
                desc: 'Будешь понимать мир',
                sort : 1,
                semester: sems[6]
             },
             {
                title: 'Социология',
                desc: 'Круто',
                sort : 0,
                semester: sems[7]
             },
             {
                title: 'Web-программирование',
                desc: 'Будешь понимать мир',
                sort : 1,
                semester: sems[7]
             },
             {
                title: 'Философия',
                desc: 'Круто',
                sort : 2,
                semester: sems[7]
             },
             {
                title: 'Физ-ра',
                desc: 'Будешь понимать мир',
                sort : 3,
                semester: sems[7]
             }
         ];
         edus.forEach(element => {
             this.store.createRecord('edu-progr', element);
         });
        // this.store.createRecord('edu-progr', {
        //     title: 'this is a test Title',
        //     desc: 'this is a test Description',
        //     sort : 0,
        //     semester: sem
        // });
        // this.store.createRecord('edu-progr', {
        //     title: 'this is a test Title2',
        //     desc: 'this is a test Description2',
        //     sort : 1,
        //     semester: sem
        // });

        // this.store.createRecord('edu-progr', {
        //     title: 'this is a test Title1',
        //     desc: 'this is a test Description1',
        //     sort : 0,
        //     semester: sem1
        // });
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
                set(this.controller, 'listEdu', selSemester.get('sortedItems'));
            }
        },
        dropped(data, event){
            console.log(data);
            console.log(event);
        }
    } 
});
