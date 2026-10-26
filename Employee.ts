class Employee{
    name:string
    id:number
    salary:number
constructor(name:string,id:number, salary:number){
    this.name=name
    this.id=id
    this.salary=salary
}
 getDetails(){
   return this.name
}
    
}
const obj=new Employee("Arathy",12345,50000)
console.log(obj.getDetails())