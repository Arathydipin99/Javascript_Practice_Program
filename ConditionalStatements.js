//syntax
//if(condition){
//code tobe excute
//}
//if-- when the condition is true only then it enters the "if loop" otherwise result will be blank
//if else-- will execute the other case when the first condition don't met

let age = 54
if (age > 12) {
    console.log("You are Eligible")
}
else {
    console.log("You are not eligible")
}


/*if(conditon1){
}
 else if(condition2){
 }
 else
  {

}*/

if (age < 12) {
    console.log("You are not eligible, you are too young")
}
else if (age > 50) {

    console.log("You are not eligible, you are above 50 years")
}

else {
    console.log("You are eligible")
}


/*
Switch--to check multiple condition
switch(exprn)
{
case1:
case2:
case n:
default:
}
*/

let day = 9
switch (day) {
    case 1:
        console.log("Today is Monday")
        break
    case 2:
        console.log("Today is Tuesday")
        break
    case 3:
        console.log("Today is Wednesday")
        break
    case 4:
        console.log("Today is Thursday")
        break
    case 5:
        console.log("Today is Friday")
        break
    case 6:
        console.log("Today is Saturday")
        break
    case 7:
        console.log("Today is Sunday")
        break
    default:
        console.log("Today is Invalid day")
}


let letter = "D"
switch (letter) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
    case "A":
    case "E":
    case "I":
    case "O":
    case "U":
        console.log("Letter is vowel")
        break
    default:
        console.log("Letter is not a vowel")
}

//case sensitive, so if letter given is lower case then case should be lower letter otherwise it won't recogonize
console.log("*********************")
let mark=12
const result=(mark>=18)? "pass" : "failed"
console.log(result)
