// let mydate=Date();
// console.log(mydate)//Wed Jun 26 2024 11:18:24 GMT+0530 (India Standard Time)
// console.log(typeof mydate)//string

mydate = new Date();
// console.log(mydate)//2024-06-26T05:49:45.418Z
// console.log(typeof mydate)//object

console.log(mydate.toString())//wed jun 26 2024 11:22:31 gmt+0530 (india standard time)


console.log(mydate.toDateString());//Wed Jun 26 2024
console.log(mydate.toISOString());//2024-06-26T05:56:24.508Z
console.log(mydate.toJSON());//2024-06-26T05:57:27.014Z
console.log(mydate.toLocaleString());//6/26/2024, 11:28:14 AM
console.log(mydate.toLocaleDateString());//6/26/2024
console.log(mydate.toLocaleTimeString());//11:29:48 AM
console.log(mydate.toTimeString())//11:30:58 GMT+0530 (India Standard Time)
console.log(mydate.toUTCString());//Wed, 26 Jun 2024 06:01:38 GMT
console.log(mydate.getTimezoneOffset());//-330


let ts=Date.now()
console.log(ts);