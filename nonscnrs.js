/* asynchronous programming in Node.js 
asynchronous is a non-blocking architecture, so the execution of each operation does not depend on the completion of the previous one
*/
function sum(){
    setTimeout(() => {
        console.log("2");
    }, 2000);   
}
function example(){
    console.log("1");
    sum();
    console.log("3");
}   
example();  
