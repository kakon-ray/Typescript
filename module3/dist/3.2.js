"use strict";
// Inheritance
{
    class Parent {
        constructor(name, age, address) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(numberOfHour) {
            console.log(`${this.name} will sleep for ${numberOfHour}`);
        }
    }
    class Student extends Parent {
        constructor(name, age, address) {
            super(name, age, address);
        }
    }
    class Teacher extends Parent {
        constructor(name, age, address, designation) {
            super(name, age, address);
            this.designation = designation;
        }
        techClass(numberOfClass) {
            console.log(`${this.name} will take for ${numberOfClass}`);
        }
    }
    const student1 = new Student('Kakon Ray', 25, 'Australia');
    student1.getSleep(2);
    const teacher1 = new Teacher('Mr Teacher', 25, 'Australia', 'Professor');
    teacher1.techClass(5);
}
