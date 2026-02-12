// Lab1_EventLoop.js
// This code shows you the ORDER that JavaScript executes things
console.log('🟢 STEP 1: I run first (synchronous code)');
// setTimeout is ASYNCHRONOUS (takes time)
setTimeout(() => {
    console.log('This takes 1 second!');
}, 1000);
// Add more Promises
Promise.resolve()
    .then(() => console.log('Promise 1'))
    .then(() => console.log('Promise 2'))
    .then(() => console.log('Promise 3'));
console.log('🟢 STEP 4: I run second (synchronous code)');