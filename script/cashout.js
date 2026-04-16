// funtion for cashout section 

document.getElementById("cashout-btn").addEventListener("click",function(){
    const cashoutNumber=getValueFromInput("cashout-number")
    if(cashoutNumber.length !== 11){
        alert("Invalid Agent NUmber")
        return;
    }
    const cashoutAmount=getValueFromInput("cashout-amount")

    const currentBalance=getBalance();
    const newBalance=currentBalance- Number(cashoutAmount);

    if(newBalance <0){
        alert("Invalid Amount")
        return;
    }
    const pin=getValueFromInput("cashout-pin");
    if(pin =="1234"){
        alert("Cashout Successful");
        setBalance(newBalance);

        const history=document.getElementById("history-container");
        const newHistory=document.createElement("div");
        newHistory.innerHTML=`

        <div class="transaction card p-4 bg-base-100">
            Cashout $${cashoutAmount} to ${cashoutNumber} at ${new Date()}
            </div>
        `;
        history.append(newHistory);
        
    }
    else{
        alert("Invalid Pin Number")
        return;
    }
});