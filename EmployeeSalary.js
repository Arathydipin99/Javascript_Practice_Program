const Employee={
name:"Arathy",
basicSalary: 30000,
bonus:5000,
tax: 2000,
deduction: 1000,

calculateSalary: function(){
finalSalary=this.basicSalary+this.bonus-this.tax-this.deduction
console.log("Salary of the Employee is " + finalSalary)
}
}

Employee.calculateSalary()


for(let key in Employee){
    if (typeof Employee[key]=="function"){
        //console.log(key + ":")
        Employee[key]()

    }
    else{
console.log(key + ":" + Employee[key])
    } 
}
