// Transfermoney 
document.getElementById("transfer-btn").addEventListener("click",function(){

    const transferAcNumber= getValueFromInput("transferAc-number");
    if(transferAcNumber.length !==11){
        alert("Tranfer Account Number is Invalid")
    }
    const transferAmount=getValueFromInput("transfer-amount");
    const currentBalance=getBalance();
    const newBalance=currentBalance +Number(transferAmount);

    const pin=getValueFromInput("transfer-pin");
    if(pin=="1234"){
        alert(`Transfer ${transferAmount} to Account No ${transferAcNumber} at ${new Date}`);
        setBalance(newBalance);

        const history=document.getElementById("history-container");
        const newHistory=document.createElement("div");
        newHistory.innerHTML=`

        <div class="transaction card p-4 bg-base-100">
            Money transfer
            ${transferAmount} ,to ${transferAcNumber} at ${new Date()}
            </div>
        `;
        history.append(newHistory);

        clearInput("transferAc-number")
        clearInput("transfer-amount")
        clearInput("transfer-pin")
    }
    else{
        alert("Invalid Pin Numbar")
    }
});