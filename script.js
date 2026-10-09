const the = document.getElementById("the");
const age = document.getElementById("age");
const ticketnum = document.getElementById("ticketnum");
const pricebtn = document.getElementById("pricebtn");
const clearbtn = document.getElementById("clearbtn");
const price = document.getElementById("price");
const numtick = document.getElementById("numtick");
const total = document.getElementById("total");
const uname = document.getElementById("uname");
let tick;



function ticketprice(num){
    if (num<12){
        tick=5;
    }
    else if (num<=17){
        tick=7;
    }
    else if (num>=18){
        tick=10;
    }
    return tick;
}

pricebtn.addEventListener("click", function(){
    uname.innerHTML= the.value +"'s ticket";
    let currentage = age.value;
    price.innerHTML = ticketprice(currentage) + "$";
    numtick.innerHTML = ticketnum.value + "$";
    total.innerHTML = eval(tick*ticketnum.value)+"$"
})

clearbtn.addEventListener("click", function(){
    uname.innerHTML = "Ticket";
    price.innerHTML = "0$";
    numtick.innerHTML = "0$";
    total.innerHTML = "0$";
})