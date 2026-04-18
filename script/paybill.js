// paybill section
document.getElementById("bill-pay-btn").addEventListener("click",function(){
    const bankName=getValueFromInput("pay-bill-bank");
    if(bankName===""){
        alert("Select a Bank");
        return;
    }
    const bankAcNumber=getValueFromInput("pay-bill-number");
    if(bankAcNumber.length !==11){
        alert("Invalid Bank Acount Number")
        return;
    } 
    const amount=getValueFromInput("pay-bill-amount");
    const currentBalance=getBalance();
    const newBalance=currentBalance - Number(amount);
    if (newBalance < 0) {
        alert("Invalid Amount")
        return;
    }
    const pin=getValueFromInput("pay-bill-pin");
    if(pin =="1234"){
        alert(`Payed bill to
            ${bankName} at ${new Date()}`);

        setBalance(newBalance);

        const history=document.getElementById("history-container");
        const newHistory=document.createElement("div");
        newHistory.innerHTML=`

        <div class="transaction card p-4 bg-base-100">
            Bill Payed to
            ${bankName} ,acc-no ${bankAcNumber} at ${new Date()}
            </div>
        `;
        history.append(newHistory);
        clearInput("pay-bill-bank")   
        clearInput("pay-bill-number")
        clearInput("pay-bill-amount")
        clearInput("pay-bill-pin")
    }
    else{
        alert("Invalid Pin");
        return;
    }
});