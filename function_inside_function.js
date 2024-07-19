function app(){
    var func1=function(){
        console.log("inside func1");
    }
    let func2=()=>{
        console.log("inside func2");
    }
    console.log("inside app");
    func1();
    func2();
}
app()
// func1()//not accessible