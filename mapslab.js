//task one 

function colorList (){
const differentColors = new Map();
differentColors.set("BL", "Blue");
differentColors.set("RD", "Red");
differentColors.set("PR", "Purple");
differentColors.set("YL", "Yellow");
differentColors.set("OR", "Orange");
differentColors.set("GN", "Green");

return differentColors;
};
const differentColors = colorList();
console.log(differentColors);

//task two

function showValueKey(value, key){
    console.log(`The key is ${key}, The value is ${value}.`);
};
function processDifferentColors(){
    const myMap = differentColors;
    myMap.forEach(showValueKey);
};

processDifferentColors();
