const hena = {
    name: 'hena',
    age: 17,
    friends: ["hero", "Alom", "Sani"],
    status: 'not found'
}

const {name, age, friends, status} = hena;
console.log(...friends);

const parson = ["Hero Alom", {name: 'gias'}, "hena", "bapparaj"];
const [hero, director, heroin, sideHero] = parson;
console.log(sideHero);