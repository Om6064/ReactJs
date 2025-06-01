// Functions....
// Destructuring, Spreading / rest
// map, filter, reduce
// ternary
// Events (onclick, onchange, onsubmit, oninput)

// let a = 10;
// let b = 20;

// let temp;

// temp = a;
// a = b;
// b = temp;

// <------------------------- Destructuring ---------------------->
// [a, b] = [b, a];

// console.log(a, b);
// let person = {
//     name1: "John Doe",
//     age: 20,
//     isDeveloper: false,
// }

// function showDetails({ name1, age }) {
//     console.log(name1, age);
// }

// showDetails(person);
// let { age } = person; // destructuring

// console.log(age);
// <------------------------- Destructuring ---------------------->


// <------------------------- Spreading ---------------------->
// let arr = [1, 2, 3, 4, 5];
// let b = [...arr];

// console.log(...arr);

// let a = {
//     name: "John Doe",
// }
// let b = {...a};
// b.name = "Jessicaben";
// console.log(a.name, b.name);

// function showArr(arr){
//     arr[0] = 99;
//     console.log(arr);
// }

// showArr([...arr]);
// console.log(arr);
// <------------------------- Spreading ---------------------->

// let dusra = arr.map((val) => {
//     return val * 2;
// });

// console.log(dusra);

// let kech = arr.filter((val) => {
//     return val % 2 == 0;
// }).map((data) => {
//     return data * 2;
// })

// console.log(kech);

// let sum = arr.reduce((acc, curr) => {
//     return acc + curr;
// }, 0);

// console.log(sum);

let arr = ["apple", "banana", "apple", "cherry", "cherry"];


let key = 'apple';


let freq = {};

for(let fruit of arr){
    // freq[fruit] = freq[fruit] ? freq[fruit] + 1 : 1;
    
    if (freq[fruit] == null || freq[fruit] == undefined) {
        freq[fruit] = 1;
    }else{
        freq[fruit] += 1;
    }
}

console.log(freq);
console.log(freq[key]); // dynamic keys