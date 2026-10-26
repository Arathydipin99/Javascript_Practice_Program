import { FruitsInheritance } from "./FruitsInheritance.js"

class AppleInheritance extends FruitsInheritance{
    constructor(color,taste,variety){
        //this.color=color
        //this.taste=taste
   
        super(color,taste)
         this.variety=variety
         
    }
    isSweet(){
        console.log("Apple function")
        console.log(this.color)
        console.log(this.taste)
        console.log(this.variety)
    }
}
const apple=new AppleInheritance("Red","Sweet","kashmiri")
apple.isSweet()
apple.isRipe()

const myFruit=new FruitsInheritance("Green","Sour")
//myFruit.isSweet()--will not work as the function is from child class
myFruit.isRipe()


//parent cannot inherit properties of child, child can inherit parent's property
