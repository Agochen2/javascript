function plusAndMinusFunction (paramOne,paramTwo){
    const addition = paramOne + paramTwo;
    const subtraction = paramTwo - paramOne;
    
    console.log(addition);
    console.log(subtraction);
};
//plusAndMinusFunction(7,12);

function multiplyAndDivide (paramOne,paramTwo){
    const multiplicationResult = paramOne*paramTwo;
    const divisionResult = paramTwo / paramOne;

    console.log(`multiplication ${multiplicationResult}, division ${divisionResult}`);

};

//multiplyAndDivide (4,14);

function modulusFunct(){
    const answerOne = 10 % 4;
    const answerTwo = 12 % 3;

    console.log (`answer one is ${answerOne},and answer two is ${answerTwo}`)
};
//modulusFunct();

function exponentiationFunct(param){
    const exponentiationResult = 2** param;
    console.log(exponentiationResult);
};
//exponentiationFunct(5);

//PEMDAS
function pemdasOrder(){
    const total = (10 / (3 + 2)) * 4 + 5 ^2+6 - 9;
    console.log (`result is ${total}`);
};
//pemdasOrder();

//assignment operator
function additionAssignment(){
    let variableOne = 5;
    const variableTwo = 10;
    variableOne += variableTwo;
    console.log (variableOne);
};
//additionAssignment();

function multiplyAssignment(){;
    let variableOne = 5;
    const variableTwo = 10;
    variableOne *= variableTwo;
    console.log(variableOne);
};
//multiplyAssignment();

//comparison operators
function compare(paramOne, paramTwo){;
    const comparisonOne = paramOne == paramTwo; //== compares the values not data type
    const comparisonTwo = paramOne === paramTwo; //=== compares both the data type and the value
    const comparisonThree = paramOne != paramTwo; //!= compare value not data type. asking in reverse way 
    console.log(comparisonOne);
    console.log(comparisonTwo);
    console.log(comparisonThree);
};
//compare(10,'10');
//compare(10,10);
//compare(10,5);
//compare('10','10');

//logical operators &&, ||, !
function logicallyCompare (paramOne, paramTwo){
    const comparisonOne = paramOne < 10 && paramTwo > 1; // 6 < 10, 3 > 1
    const comparisonTwo = paramOne === 5 || paramTwo == 5; // 6 === 5 || 3 == 5
    comparisonThree = !(paramOne == paramTwo); // !(6 == 3) --> !false --> true
    console.log(comparisonOne);
    console.log(comparisonTwo);
    console.log(comparisonThree);
};
//logicallyCompare (6,3);

//increment and decrement
let delta = 10;
const total = delta++; //post increment
const totalTwo = ++delta; //pre increment
console.log(delta);
console.log(total);
console.log(totalTwo);
