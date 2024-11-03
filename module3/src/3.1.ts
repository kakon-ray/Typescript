// class and object

{

    class Animal {

        constructor (public name:string, public species:string, public sound:string){
   
        }

        public makeSound(){
            console.log(`The ${this.name} ${this.species} Sound ${this.sound}`)
        }
    }

    const dog = new Animal('German Dog','Dog','Gau gau');
    const cat = new Animal('Bangladeshi Cat','Cat','Meou Meou');

    cat.makeSound();

    
}