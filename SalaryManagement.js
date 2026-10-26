class SalarayManagement{
    #currentsalary
    constructor(currentsalary,employeeID){
        this.#currentsalary=currentsalary
        this.employeeID=employeeID

    }
    updateSalary(bonus){
        this.#currentsalary=this.#currentsalary+bonus

    }
    deductSalary(tax){
this.#currentsalary=this.#currentsalary-tax
    }
    displaySalary(){
        console.log("Current salary = " + this.#currentsalary)
    }
}
const salarymgmtObj=new SalarayManagement(30000,1234)
salarymgmtObj.updateSalary(5000)
salarymgmtObj.displaySalary()
salarymgmtObj.deductSalary(3000)
salarymgmtObj.displaySalary()