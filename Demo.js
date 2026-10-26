"use strict";
let age = 20;
let username = "Arathy";
let type = true;
let num = 20;
//num="Twenty"---type convertion is not possible in typescript(from number to string is not possible)
num = 21;
//function with parameters
function add(a, b) {
    console.log(a + b);
}
add(5, 6);
//function with return
function sub(c, d) {
    return (c - d);
}
console.log(sub(20, 8));
function displayDetails(price, brand) {
    console.log(brand + "," + price);
}
displayDetails(40000, "HP");
//array declaration
let mark = [45, 35, 50, 40];
mark.push(30);
//mark.push("Hai")---type string is not assignable to number
console.log(mark);
//object
let user = { name: "Arathy", age: 33, city: "Trivandrum" };
console.log(user);
