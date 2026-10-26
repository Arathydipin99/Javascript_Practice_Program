"use strict";
class Employee {
    name;
    id;
    salary;
    constructor(name, id, salary) {
        this.name = name;
        this.id = id;
        this.salary = salary;
    }
    getDetails() {
        return this.name;
    }
}
const obj = new Employee("Arathy", 12345, 50000);
console.log(obj.getDetails());
