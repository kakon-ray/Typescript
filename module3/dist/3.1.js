"use strict";
// class and object
{
    class Animal {
        constructor(name, species, sound) {
            this.name = name;
            this.species = species;
            this.sound = sound;
        }
        makeSound() {
            console.log(`The ${this.name} ${this.species} Sound ${this.sound}`);
        }
    }
    const dog = new Animal('German Dog', 'Dog', 'Gau gau');
    const cat = new Animal('Bangladeshi Cat', 'Cat', 'Meou Meou');
    cat.makeSound();
}
