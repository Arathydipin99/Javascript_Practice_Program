let age:number=20
let username:string="Arathy"
let type:boolean= true
let num:number =20
//num="Twenty"---type convertion is not possible in typescript(from number to string is not possible)
num=21
//function with parameters
function add(a:number,b:number){
    console.log(a+b)
}
add(5,6)

//function with return
function sub(c:number,d:number):number{
    return(c-d)
}
console.log(sub(20,8))

function displayDetails(price:number,brand:string):void{
    console.log(brand + "," + price)
}
displayDetails(40000,"HP")

//array declaration
let mark:number[]=[45,35,50,40]
mark.push(30)
//mark.push("Hai")---type string is not assignable to number
console.log(mark)

//object
let user:{name:string,age:number,city:string}
={name:"Arathy",age:33,city:"Trivandrum"}
console.log(user)