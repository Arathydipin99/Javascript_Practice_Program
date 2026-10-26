//encapsulation--hiding a data for security

class BankAccountEncaps {
    #currentbalance
    constructor(currentbalance,accountholder) {
        this.#currentbalance=currentbalance
        this.accountholder=accountholder

    }
    deposit(depositamount) {
        this.#currentbalance=this.#currentbalance+depositamount

    }
    withdraw(withdrawamount) {

        this.#currentbalance=this.#currentbalance-withdrawamount
    }
    showBalance() {
        console.log("Current balance is " + this.#currentbalance)

    }

}
const depositObj=new BankAccountEncaps(1500,"Arathy")
depositObj.deposit(1000)
depositObj.showBalance()
depositObj.withdraw(400)
depositObj.showBalance()


//task get salary management salary update salary deduct salary, salary private data