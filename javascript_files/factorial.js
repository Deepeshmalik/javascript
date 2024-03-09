// function fac(a){
//     let b=1
// for(i=1;i<=a;i++){
// b=i*b
// document.getElementById("message").innerHTML=b
// }
// }

//  document.getElementById("username").addEventListener("input",function () {

 
// fac(this.value)
 
//  })

function km_to_m(x){
document.getElementById("message").innerHTML=x*1000
}

document.getElementById("username").addEventListener("input",function(){
    km_to_m(this.value)
})





