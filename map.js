// const numbers = [1, 2, 3, 4, 5, 6];


// const temp = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const sum = element + 1;
//     temp.push(sum);
// }
// // console.log(temp);
// const newArray = numbers.map(number => number + 1);
// console.log(newArray);

const numbers = [1, 2, 3, 4, 5, 6];

const squarArray = numbers.map(element => {
    return element*element;
})
console.log(squarArray);

const friends = ["korim", "Rohim", "jobbar", "hero alom"];
const newfriends = friends.map((element, index) => {
    console.log(index);
    return element;
})

console.log(newfriends);