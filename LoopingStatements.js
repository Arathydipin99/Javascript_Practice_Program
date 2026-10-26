//for loop
/*for(initialize;conditiom;updation){
//code
}
*/

for(let i=1;i<=5;i++){
    console.log(i)
}

/*working
i=1 1<=5  2    1 primt
2<5  3     2 print
3<5 4 3 print
4<=5 5 4print
5<=5 6 5 print
6<=5  break*/

for (let i=1;i<=10;i++){
    console.log("welcome")
}

for(let i=0;i<=3;i++){
    console.log(i)
}
console.log("**********************")
for(let i=5;i>=-5;i--){
    console.log(i)
}

/*while loop
initiialze:
while(condition){
i++
}
can be used when it continues till the expected value reaches*/
console.log("***************************")
let count=0
while(count<3){
  
    console.log(count)
      count++
}
console.log("***************************")

let password="123abc"
let enteredpswrd="12345"
while(enteredpswrd!==password){
    console.log("enter valid password")
 enteredpswrd="123abc"
 console.log("Logged in sucessfully")

}

/*do while loop
do{
}while(condition)
*/
console.log("***************************")

let k=10
do{
    console.log(k)
    k++
}
while(k<15)

console.log("***************************")
let j=1
while(j<=10){
    if(j>=3){
        break
    }
console.log(j)
j++
}

