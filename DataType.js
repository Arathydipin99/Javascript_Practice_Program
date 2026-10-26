//Data Types string,number,boolean,undefined,null,bigint
var name="Arathy" 
console.log(name)
console.log("name")
var age=33
var isLoggedin=true
var x
var y=null
var balance=1234n
console.log(typeof(name))
console.log(typeof(age))
console.log(typeof(isLoggedin))
console.log(typeof(x))
console.log(typeof(y))
console.log(typeof(balance))

var price=12.22
console.log(typeof(price))
//var can be declared,redeclared and updated
var a=10
var a=20
a=30
a="Thirty"
console.log(a)
console.log(typeof(a))

//let can be declared and updated but cannot redeclare

let b=70
//let b=90
console.log(b)
b=100
console.log((b))

//const cannot redeclare and update

const c= "abc"
//const c="def"
console.log(c)
c="ghi"
console.log((c))