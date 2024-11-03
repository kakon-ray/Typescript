// Constraints in typescript

{
    const addCourseToStudent = <T extends {id:number,name:string,email:string}>(student:T) => {
        const course = 'Next Level Web Development'

        return{
            ...student,
            course
        }
    }



    const student1 = addCourseToStudent<{
        id: number;
        name: string;
        email: string;
        devType: string;
    }>({id:222,name:'Kakon Ray',email:'thisiskakonray@gmail.com',devType:'NLWD'});

    const student2 = addCourseToStudent<{
        id: number;
        name: string;
        email: string;
        hasWatch: string;
    }>({id:223,name:'Mr.X',email:'thisiskakonray2@gmail.com',hasWatch:'Apple Watch'});
}