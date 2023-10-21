const array =[2,4,6,13,34,3,5,54,23,24,34,1,23,53,23]
let box1=0;
let box2=0;
for(let i=0; i<array.length; i++){
    if(array[i]%2==0){
        box1+=array[i]
    }else{
        box2+=array[i]%2==1
    }
}
console.log(`the overall value of Even: ${box1}`)
console.log(`the number of Odd: ${box2}`)