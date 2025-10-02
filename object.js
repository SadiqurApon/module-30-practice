const parson = {
    name: "hena",
    age: 17,
    country: "BD"
}


// Object.seal(parson);
Object.freeze(parson);        // kono propartise jokto hobe na, values o change hobe na
parson.age = 20;
parson.status = "not found";

console.log(parson);

// console.log(Object.keys(parson));
// console.log(Object.values(parson));
// console.log(Object.entries(parson));