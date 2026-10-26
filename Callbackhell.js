/*function displaydata(cb1){
    console.log("First function executed")
    cb1()
}
function callbackfunction1(cb2){
    console.log("call back function 1 executed")
    cb2()
}
function endfunction(){
    console.log("execution stopped")
}

displaydata(function(){
    callbackfunction1(function(){
        endfunction()
    })
})

*/
const displaydata = () => {
    return new Promise((resolve, reject) => {
        console.log("First function executed")
        resolve()
    })

}
const callbackfunction1 = () => {
    return new Promise((resolve, reject) => {
        console.log("call back function 1 executed")
        let pass = false
        if (pass) {
            resolve("completed")
        }
        else {
            reject("not completed")
        }

    })

}

const endfunction = () => {
    return new Promise((resolve, reject) => {
        console.log("execution stopped")
        resolve()
    })

}
displaydata().then(() => callbackfunction1())
    .then(() => endfunction())
    .then(() => { console.log("all functions executed successfully") })
    .catch((error) => { console.error("The error message is " + error) })

    //async await---for synchronization
const paper=()=>{
    return new Promise((resolve)=>{
        resolve("Hello async await function")
    })
    
}
const stone=async()=>{
    console.log("Function started")
    const returnfunction=await paper()
    console.log(returnfunction)
    console.log("Function stopped")
}
stone()
