export class Payment{
    constructor(amount){
        this.amount=amount

    }
    getTotal(){
        console.log("Total price of object " + this.amount)
    }
}