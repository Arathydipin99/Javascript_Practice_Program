let fruits =["apple","orange","banana","grapes","mango"]
console.log(fruits)

//length-number of elements, index=length-1 total length=3,total index=3-1
console.log(fruits[1])
console.log(fruits.length)

//to add an element to the last of an array
fruits.push("mango")
console.log(fruits)

//to remove an element from end
fruits.pop()
console.log(fruits)

//to add element to the start of an array
fruits.unshift("grapes")
console.log(fruits)

//to remove an element from the start of an array
fruits.shift()
console.log(fruits)

//looping an array
for (let i=0;i<fruits.length;i++){
    console.log(fruits[i])
}


console.log("looping array using for... of")
for(let fruit of fruits){
    console.log(fruit)
}

//to check if an element is there in the array--will get true or false
console.log(fruits.includes("apple"))

//to find the index of an element
console.log(fruits.indexOf("orange"))

//to create a sub array of an array
// //in slice method starting element is inclusive and ending element is not inclusive
console.log(fruits)
let slicedArray=fruits.slice(1,4)
console.log(slicedArray)

//splice(start,deletecount,new item)

//to add a new item to the 1st index without deleting anything
fruits.splice(1,0,"kiwi")
console.log(fruits)
//to delete 2 items and add an item
fruits.splice(1,2,"pineapple")
console.log(fruits)

//concat 2 arrays
let vegetables=["Carrot","potato","brinjal"]
let newArray=fruits.concat(vegetables)
console.log(newArray)
let newArray1=vegetables.concat(fruits)
console.log(newArray1)

//looping an array and finding the sum 
let n=[1,2,3,4,5]
let sum=0
for(let i=0;i<n.length;i++){
//sum=sum+n[i]
sum+=n[i]
}
console.log(sum)

//reduce call back function
const sumArray=n.reduce((total,value)=>total+value,4)
console.log(sumArray)

//filter method
let evenArray=[]
for(let i=0;i<n.length;i++){
    if(n[i]%2==0)
    evenArray.push(n[i])
    
}
console.log(evenArray)

const filterArray=n.filter((value,index)=>value%2==0)
console.log(filterArray)


//map method
const doubleArray=n.map((value)=>
    value*2
)
console.log(doubleArray)


let j=[1,2,3,4,5,6,7]
const resultArray=j.filter((value,index)=>value%2!==0).map((value)=>value*5).reduce((s,v)=>s+v)
console.log(resultArray)