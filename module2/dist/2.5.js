"use strict";
// function with generics
// {
//     const createArray = (param:string) : string[] => {
//         return [param]
//     }
//     const createArrayWithGeneric = <T>(param:T) : T[] => {
//         return [param]
//     }
//     const res1 = createArray('Bangladesh')
//     const resGeneric = createArrayWithGeneric<string>('Bangladesh')
//     type User = {Id:number,name:string}
//     const resGenericObject = createArrayWithGeneric<User>({Id:222,name:'Kakon'})
// }
{
    // function with generics
    const createArrayWithTuple = (param1, param2) => {
        return [param1, param2];
    };
    const resGeneric = createArrayWithTuple('Bangladesh', 222);
    const resGenericObject = createArrayWithTuple('Bangladesh', { Id: 222, name: 'Kakon' });
    const addCourseToStudent = (student) => {
        const course = 'Next Level Web Development';
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToStudent({ name: 'Kakon Ray', email: 'thisiskakonray@gmail.com', devType: 'NLWD' });
    const student2 = addCourseToStudent({ name: 'Mr.X', email: 'thisiskakonray2@gmail.com', devType: 'NLWD' });
}
