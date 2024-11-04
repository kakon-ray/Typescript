// polimorpisom

{
    class Person {
        getSleep() {
            console.log(`I am Sleeping for 8 hour per day`)
        }
    }

    class Student extends Person {
        getSleep() {
            console.log(`I am Sleeping for 7 hour per day`)
        }
    }

    class Developer extends Person {
        getSleep() {
            console.log(`I am Sleeping for 6 hour per day`)
        }
    }

    class Shap{
        getArea() : number{
               return 0;
        }
    }

    class Cercle extends Shap{
        radious: number;

        constructor(redious:number){
            super();
            this.radious = redious;
        }

        getArea(): number {
            return Math.PI * this.radious * this.radious
        }
    }

    class Rentengle extends Shap{
        height: number;
        width: number;

        constructor(height:number,width:number){
            super();
            this.height = height;
            this.width = width;
        }

        getArea(): number {
            return this.height * this.width
        }
    }

    const getShapArea = (param:Shap) => {
        console.log(param.getArea());
    }

    const instant1 = new Shap();
    const instant2 = new Cercle(20);
    const instant3 = new Rentengle(10,5);

    getShapArea(instant3)
}