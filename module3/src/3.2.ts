// Inheritance

{

    class Parent {
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address
        }

        public getSleep(numberOfHour: number) {
            console.log(`${this.name} will sleep for ${numberOfHour}`)
        }
    }

    class Student extends Parent {
        constructor(name: string, age: number, address: string) {
            super(name, age, address)
        }
    }


    class Teacher extends Parent {
        designation: string;

        constructor(name: string, age: number, address: string, designation: string) {
            super(name, age, address);
            this.designation = designation;
        }


        public techClass(numberOfClass: number) {
            console.log(`${this.name} will take for ${numberOfClass}`)
        }
    }


    const student1 = new Student('Kakon Ray', 25, 'Australia')
    student1.getSleep(2);

    const teacher1 = new Teacher('Mr Teacher', 25, 'Australia', 'Professor')
    teacher1.techClass(5);

}