//task one 
const cats = {
    name: "Oliver",
    color: "black",
    eyeColor: "green",
    age: 4,

    jump: function(){
        console.log(`${this.name} jumps!`);
    }
};

console.log(cats);
cats.jump();

//task two 
class Person {
    #firstName;
    #lastName;
    #eyeColor;
    #hairColor;

    constructor(firstName, lastName, eyeColor, hairColor){
        this.firstName = firstName;
        this.lastName = lastName;
        this.eyeColor = eyeColor;
        this.hairColor = hairColor;
    }

    get firstName(){
        return this.firstName;
    }
    get lastName(){
        return this.lastName;
    }
    get eyeColor(){
        return this.eyeColor;
    }
    get hairColor(){
        return this.hairColor;
    }

    set firstName(firstName){
        this.#firstName = firstName;
    }
    set lastName(lastName){
        this.#lastName = lastName;
    }
    set eyeColor(eyeColor){
        this.#eyeColor = eyeColor;
    }
    set hairColor(hairColor){
        this.#hairColor = hairColor;
    }

    introduce(){
        console.log(`Hi! I am ${this.#firstName} ${this.#lastName} I have ${this.#eyeColor} eyes and ${this.#hairColor} hair.`)
    }
}

const personA = new Person ("Samantha", "Sharp", "blue", "brown");
personA.introduce();
