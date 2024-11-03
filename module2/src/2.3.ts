{
    // generic type

    type GenericArray<T> = Array<T>

    // const rollNumbers : number[] = [3,6,8];
    const rollNumbers : GenericArray<number> = [3,6,8];


    // const mentors: string[] = ['Mr.X', 'Mr.Y', 'Mr.x']

    const mentors: GenericArray<string> = ['Mr.X', 'Mr.Y', 'Mr.x']

    // const boolArray: boolean[] = [true, false, true];
    const boolArray: GenericArray<boolean> = [true, false, true];

    const user:GenericArray<{name:string,age:number}> = [
        {
            name:'Kakon',
            age:25
        },
        {
            name:'Pranojit',
            age:24
        }
    ]


    const add = (x:number, y:number) => x + y ;
    add(30,20) ;


    // generic tuple

    type Generictuple<X,Y> = [X,Y];

    const maush:Generictuple<string,string> = ['Mr.X','Ms.Y'];


    
    const UserID:Generictuple<number,{name:string,email:string}> = [1234,{name:'Kakon',email:'kakonray@gmail.com'}]



}