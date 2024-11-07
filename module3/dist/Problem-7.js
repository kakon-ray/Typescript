"use strict";
class Car {
    constructor(brand, model, year) {
        this.getCarAge = () => {
            const d = new Date();
            let year = d.getFullYear();
            return `${year - this.year} (assuming current year is ${year})`;
        };
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
}
const car = new Car("Honda", "Civic", 2018);
console.log(car.getCarAge());
