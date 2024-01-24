// Global variables
var crust = document.getElementById("crust");
var sauce = document.getElementById("sauce");

// toppings array
var toppings = [];

// event listener
var formButton = document.getElementById('btn');
formButton.addEventListener("click", function getToppings(event) {
    event.preventDefault();

    var topping1 = document.getElementById("top1").value;
    var topping2 = document.getElementById("top2").value;
    var topping3 = document.getElementById("top3").value;

    toppings.push(topping1);
    toppings.push(topping2);
    toppings.push(topping3);

    calculateTotal(toppings);
});

function calculateTotal(toppingArray) {  
    let total = 0; 
    let toppingCost = 2.50; 
    let baseCost = 5.50; // cost of crust and sauce
    let crust = document.getElementById("crust").value;
    let sauce = document.getElementById("sauce").value;

    // order string concatenation
    let orderString = crust + " pizza with " + sauce;

    let toppingString = "Toppings: ";

    // For Loop
    for(i=0; i<toppingArray.length; i++) {
        if(toppingArray[i]!="") {
            total += toppingCost;

            if(i!=2) {
                toppingString += toppingArray[i] + " ";
            } else {
                toppingString += toppingArray[i];
            }
        }
    }

    // total = baseCost + cost of all toppings
    total =  total + baseCost;

    // set DOM total += total   
    document.getElementById("total").innerHTML += total;

    // use DOM: = orderString  
    document.getElementById("pizzaOrder").innerHTML = orderString;
    
    // use DOM: = toppingString
    document.getElementById("toppings").innerHTML = toppingString;
}