// creating an object

//const house = new Object();
//house.foundation = "concrete";
//house.numOfWindows = 20;
//house.doorColor = "white";
//house.roofType = "composite";

// same as above but different way. good if you know properties and things ahead of time. most common
const house = {
   foundation: "concrete",
   numOfWindows: 20,
   doorColor: "white",
   roofType: "composite",
};

house.lawn = "green grass";
// you can add in properties later if you need using the {} method 

//console.log(house);

// access a property within object
 //console.log(house.doorColor);

// update value of property
house['numOfWindows'] = 40;
//console.log(house);

// get value of a property
//console.log(house['roofType']);

// if they have the same declarator you can do in one line if you want
const something = {}, str = "someString", randomNum = Math.random(), myObj = {};

house[something] = "something";

//console.log(house);

// using loop 
const showSomething = (obj, objName) => {
    let result = "";
    for (const property in obj) {
        console.log(property);

        if (Object.hasOwn(obj, property)){
            result += `${objName}.${property} = ${obj[property]}\n`
        }
    }
    console.log(result);
    
}
//showSomething(house, 'house');

const objWithFuncProperties = {
    printName: (firstName, lastName) => console.log(firstName + " " + lastName),
    move: () => console.log("moving")
};
//objWithFuncProperties.printName("John", "Smith");
//objWithFuncProperties.move()

// class -> a template for an object
class Person {
    constructor(firstName, lastName, skinColor, eyeColor){
        this.firstName = firstName;
        this.lastName = lastName;
        this.skinColor = skinColor;
        this.eyeColor = eyeColor;
    }
    speak(){
    return `${this.firstName} ${this.lastName} is speaking.`;
    }
}

const personA = new Person("John", "Smith", "Brown", "Blue");
const personB = new Person("Kyle", "Thompson", "White", "Grey");

personA.firstName = "Luke";
//console.log(`PersonA's name is ${personA.firstName} ${personA.lastName}.`);
//console.log(`PersonB's name is ${personB.firstName} ${personB.lastName}.`);

//console.log(personA.speak());
//console.log(personB.speak());

//console.log(personA.skinColor);


// parent class (superclass)
class Boat {
    constructor(color, engineType){
        this.color = color;
        this.engineType = engineType
    }
    move(){
        console.log(`Moving on the water using ${this.engineType}.`);
    }
}

//child class (subclass)
class Sailboat extends Boat {
    constructor(color, engineType, fuel){
        super(color, engineType)
        this.fuel = fuel;
    }
    explore(){
        console.log("Exploring the world")
    }
}

const myBoat = new Boat("red", "outboard motor");
//myBoat.move();

const mySailboat = new Sailboat("color", "Sail", "air");
mySailboat.explore();
console.log(mySailboat.fuel);
console.log(mySailboat.color);
mySailboat.move()