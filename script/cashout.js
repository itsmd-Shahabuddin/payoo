// funtion for cashout section 

document.getElementById("cashout-btn").addEventListener("click", function () {
    const cashoutNumber = getValueFromInput("cashout-number")
    if (cashoutNumber.length !== 11) {
        alert("Invalid Agent NUmber")
        return;
    }
    const cashoutAmount = getValueFromInput("cashout-amount");

    const currentBalance = getBalance();
    const newBalance = currentBalance - Number(cashoutAmount);
    if (newBalance < 0) {
        alert("Invalid Amount")
        return;
    }
    const pin = getValueFromInput("cashout-pin");
    if (pin == "1234") {
        alert(`Cashout to
            ${cashoutNumber} at ${new Date()}`);
        setBalance(newBalance);

        const history=document.getElementById("history-container");
        const newHistory=document.createElement("div");
        newHistory.innerHTML=`

        <div class="transaction card p-4 bg-base-100">
            Cash out
            ${cashoutAmount} ,to ${cashoutNumber} at ${new Date()}
          </div>
        `;

        history.appendChild(newHistory);

        clearInput("cashout-number")
        clearInput("cashout-amount")
        clearInput("cashout-pin")
    }
    else {
        alert("Invalid Pin Number")
        return;
    }
});