function formatTime(n) {
    let num = n;
    let day = (num/1440);
    let rday = Math.floor(day);
    let hours = (day -rday) * 24;
    let rhours = Math.floor(hours);    
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    return rday +" day(s) " + rhours + " hour(s) " + rminutes + " minute(s).";
}
formatTime(3601);