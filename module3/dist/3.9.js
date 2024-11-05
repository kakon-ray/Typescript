"use strict";
// Abstraction
{
    class Car1 {
        startEngine() {
            console.log(`I am starting the car engine`);
        }
        stopEngine() {
            console.log(`I am stoping the engine`);
        }
        move() {
            console.log(`I am moving the car`);
        }
        test() {
            console.log(`I am testing car`);
        }
    }
    class Car2 {
    }
    class ToyotaCar extends Car2 {
        startEngine() {
            console.log(`I am starting the car engine`);
        }
        stopEngine() {
            console.log(`I am stoping the engine`);
        }
        move() {
            console.log(`I am moving the car`);
        }
        test() {
            console.log(`I am testing car`);
        }
    }
    const car3 = new ToyotaCar();
    car3.startEngine();
}
