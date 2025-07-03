//task one
function pemdasOutput(){
    const answer = 10 + 32*12/3;
    console.log(answer);
    const answerTwo =(10 + 32)*12/3;
    console.log(answerTwo);
};
pemdasOutput();


//task two 
function usingParams (paramOne,paramTwo){;
    paramOne += paramTwo;
    console.log(paramOne);
    paramOne *= paramTwo;
    console.log(paramOne);
    paramOne %= paramTwo;
    console.log(paramOne);
};
 usingParams(7,12);


 //task three
 function comparing(paramOne, paramTwo){
    const compareOne = paramOne == paramTwo;
    const compareTwo = paramOne != paramTwo;
    const compareThree = paramOne === paramTwo;
    console.log(compareOne);
    console.log(compareTwo);
    console.log(compareThree);
 };
 comparing(5,18);