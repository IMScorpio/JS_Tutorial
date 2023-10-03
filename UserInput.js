//User Input

//alert
alert("Hello world!")

//confirm
let myBoolean = confirm("Ok === True\nCancel== False");
console.log(myBoolean);

//prompt
let myName = prompt("enter your name ")
if(myName){
    console.log(myName.length);
    console.log(myName.trim().length);
    console.log(myName.trim())
}else{
    console.log("invalid");
}



