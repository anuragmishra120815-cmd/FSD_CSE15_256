/*promise
-> A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
-> A promise can be in one of three states: pending, fulfilled, or rejected.
-> A promise is settled if it is either fulfilled or rejected, but not pending.
->pending: The initial state of a promise. It means that the asynchronous operation has not yet completed.
->fulfilled: The state of a promise when the asynchronous operation has completed successfully, and the promise has a resulting value.
->rejected: The state of a promise when the asynchronous operation has failed, and the promise has a reason for the failure.
*/
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(" found data");
  }, 2000);
});
promise.then((result) => {
  console.log( result);
})
.catch((error) => {
  console.error("Error:", error);
});