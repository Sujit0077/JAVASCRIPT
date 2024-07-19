let a=null;
console.log(a>0);//false
console.log(a==0);//false
console.log(a<0)//false
console.log(a>=0)//true
console.log(a<=0)//true
console.log(a===0);//false
console.log(a==null)//true
console.log(a!=null)//false
console.log(a==undefined)//true

//comaprison and equality work differently

//comparison convert null to number ,treating it as number

//hence null>=0 true
//hence null>0 false
console.log("hhhhhh")

let b=undefined;
console.log(b>0);//false
console.log(b==0);//false
console.log(b<0)//false
console.log(b>=0)//false
console.log(b<=0)//false
console.log(b===0);//false
console.log(b===null)//false
console.log(b==null)//true
console.log(b!=null)//false
console.log(b==undefined)//true
