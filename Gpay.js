import { Payment } from "./Payment.js"

export class Gpay extends Payment{
    constructor(amount){
        super()
        this.amount=amount
    }
    getTotal(){
        console.log("Amount paid through Gpay is "  +this.amount)
       
    }
}
