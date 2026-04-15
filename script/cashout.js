// funtion for cashout section 

document.getElementById("cashout-btn").addEventListener("click",function(){
    const cashoutNumber=getValueFromInput("cashout-number")
    if(cashoutNumber.length !== 11){
        alert("Invalid Agent NUmber")
        return;
    }
    const cashoutAmount=getValueFromInput("cashout-amount")

    const balanceElement=document.getElementById("balance");
    const balance=balanceElement.innerText;
    const newBalance=Number(balance)- Number(cashoutAmount);

    if(newBalance <0){
        alert("Invalid Amount")
        return;
    }
    const pin=getValueFromInput("cashout-pin");
    if(pin =="1234"){
        alert("Cashout Successful")
        balanceElement.innerText=newBalance;
        
    }
    else{
        alert("Invalid Pin Number")
        return;
    }
});