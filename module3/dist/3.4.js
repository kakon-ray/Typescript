"use strict";
// instanceof guard
{
    class Animal {
        constructor(name, species) {
            this.name = name;
            this.species = species;
        }
        makeSound() {
            console.log('I am making sound');
        }
    }
    class Dog extends Animal {
        constructor(name, species) {
            super(name, species);
        }
        makeBark() {
            console.log("I am Barking");
        }
    }
    class Cat extends Animal {
        constructor(name, species) {
            super(name, species);
        }
        makeMeow() {
            console.log("I am Mewaing");
        }
    }
    const isDog = (animal) => {
        return animal instanceof Dog;
    };
    const isCat = (animal) => {
        return animal instanceof Cat;
    };
    const getAnimal = (animal) => {
        if (isDog(animal)) {
            animal.makeBark();
        }
        else if (isCat(animal)) {
            animal.makeMeow();
        }
        else {
            animal.makeSound();
        }
    };
    const dog = new Dog("Dog Vai", "Dog");
    const cat = new Cat("Cat Vai", "Cat");
    getAnimal(cat);
}
