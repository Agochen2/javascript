//task one
const numberLoop = () => {
    let counter = 5;
    while (counter < 26) {
        console.log(counter);
        counter++; 
    };
};
numberLoop();

//task two
const divisibleByThree = () => {
    for(counter = 0; counter <= 30; counter++){
        if(counter % 3 == 0) console.log(`Number ${counter} is divisible by three`);
    };
};
divisibleByThree();