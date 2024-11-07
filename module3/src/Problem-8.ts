
type ObjType = {
    name:string,
    age:number,
    email:string
}

const validateKeys = <T,Q extends keyof T>(obj:T, keys: Q[]) => {
    if(obj[keys[0]] && obj[keys[1]]){
        return true
    }else{
        return false;
    }
}

const person = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person, ["name", "age"]));