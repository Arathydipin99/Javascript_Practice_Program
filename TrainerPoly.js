import { EmployeePolymorphism } from "./EmployeePolymorphism.js"

class TrainerPoly  extends EmployeePolymorphism {
    
    constructor(name){
        super()
        this.name=name
        
    }
    getRole(){
        console.log(this.name + "is a software trainer")
        console.log(`${this.name} is a software trainer`)
    }
}
const Trainer=new TrainerPoly("Arathy")
Trainer.getRole()
const Employee=new EmployeePolymorphism("Arathy")
Employee.getRole()


//3 classes googlepay, phonepay, cashondelivery
//common method Payment(), payment parent. gpay extend payment, phonepay extend gpay
