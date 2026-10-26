let flowers=["jasmine","rose",'lilly']
console.log(flowers)

flowers.push("marrygold")
console.log(flowers)

flowers.pop()
console.log(flowers)

console.log(flowers.length)
console.log(flowers[1])

flowers.unshift("Hibiscus")
console.log(flowers)

flowers.shift()
console.log(flowers)

for(let i=0;i<flowers.length; i++){
    console.log(flowers[i])
}

for(let flower of flowers){
    console.log(flower)
}