//let pass = "lkjdXg@233"

//if(pass.match(/[A-Z]/)&&pass.match(/[^\w\*]/)&&pass.match(/[0-9]/)&&(pass.length>10 && pass.length<=15)){



// if(pass.length>=10 && pass.length<=15){
//     if(pass.match(/[A-Z]/)){
//         if(pass.match(/[^\w\*]/)){
//             if(pass.match(/[0-9]/)){
//                 console.log("Congrats! You created password successfully")
//             }
//             else{
//                 console.log("Password must contain atleast one digit")
//             }
//         }
//         else{
//             console.log("Password should contain atleast one special character")
//         }
//     }
//     else{
//         console.log("Password should contain atleas one capital letter")
//     }

// }
// else{
//     console.log("Length of password should be greater or equal to 10 but less than 16")
// }



function check(pass){
    if(pass.length>=10&&pass.length<16)
    {
        if(pass.match(/[A-Z]/))
        {
            if(pass.match(/[^\w\*]/))
            {
                if(pass.match(/[0-9]/))
                {    
                   document.getElementById("message").innerHTML="congrats,you create password successfully"
                }
                else
                {
                    document.getElementById("message").innerHTML="password should contain atleast on numerical number"
                }
            }
            else
            {
                document.getElementById("message").innerHTML="password should contain atleast one special symbol"
            }
        }
        else
        {
            document.getElementById("message").innerHTML="password should contain atleast one capital letter"
        }
            
    }  
    else
    {
        document.getElementById("message").innerHTML="length of password should be greater than 10 or less than 16"
    }
}

document.getElementById("password").addEventListener("input",function () {
    check(this.value)
})

    
    
// function check(pass){
// if(pass.match(/[A-Z]/)){
// if(pass.match(/[0-9]/)){
// if(pass.match(/[/^\w\*]/)){
// if(pass.length>10&&pass.length<=16){
//     document.getElementById("message").innerHTML = "congrats your pasword successfull"
// }
// else{
//     document.getElementById("message").innerHTML = "length of password is greater then 10 or less then 16"
// }
// }
// else{
//     document.getElementById("message").innerHTML = "enter a special characterstics "
// }
// }
// else{
//     document.getElementById("message").innerHTML = "enter atleast one  numerical"
// }
// }
// else{
//     document.getElementById("message").innerHTML = "enter a capital letter in the password"
// }
// }


// document.getElementById("password").addEventListener("input",function(){
//     check(this.value)
// })