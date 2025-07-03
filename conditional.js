function ifExampleFunc(paramOne){
    console.log ("before if statement");
    if(paramOne > 10){
        console.log (`the value of ${paramOne} is true`);
    }
    console.log("after if statement");
};
//ifExampleFunc(5);

// if/else statement
const elseStatementExample = (paramOne) => {
    if (paramOne == "JavaScript"){
        console.log("The condition was true.");
    } else {
        console.log("The condition was false.");
    }
};
//elseStatementExample("JavaScript");

const ifelseStatementExample = (paramOne) => {
    if (paramOne == "JavaScript"){
        console.log("The condition was true.");
    } else if (paramOne <= 10) {
        console.log("The value was less than or equal to ten.");
    } else if (paramOne >= 10) {
        console.log("The value was greater than or equal to ten.");
    } else {
        console.log("The last else block got executed.")
    }
};
//ifelseStatementExample('abc');

const logicalIfStatement = (paramOne, paramTwo) => {
    if(paramOne = 10 && paramTwo > 10){
        console.log("both conditions were true.");
    } else console.log ("both conditions were false");

    if(paramOne <= 9 || paramTwo > 20){
        console.log("one of the conditions was true.");
    } else console.log ("none of the conditions was true."); //no curly braces because only one line. if there was more than one line you need it
};
//logicalIfStatement(10,12);

const ternaryOperatorFunc = (paramOne) => {
    const result = (paramOne > 10) ? "the value is greater than ten" : "the value is not greater than ten"
    console.log(result);
};
//ternaryOperatorFunc(12);

//switch statement
const favoriteColor = (color) => {
    switch (color) {
        case "blue":
            console.log(`my favorite color is ${color}`);
            break;
        case "red":
        case "RED":
        case "Red":
            console.log(`my favorite color is ${color}`);
        case 10:
            if (color % 2 == 0); {
            console.log("case 10 was matched and the value inside color was an even number");
            }
            break;
        default:
            console.log(`my favorite color is ${color}`);
            break;
    }
};
favoriteColor('Red');