const person = {
    name: "Gias",
    age: 52,
    1: "20",
    friends: ["korim", "Rohim", "Selim"],
    details: {
        job : "Jobless", 
        isMarrit : true, 
        status: "not found",
        fatherDetails: {
            name: "Hero Alom",
            job: "Yes"
        }

    }
}
// console.log(person.details.motherdetails?.name);
console.log(person["name"][1]);