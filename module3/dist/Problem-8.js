"use strict";
const validateKeys = (obj, keys) => {
    if (obj[keys[0]] && obj[keys[1]]) {
        return true;
    }
    else {
        return false;
    }
};
const person = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person, ["name", "age"]));
