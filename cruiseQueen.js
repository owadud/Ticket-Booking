//firstClass
document.getElementById("first-plusBtn").addEventListener("click", function () {
    economy("firstText", true);
});
document.getElementById("first-minusBtn").addEventListener("click", function () {
    economy("firstText", false);
});

//secondClass

document.getElementById("eco-plusBtn").addEventListener("click", function () {
    economy("ecoInputText", true);
});
document.getElementById("eco-minusBtn").addEventListener("click", function () {
    economy("ecoInputText", false);
});

//Ticket Quantity  
function economy(id, isIncrease) {
    const ecoInput = document.getElementById(id);
    const ecoNumber = parseInt(ecoInput.value);
    let ecoAmount = ecoNumber;
    if (isIncrease == true) {
        ecoAmount = ecoNumber + 1;

    }
    if (isIncrease == false && ecoAmount >= 1) {
        ecoAmount = ecoNumber - 1;
    }
    ecoInput.value = ecoAmount;

    document.getElementById(id).innerText = ecoAmount;

    priceCalculation();
}

//user memo 
document.getElementById("booked").addEventListener("click", function () {
    if(priceCalculation()>1){
        const memo = document.getElementById("memo");
        memo.style.display="block";
        const main = document.getElementById("main");
        main.style.display="none";
    }
    else(){
    console.alert("You didn't select any ticket");
    }
})

//calculation

function priceCalculation() {
    //subtotal
    const ecoNumber = parseInt(document.getElementById("ecoInputText").value);
    const ecoPrice = (ecoNumber * 100);

    const firstNumber = parseInt(document.getElementById("firstText").value);
    const firstPrice = (firstNumber * 150);

    const subTotal = ecoPrice + firstPrice;
    document.getElementById("subTotal").innerText = subTotal;
    
    //vat
    const vat = Math.round(subTotal * .1);
    document.getElementById("vat").innerText = vat;

    //total
    const total = subTotal + vat;
    document.getElementById("total").innerText = total;

    //user Ticket 
    document.getElementById("firstPrice").innerText = firstPrice;
    document.getElementById("economyPrice").innerText = ecoPrice;
    document.getElementById("vatPrice").innerText = vat;
    document.getElementById("ticketPrice").innerText = total;

    return total;
    
}








