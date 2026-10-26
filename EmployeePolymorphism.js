export class EmployeePolymorphism{
    constructor(name){
        this.name=name
    }
    getRole(){
        console.log(this.name + "is a software tester")
    }
}