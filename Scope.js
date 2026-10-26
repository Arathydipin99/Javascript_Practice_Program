//scope-global scope(can be used everywhere), function scope(only inside the function), block scope(inside the block)

//var is not a block scope, can be accessed outside a block and inside 
if(true){
    var x="I am var"
    console.log(x)
}
console.log(x)

//function scope, var cannot access outside the function
function testVar(){
    var y="I am var inside function"
    console.log(y)
}
testVar()
//console.log(y)

//let and const is a block scope, can only be access inside the block
if(true){
    let a="I am let inside the block"
    console.log(a)
    const b="I am const inside the block"
    console.log(b)
}
//console.log(a)
//console.log(b)


var userName="Arathy"
function scopeTest(){
    console.log(userName)
    var userAge= 32
    console.log(userAge)
    //console.log(userCity)
    //console.log(userRole)
    //console.log(country)
    if(true){
        let userCity="Trivandrum"
        var userRole="Software Tester"
        const country="India"
        console.log(userName)
        console.log(userAge)
        console.log(userCity)
        console.log(userRole)
        console.log(country)
    }
}
scopeTest()
console.log(userName)
//console.log(userAge)
//console.log(userCity)
//console.log(userRole)
//console.log(country)