// const person = {
//     name: "gias",
//     action: function(){
//         console.log(this.name);
//     }
// }
// person.action();

class person{
    #status;
    constructor(name, age, status){
        this.name = name;
        this.age = age;
        this.#status = status;
    }
    sleep(){
        console.log(`${this.name} sleep at 11 pm`);
    }
    action(){
        console.log(this.#status);
    }
}
const solimoddin = new person("Salim", 15, "Single");
console.log(solimoddin.status);
solimoddin.action();
// solimoddin.sleep();


// const kolimoddin = new person("korim", 12);
// console.log(kolimoddin);
// kolimoddin.sleep();