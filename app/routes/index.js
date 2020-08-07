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
                id: i,
                name: 'Семестер №'+(i+1),
                dateBeg : new Date(dateBeg),
                dateEnd : new Date(dateEnd),
            }));
        }
         let edus = [
             {
                id:0,
                title: 'Алгебра',
                desc: 'Круто',
                sort : 2,
                semester: sems[0]
             },
             {
                id:1,
                title: 'История',
                desc: 'Будешь понимать мир',
                sort : 1,
                semester: sems[0]
             },
             {
                id:2,
                title: 'Алгебра 2',
                desc: 'Круто x2',
                sort : 0,
                semester: sems[1]
             },
             {
                id:3,
                title: 'Матан',
                desc: 'Не круто',
                sort : 1,
                semester: sems[1]
             },
             {
                id:4,
                title: 'Физ-ра',
                desc: 'бе',
                sort : 2,
                semester: sems[1]
             },
             {
                id:5,
                title: 'БЖД',
                desc: 'Будешь понимать мир',
                sort : 0,
                semester: sems[2]
             },
             {
                id:6,
                title: 'Английский',
                desc: 'Круто',
                sort : 0,
                semester: sems[3]
             },
             {
                id:7,
                title: 'Матан 2',
                desc: 'Круто',
                sort : 1,
                semester: sems[3]
             },
             {
                id:8,
                title: 'Дифуры',
                desc: 'Будешь понимать мир',
                sort : 2,
                semester: sems[3]
             },
             {
                id:9,
                title: 'База данных',
                desc: 'Круто',
                sort : 0,
                semester: sems[4]
             },
             {
                id:10,
                title: 'Английский',
                desc: 'Будешь понимать мир',
                sort : 1,
                semester: sems[4]
             },
             {
                id:11,
                title: 'Теория систем',
                desc: 'Круто',
                sort : 2,
                semester: sems[4]
             },
             {
                id:12,
                title: 'Физ-ра',
                desc: 'Будешь понимать мир',
                sort : 3,
                semester: sems[4]
             },
             {
                id:13,
                title: 'Английский',
                desc: 'Круто',
                sort : 0,
                semester: sems[5]
             },
             {
                id:14,
                title: 'Физ-ра',
                desc: 'Будешь понимать мир',
                sort : 1,
                semester: sems[5]
             },
             {
                id:15,
                title: 'Интелектуальные системы',
                desc: 'Круто',
                sort : 2,
                semester: sems[5]
             },
             {
                id:16,
                title: 'Программная иженерия',
                desc: 'Будешь понимать мир',
                sort : 3,
                semester: sems[5]
             },
             {
                id:17,
                title: 'Менеджмент',
                desc: 'Круто',
                sort : 0,
                semester: sems[6]
             },
             {
                id:18,
                title: 'Физ-ра',
                desc: 'Будешь понимать мир',
                sort : 1,
                semester: sems[6]
             },
             {
                id:19,
                title: 'Социология',
                desc: 'Круто',
                sort : 0,
                semester: sems[7]
             },
             {
                id:20,
                title: 'Web-программирование',
                desc: 'Будешь понимать мир',
                sort : 1,
                semester: sems[7]
             },
             {
                id:21,
                title: 'Философия',
                desc: 'Круто',
                sort : 2,
                semester: sems[7]
             },
             {
                id:22,
                title: 'Физ-ра',
                desc: 'Будешь понимать мир',
                sort : 3,
                semester: sems[7]
             }
         ];
         edus.forEach(element => {
             this.store.createRecord('edu-progr', element);
         });
        return this.store.findAll('semester');
    },
    setupController(controller, model){
        set(controller, 'semesters', model);
        set(controller, 'listEdu', null);
        console.log('this is a model222');
    },
    dropLeftFun : function(edu,isLeft){
        if(edu.get('sort') !== 0){
            if(isLeft){
                edu.set('sort', edu.get('sort')-1);
            }
            else{
                edu.set('sort', edu.get('sort')+1);
            }
            let newEdus = [];
            let edus = edu.get('semester').get('sortedItems').toArray();
            edus.forEach(element => {
                if(edu !== element){
                    if(element.get('sort') === edu.get('sort')){
                        if(isLeft){
                            element.set('sort', element.get('sort')+1);
                        }
                        else{
                            element.set('sort', element.get('sort')-1);
                        }
                    }
                }
                newEdus.push(element);
            });
            newEdus.sort(function (lhs, rhs) {
                return lhs.get('sort') - rhs.get('sort');
            });
            edu.get('semester').set('sortedItems', edu.get('semester').get('sortedItems').sort(function (lhs, rhs) {
                return lhs.get('sort') - rhs.get('sort');
            }));
            set(this.controller, 'listEdu', newEdus);
        }
    },
    actions: {
        getEduProgr(selSemester){
            if(selSemester !== null){
                set(this.controller, 'listEdu', selSemester.get('sortedItems'));
            }
        },
        dropLeft(edu){
            this.dropLeftFun(edu, true);
        },
        dropRight(edu){
            this.dropLeftFun(edu, false);
        },
        dropStart(edu){
            
        },
        dropEnd(edu){
            
        }
    } 
});
