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