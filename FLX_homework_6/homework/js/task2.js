var price = prompt("Hi!Enter your price!");
if (0 > price || price > 9999999){
    alert("Invalid input data");
}else if(0 >= price){
    alert("Invalid input data");
}else {
    var discount = prompt("Please enter your discount");
    if (0 > discount || discount > 99 ){
        alert("Invalid input data");    
    } else{
        var discountOfMoney = ((discount/100) * price);
        var discountPrise = price - discountOfMoney;
        alert("Price without discount: " + price + "\n" + 
        "Discount: " + discount + "\n" +
        "Price with discount: " + Math.trunc(discountPrise * 100) / 100 + "\n" +
        "Saved:  "+ Math.trunc(discountOfMoney * 100) / 100);
    }
}