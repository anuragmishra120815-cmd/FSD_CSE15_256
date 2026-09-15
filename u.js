/*synchronous programming node js
synchronous is a blocking architechure ,so the execution of each operator is dependent on the completion of the one before it
*/
function sum(){
    console.log("2");
}
function example(){
    console.log("1");
    sum();
    console.log("3");
}
example();

