import { Gpay } from "./Gpay.js"
import { Payment } from "./Payment.js"

class Phonepay extends Gpay{
    constructor(amount){
        super()
        this.amount=amount
    }
    getTotal(){
        console.log("Amount paid through phonepay is " + this.amount)
        
    }
}

const paymentObj=new Payment(100)
const gpayObj=new Gpay(40)
const phonepayObj=new Phonepay(60)
paymentObj.getTotal()
gpayObj.getTotal()
phonepayObj.getTotal()