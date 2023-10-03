//JSON = javascript object Notation.
/* json is used to send and receive data.
    language independent.
*/
const myObj = {
    name: 'John',
    age: 30,
    hello:function(){
        console.log("hello"); 
    }
};
console.log(myObj);
const json = JSON.stringify(myObj);
console.log(json);
