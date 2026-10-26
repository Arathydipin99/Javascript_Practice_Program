const person={
    name: "Arathy",
    lName: "R",
    age:34,
    isEmployeed:true,
    //fullName:function(){
        //console.log(this.name+this.lName)

    //}
}
console.log(person)

//dot notation from an object
console.log(person.age)

//bracket notation
console.log(person["name"])

//To add a new value to an object
person.city="Trivandrum"
console.log(person)

//to update a value in an object
person.name="Arathy C.R"
console.log(person)

//delete a value
delete person.isEmployeed
console.log(person)
//person.fullName

//looping
for (let key in person){
    console.log(key + ":" + person[key])
}

const Student={
    name: "Dichu",
    age: 4,
    greetings: function(){
        console.log("Good Morining " + this.name)

    }
}
Student.greetings()

//for loop
for(let key in Student){
    if (Student[key]=="function"){
        console.log(key())

    }
    else{
console.log(key + ":" + Student[key])
    } 
}


