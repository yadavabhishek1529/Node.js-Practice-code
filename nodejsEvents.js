const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('waterFull', () => {
  console.log('please turn off the motor!');
  setTimeout (() => {
    console.log("please turn off the motor! It's a gentle reminder.")
  },3000);
});

console.log("the script is running")
myEmitter.emit('waterFull'); 
console.log("the script is still running")