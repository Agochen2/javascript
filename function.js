// this is a simple function which is a building block of JS
function simpleFunction(){ 
console.log("hello Javascript function!");
}
//simpleFunction()

//the function below returns  string using the return keyword
function simpleFunctionTwo(){
    return "I am from simpleFunctionTwo!"
}
//console.log(simpleFunctionTwo());

//this function takes an input and stores in the valueOne parameter
function simpleFunctionThree (valueOne){
    console.log(valueOne);
}
//simpleFunctionThree("dog");

//this is function expression assigning a function to a variable
const functionVariable = simpleFunctionTwo();

//console.log(functionVariable);
const squareFoot = function (length, width){
    return length*width;
};
//console.log (squareFoot(24, 32));

//variable scope
const firstName = "John";

function sampleOne(){
    const lastName = "Smith";
    console.log(lastName);
};

function sampleTwo(){
    console.log(firstName);
    console.log(lastName); //error due to out of variable
};

//sampleOne();
//sampleTwo();

//nested functions --> functions inside other functions
function parent(){
    const parentVariable = 15;
    function child() {
        const childVariable = parentVariable + 5;
        console.log(childVariable);
    };
    child();
    //console.log(childVariable) // error due to scope of function
};
//parent();

//default parameters --> adding a default parameter will allow you to call a function and supply a value for that parameter or not
function doSubtraction(opperantOne, opperantTwo = 10){
    return opperantOne - opperantTwo;
};
//console.log(doSubtraction(50,30));
console.log(doSubtraction(50));