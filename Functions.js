function Addition(){
    let a=32
    let b=56
    let c=a+b
    console.log(c)
}
Addition()


function printDetails(){
    let name="Arathy"
    let city="trivandrum"
    let job="Software Tester"
    console.log("My name is " + name )
    console.log("I live in " + city)
    console.log("I am working as a " + job )
}
printDetails()

//function with parameters
function subtraction(a,b){
let result=a-b
console.log(result)
}
subtraction(10,7)
subtraction(5,3)

//function with return type
function multiplication(c,d){
let answer=c*d
return answer
}
console.log(multiplication(5,7))
//or
let e=multiplication(4,5)
console.log(e)

//anonymous function--function without a name, function is stored into a variable
const x=function(){
    console.log("Hello from anonymous function")
}
x()

//Arrow function
//()=>{}
    //anonymous function with parameters
    const Display=function(a,b){
        return a+b
    }
    console.log(Display(6,5))
//arrow
const arrow=(x,y)=>{return x+y}
console.log(arrow(4,9))