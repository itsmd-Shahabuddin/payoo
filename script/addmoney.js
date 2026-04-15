// add money section
document.getElementById("add-money-btn").addEventListener("click",function(){
    const bankName=getValueFromInput("add-money-bank");
    if(bankName===""){
        alert("Select a Bank");
        return;
    }
    const bankAcNumber=getValueFromInput("add-money-number");
    if(bankAcNumber.length !==11){
        alert("Invalid Bank Acount Number")
        return;
    } 
    const amount=getValueFromInput("add-money-amount");
    const currentBalance=getBalance();
    const newBalance=currentBalance + Number(amount);
    
    const pin=getValueFromInput("add-money-pin");
    if(pin =="1234"){
        alert(`Money added from
            ${bankName} at ${new Date()}`);
        setBalance(newBalance);
    }
    else{
        alert("Invalid Pin");
        return;
    }
});