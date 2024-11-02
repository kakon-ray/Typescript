
// type interface

type User1 = {
    name:string;
    age:number;
}

interface User2 {
    name:string
    age:number
}

type UserWithRole1 = User1 & {role:number}

interface UserWithRole2 extends User2 {
    role:number
}

const user:UserWithRole2 = {
    name:"Kakon Ray",
    age:25,
    role:11
}

const user1:User2 = {
    name:"Kakon Ray",
    age:25
}

type Roll1 = number[]

interface Roll2 {
    [index:number]: number
}

const RollNumber = [0,1,2]

type Add = (num1:number,num2:number) => number;

interface Add2{
   (num1:number,num2:number) : number
}

const add : Add2 = (num1,num2) => num1 * num2