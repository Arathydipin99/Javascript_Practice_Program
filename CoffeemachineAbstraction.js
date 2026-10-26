 class CoffeemachineAbstraction{
    #boilWater(){
        console.log("Heating water")
    }
    #addMilk(){
        console.log("Added milk")
    }
    #addSugar(){
        console.log("Added Sugar")
    }
    #addCoffeepowder(){
        console.log("Added coffee powder")
    }
    makeyourcoffee(){
        console.log("Your coffee is getting ready")
        this.#boilWater()
        this.#addMilk()
        this.#addSugar()
        this.#addCoffeepowder()
    }
    makewithoutcoffee(){
        console.log("Make a without coffee")
        this.#boilWater()
        this.#addMilk()
        this.#addCoffeepowder()
    }
 }
 const coffeeObj=new CoffeemachineAbstraction()
 coffeeObj.makeyourcoffee()
 coffeeObj.makewithoutcoffee()