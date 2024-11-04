"use strict";
// type gard
{
    const add = (param1, param2) => {
        if (typeof param1 === "number" && typeof param2 === "number") {
            return param1 + param2;
        }
        else {
            return param1.toString() + param2.toString();
        }
    };
    const result1 = add("2", "4");
    console.log(result1);
    const getUser = (user) => {
        if ('role' in user) {
            console.log(`Admin User ${user.name} and my role is ${user.role}`);
        }
        else {
            console.log(`Namal User User ${user.name}`);
        }
    };
    const normalUser = {
        name: "Mr Normal user"
    };
    const adminUser = {
        name: "Mr Admin user",
        role: "admin"
    };
    getUser(adminUser);
}
