function reverseNumber(n){
	n = n + "";
	if(n < 0){
	return -parseInt(n.split("").reverse().join(""));
    }else{
	return parseInt(n.split("").reverse().join(""));
	}
}
reverseNumber(123)