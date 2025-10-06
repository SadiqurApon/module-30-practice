// const parson = {
//     name: "hena",
//     age: 17,
//     country: "BD"
// }


// console.log(parson["name"]);

// for (let key in parson){
//     console.log(`key : ${key} value : ${parson[key]}`);
// }

// Object.seal(parson);
// Object.freeze(parson);        // kono propartise jokto hobe na, values o change hobe na
// parson.age = 20;
// parson.status = "not found";

// console.log(parson);

// console.log(Object.keys(parson));
// console.log(Object.values(parson));
// console.log(Object.entries(parson));

const parson = {
    name: "hena",
    age: 17,
    country: "BD"
}

// console.log(Object.entries(parson));

for (let key in parson){
    console.log(`key : ${key} value: ${parson[key]}`);
}

const students = ["apon", "rifa", "anonno", "alif"];
console.log(...students)
