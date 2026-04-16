// my maachine for common functioning 

function getValueFromInput(id){
    const input=document.getElementById(id);
    const value =input.value;
    return value; 
}

// Balance Funtion 
function getBalance(){
    const balanceElement=document.getElementById("balance");
    const balance=balanceElement.innerText;
    return Number(balance);
}

// set the balance

function setBalance(value){
    const balanceElement=document.getElementById("balance");
    balanceElement.innerText=value;
}

// To show only the click section form 

function showOnly(id){
    const addmoney=document.getElementById("add-money");
    const cashout=document.getElementById("cash-out");
    const history=document.getElementById("history");

    addmoney.classList.add("hidden");
    cashout.classList.add("hidden");
    history.classList.add("hidden");
    

    const selected=document.getElementById(id);
    selected.classList.remove("hidden");
    
};