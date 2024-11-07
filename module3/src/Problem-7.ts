
class Car {
    brand: string;
    model: string;
    year: number;

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    getCarAge = () => {
        const d = new Date();
        let year = d.getFullYear();
        return `${year - this.year} (assuming current year is ${year})`
    }

}


const car = new Car("Honda", "Civic", 2018);

console.log(car.getCarAge());