// funtion for cashout section 

document.getElementById("cashout-btn").addEventListener("click", function () {
    const cashoutNumber = getValueFromInput("cashout-number")
    if (cashoutNumber.length !== 11) {
        alert("Invalid Agent NUmber")
        return;
    }
    const cashoutAmount = getValueFromInput("cashout-amount")

    const currentBalance = getBalance();
    const newBalance = currentBalance - Number(cashoutAmount);

    if (newBalance < 0) {
        alert("Invalid Amount")
        return;
    }
    const pin = getValueFromInput("cashout-pin");
    if (pin == "1234") {
        alert("Cashout Successful");
        setBalance(newBalance);

        const history = document.getElementById("history-container");

        const div = document.createElement("div");

        div.className = "flex justify-between items-center bg-white p-4 rounded-xl shadow-sm";

        div.innerHTML = `
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
          <img src="/assets/opt-1.png" alt="">
        </div>
        <div>
          <h2 class="font-semibold">Cashout</h2>
          <p class="text-sm text-gray-500">
            $${cashoutAmount} to ${cashoutNumber}
          </p>
          <p class="text-xs text-gray-400">
            ${new Date().toLocaleString()}
          </p>
        </div>
      </div>

    `;

        history.appendChild(div);

        clearInput("cashout-number")
        clearInput("cashout-amount")
        clearInput("cashout-pin")
    }
    else {
        alert("Invalid Pin Number")
        return;
    }
});