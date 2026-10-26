function displayFunction(result){
    console.log(result)
}
function calculate(a,b,callback){
    let sum=a+b
    callback(sum)
}


function subtraction(c,d,e){
    let sub=c-d
    e(sub)
}
calculate(2,3,displayFunction)
subtraction(8,5,displayFunction)