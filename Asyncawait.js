//intro function student function
const intro=()=>{
    return new Promise((resolve)=>{
        resolve ("I am Arathy")
    })
}
const student=async()=>{
    console.log("Hi all")
    const sample=await intro()
    console.log(sample)
    console.log("I am from Trivandrum")
}
student()