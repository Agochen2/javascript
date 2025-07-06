//const programingLanguages = new Map();
//programingLanguages.set("JS", "JavaScript");
//programingLanguages.set("PY", "Python");
//programingLanguages.set("JA", "Java");
//programingLanguages.set("RR", "Ruby on Rails");

// same as above but using array syntax
const programingLanguages = new Map([
    ["JS", "JavaScript"], ["PY", "Python"], ["JA", "Java"], ["RR", "Ruby on Rails"]
]);

//console.log(programingLanguages.size);
//programingLanguages.clear();

//const result = programingLanguages.delete("RR");
//console.log(result);

//const language = programingLanguages.get("JS");
//console.log(language);

//console.log(programingLanguages.has("JA"));

// loop a Map collection
// based on key value pair not zero based index 

//for(let lang of programingLanguages){
    //console.log(lang);
//}

//const allKeys = programingLanguages.keys();
//for (let key of allKeys){
   // console.log(key);
//}

//for (let item of programingLanguages.entries()){
    //console.log(item);
//}

function processData(value, key){
    console.log(`The key is ${key}, The value is ${value}.`);
}

programingLanguages.forEach(processData)