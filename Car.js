//Car is the object, class name and file name preferrenbly be the same
//function inside a class is method, multiple methods can be created
class Car{
    constructor(colour,brand){
        console.log("Constructor calling")
        this.colour=colour
        this.brand=brand
    }
drive(){
    console.log("Drive a car")
}
start(){
    console.log("Car Started")
}
display(){
    console.log(this.brand)
    console.log(this.colour)
}
}
const carObj=new Car("Red","Toyota")
const carObj1=new Car("Green","Maruthi")
//carObj.drive()
//carObj.start()
carObj.display()
carObj1.display()

//constuctor-used to initialize values
//default constructor and parameterized constructor
//constuctor will invoke when an object is created for a class



//create Student classdetails name age mark through constructor

class Student{
    constructor(name,age,mark){
        console.log("Hai")
        this.name=name
        this.age=age
        this.mark=mark
    }
    details(){
console.log(this.name)
console.log(this.age)
console.log(this.mark) 
    }
}
const studentObj=new Student("Meenu",15,45)
studentObj.details()