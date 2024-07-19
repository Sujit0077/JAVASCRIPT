let day="Sunday";




// without using break tag


switch (day) {
    case "Sunday":
        console.log("Hurray today is holiday");
        

    default:
        console.log("Shit Shit");
        
}

// using break
switch (day) {
    case "Sunday":
        console.log("Hurray today is holiday");
        break;

    default:
        console.log("Shit Shit");
        
}