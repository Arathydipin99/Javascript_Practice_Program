try{
let a=10
let b=0
if(b===0){
    throw new Error("A number cannot be divided by 0")
}
let c=a/b
console.log(c)
}
catch(error){
console.log(error.message)
}

finally{
    console.log("Execution stopped")
}