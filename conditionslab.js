//task one
const compareParams = (paramOne, paramTwo) => {
    if (paramOne == paramTwo){
        console.log("The values are equal");
    } else {
        console.log("The values are not equal");
    }
};
compareParams(4,6);
compareParams("hello","hello"); 


//task two
const letterGrade = (letter) => {
    switch (letter) {
        case "E":
            console.log("Excellent");
            break;
        case "V":
            console.log("Very Good");
            break;
        case "G":
            console.log("Good");
            break;
        case "A":
            console.log("Average");
            break;
        case "F":
            console.log("Fail");
            break;
        default:
            console.log("Not a valid grade");
            break;
    }
};
letterGrade ("E");
letterGrade ("F");
letterGrade (7);