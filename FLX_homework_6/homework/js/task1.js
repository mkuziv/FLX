var a = prompt("Enter your number a");
var b = prompt("Enter your number b");
var c = prompt("Enter your number c");

function quadraticEquation () {    
    a = parseInt(a);    
    b = parseInt(b);    
    c = parseInt(c);
    if (isNaN(a) || isNaN(b) || isNaN(c) || a === 0 ){
        alert("Invalid input data");
    }else{
        var d = (b * b) - (4 * a * c);
        var x1, x2, x;
        if(d > 0){
        x1 = (-b + Math.sqrt(d)) / (2 * a);
        x2 = (-b - Math.sqrt(d)) / (2 * a);
        alert("x1 = " + x1);
        alert("x2 = " + x2);
        } else if (d === 0){
            x = -(b/(2 * a));
            alert("x = " + x);
        } else{
            alert("No solution")
        }  
    }      
}
quadraticEquation ();