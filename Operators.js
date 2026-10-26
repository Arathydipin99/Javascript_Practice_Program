//Arithmetic operators
//+,-,*,/,%,**
//% to find the reamainder
//** to find the power  eg: a raise to b
let a=2
let b=3
console.log((a+b))
console.log((a-b))
console.log((a*b))
console.log((a/b))
console.log((a%b))
console.log((a**b))

//Assignment operators =,+=,-=,*=,/=,%=
//=simple assignment, assigning a value to a variable 
let x=10
//+= need to update x (adding a value to the existing value of x and updating that value to x)
//x=x+5
x+=5
console.log(x)
x-=5
console.log(x)
x*=5
console.log(x)
x/=2
console.log(x)
x%=5
console.log(x)

//Comparison/relational operators ==,===,!=,!==,>,<,>=,<=
//== loose eqality
let c=7
let d=9
console.log(c==d)
let e="9"
console.log(e==d)
//Loose equality == will only take the value
//Strict equality === will take both value and type
console.log(d===e)
//not equal != only take the value
console.log(e!=d)
//!== will take both value with type strict operator
console.log(e!==d)

//Greater operator >
console.log(c>d)
//lesser operator
console.log(c<d)
console.log(d>=e)

//Logical/conditional operators  &&,||,!
//used to check multiple conditions at a time
let age=22
let hasLicense=true
let canDrive=(age>=18)&& hasLicense
console.log("Can I Drive? " + canDrive)
console.log(d+e)

let age2=16
let hasLicence2=false
let canDrive2=(age2>=18) || hasLicense
console.log( "Can I Drive?",canDrive2)
// concat + or , can be used to join a values
//! only applicable to boolean
console.log(!hasLicence2)