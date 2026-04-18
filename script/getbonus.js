document.getElementById("bonus-btn").addEventListener("click",function(){
    const couponCode=getValueFromInput("bonus-coupon");
    if(couponCode.length>12 || couponCode.length<5){
        alert("Invalid Coupon Code");
        return;
    }
    else{
        alert("Congratualtion, You are ther lucky one of the day!")
    }
    const currentBalance=getBalance();
    const newBalance=currentBalance + 50;
    setBalance(newBalance);

    clearInput("bonus-coupon");

})