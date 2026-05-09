// it is used for the moduleSecond.js 
// const circle = require('./moduleSecond')

// console.log(`The area of a circle of radius 4 is ${circle.area(4)}`);

//And it is used for the moduleSecond.mjs

// import { simple } from "./moduleSecond.mjs";
// simple()

// import simple2 from "./moduleSecond.mjs";
// simple2()

import * as a2 from "./moduleSecond.mjs"
console.log(a2.simple())
