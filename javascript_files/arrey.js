// let x =[[2,4,6,7],[9,5,1],[9,0,7,6,4],[23,32,41,12,13,10,],[1,2],[9,6,2],[23,32,45,31,],[2,1],[6,8,3,4,5,],[6,7,4]]
// for(i=0;i<x.length;i++){ // iski jgah ham(i of x) kr skte h
// console.log(x[i].length) // console.log(i.length)
// }
// for(let i=1;i<=100;i++){
//     if(i%3==0){
//         console.log("fizz")
        
//     }
//     if(i%5==0){
//         console.log("buzz")
        
//     }
//     if(i%3,5==0){
//         console.log("fizz buzz")
    
//     }
//     console.log(i)
   

// }
// let a = "naman"
// let b =''
// for(let i=a.length-1;i>=0;i--){
//     b=b+a[i]
// }
// if(a==b){
//     console.log("This is a Palindrome")
// }
// else{
//     console.log("This is not palindrome")
// }



// push 

let myarr =[1,2,3,4] // (push ka use value add krne k liye hota h)
myarr.push(9)
console.log(myarr)

//pop
// const myarrey = [1,2,5,8,9]
// myarrey.pop()
// console.log(myarrey)  // pop last value ko delete krta h 

//shift
// const malik =[2,3,1,5,7,8]  // shift first value ko hta deta h
// malik.shift()
// console.log(malik)

//unshift
// const malik=[2,4,6,7,8]  // unshift starting m value add krta h
// malik.unshift(90)
// console.log(malik)


// push = last value ko add krta h(value ko push bracket m dalenege)
//pop = last value ko delete krta h 
//shift = first  value ko delete krta h 
//unshift = first value ko add krta h 



//include 
// const d=[3,6,9,8,7]
// console.log(d.includes(9))  // include value check krta h variable k andar 


//concat
// const a = [23,45,67,89,12]
// const b = [90,76,56,43,23]
// const c = a.concat(b)  // do arrey  ko joint krne k liye 

// console.log(c)
// let a="121"
// let b=""
// for(let i=a.length-1;i>=0;i--){
//     b=b+a[i]
   
// }

// if(a==b){
//     console.log("this is a palindrom")
    
// }
// else{
//     console.log("this is not a palindrom")
// }
// let a =[4,5,7,6,2,] 
// let target = 9
// for(let i=0;i<a.length;i++){
//     for(j=i+1;j<a.length;j++){
// if(a[i]+a[j]==target){
//     console.log(i,j)
// }
//     }
   
//     }

// for map =map is used to run a function on every element
    // let myarrey =[6,7,5,4,9]
    // let sum =0
    // myarrey.map(function(x){
    //     sum=sum+x

    // })
    // console.log(sum)
    
// arrey ki length
let myarrey =[[2,3,5,7,9],[9,4,6,7],[3,6,8]]
myarrey.map(function(x){
    console.log(x.length)
})


//let myarrey =[2,3,4,5,6]

//This function have the logic to find factorial
//function fac(a){  // function name and arguments
    let b =1;
    for(let i=1;i<=a;i++){
        b=b*i  // b value ko store krne  k liye lete h =ex 1*2(2)*3(6) 
    }
    return b
    
//}

//the fac function is called
//fac(7)

    

function table(a){
    let b
for(let i=1;i<=10;i++){
     b=a*i
 //   console.log(b)
}
}

// myarrey.map(function(x){
// table(x)
//}
//)

let a=[4,6,8,9,5]
let sum = 0
a.map(function(x)
{
    sum=sum+x
})


// let arrey=["malik","deepesh","lokesh","naman","121"]

// function d(a){
//     let b=""
//     for(i=a.length-1;i>=0;i--){
//         b=b+a[i]
//     }
//     if(a==b){
//         console.log("this is a pandrilom")
//     }
//     else{
//         console.log("this is not a pandrilom")
//     }
// }
//arrey.map(function(x){
// d(x)
//}
   
//)

// table 
// let arr=[6,2,4,7]
// //let b=1
// function dm (a){
//     let  b=0
// for(i=1;i<=10;i++){
//   b=a*i
//     console.log(b)
// }}
// arr.map(function(a){
// dm(a)
// })


