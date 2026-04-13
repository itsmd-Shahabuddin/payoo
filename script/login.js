document.getElementById('login-btn').addEventListener("click",function(){
    const inputNumber=document.getElementById("input-number");
    const contactNumber=inputNumber.value;

    const inputPin=document.getElementById("input-pin");
    const pin=inputPin.value;

    if(contactNumber=="01234567890" && pin=="1234"){
        alert("Login Success");
    }
    else{
            alert("Login Failed");
            return;
    }
});