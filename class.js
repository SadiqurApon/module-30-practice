// class product {


//     constructor(name, price, brand, owner) {
//         this.name = name;
//         this.price = price;
//         this.brand = brand;
//         this.owner = owner;
//     }

//     details() {
//         console.log("In details",this.name);
//     }
// }
// const iphone = new product("iphone", "1234", "apple", "S R A Apon");
// // console.log(iphone.details());
// iphone.details();
// console.log(iphone);
class product {
    
    constructor(name, price, brand, malik){
    this.name = name;
    this.price = price;
    this.brand = brand;
    this.malik = malik;

    }
    details (){
        console.log(`ami ${this.name} product er owner, amr nam ${this.malik}`);
    }
}
const iphone = new product("iphone", "1234", "apple", "S R A");
// console.log(iphone.details);
// iphone.details();

const xiaomi = new product("redmi", "200", "no brand", "Apon");
console.log(xiaomi);
xiaomi.details();
