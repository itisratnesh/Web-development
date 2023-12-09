console.log("This is tutorial 53");

function greet(name, greetText = "Greetings from JavaScript") {
    console.log(greetText + " " + name);
    console.log(name + " is a good person");
}

function sum(a, b, c) {
    let d = a + b + c;
    return d;
}

let name0 = "Ratnesh";
let name1 = "K";
let name2 = "Tripathi";
let name3 = "Ratnesh";
let greetText = "Good Morning";
// console.log(name0 + " is a good person");
// console.log(name1 + " is a good person");
// console.log(name2 + " is a good person");
// console.log(name3 + " is a good person");

greet(name0);
greet(name1, greetText);
greet(name2, greetText);
greet(name3, greetText);

let returnVal = sum(1, 2, 3);
console.log(returnVal);


