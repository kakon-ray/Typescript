"use strict";
// polimorpisom
{
    class Person {
        getSleep() {
            console.log(`I am Sleeping for 8 hour per day`);
        }
    }
    class Student extends Person {
        getSleep() {
            console.log(`I am Sleeping for 7 hour per day`);
        }
    }
    class Developer extends Person {
        getSleep() {
            console.log(`I am Sleeping for 6 hour per day`);
        }
    }
    class Shap {
        getArea() {
            return 0;
        }
    }
    class Cercle extends Shap {
        constructor(redious) {
            super();
            this.radious = redious;
        }
        getArea() {
            return Math.PI * this.radious * this.radious;
        }
    }
    class Rentengle extends Shap {
        constructor(height, width) {
            super();
            this.height = height;
            this.width = width;
        }
        getArea() {
            return this.height * this.width;
        }
    }
    const getShapArea = (param) => {
        console.log(param.getArea());
    };
    const instant1 = new Shap();
    const instant2 = new Cercle(20);
    const instant3 = new Rentengle(10, 5);
    getShapArea(instant3);
}
