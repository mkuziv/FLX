// Your code goes here
let checkLogin = prompt("Please enter your login", ""); 
if (checkLogin === "User" ) {
    let password = prompt("Please enter your password", "");
    if (password === "UserPass") {
        let d = new Date();
        let n = d.getHours();
        if( n >= 20){
            alert("Good evening, dear User!");
        }else{
            alert("Good day, dear User!");
        }
    }else if (password === null || password === ""){
        alert("Canceled")
    } else {   
        alert("Wrong password");        
    }
}else if(checkLogin === "Admin"){
    let password = prompt("Please enter your password", "");
    if (password === "RootPass") {
        let d = new Date();
        let n = d.getHours();
        if( n >= 20){
            alert("Good evening, dear Admin!");
        }else{
            alert("Good day, dear Admin!");
        }
        
    }else if (password === null || password === ""){
        alert("Canceled")
    } else {   
        alert("Wrong password");        
    } 
}else if(checkLogin === null || checkLogin === ""){
    alert("Canceled");
}else if( checkLogin.length < 4){
    alert("I don't know any users having name length less than 4 symbols");
}else{
    alert("I don’t know you");
}
