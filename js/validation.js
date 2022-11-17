
function validate(){
       var email = document.getElementById("email").value;
console.log(email)
    var pattern = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;

    if(email.match(pattern)){
        alert("Thanks, Valid Email")
        return true
    }
    else{
        alert("Please enter a valid Email")
        return false;
 }
}