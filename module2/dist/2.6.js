"use strict";
// Constraints in typescript
{
    const addCourseToStudent = (student) => {
        const course = 'Next Level Web Development';
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToStudent({ id: 222, name: 'Kakon Ray', email: 'thisiskakonray@gmail.com', devType: 'NLWD' });
    const student2 = addCourseToStudent({ id: 223, name: 'Mr.X', email: 'thisiskakonray2@gmail.com', hasWatch: 'Apple Watch' });
}
