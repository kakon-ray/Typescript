// Abstraction
{
    interface Car1 {
        startEngine(): void;
        stopEngine(): void;
        move(): void;
    }

    class Car1 implements Car1 {
        startEngine(): void {
            console.log(`I am starting the car engine`);
        }

        stopEngine(): void {
            console.log(`I am stoping the engine`);
        }

        move(): void {
            console.log(`I am moving the car`);
        }

        test() {
            console.log(`I am testing car`);
        }

    }


    abstract class Car2 {
        abstract startEngine(): void;
        abstract stopEngine(): void;
        abstract move(): void;
    }

    class ToyotaCar extends Car2 {
        startEngine(): void {
            console.log(`I am starting the car engine`);
        }

        stopEngine(): void {
            console.log(`I am stoping the engine`);
        }

        move(): void {
            console.log(`I am moving the car`);
        }

        test() {
            console.log(`I am testing car`);
        }
    }

    const car3 = new ToyotaCar();
    car3.startEngine()


}