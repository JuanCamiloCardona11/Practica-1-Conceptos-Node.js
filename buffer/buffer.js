'use strict';

let myBuffer = Buffer.alloc(10 , "abcd"),
   anotherBuffer = Buffer.from([1,2,3,4,5]);

console.log(myBuffer);
console.log("-------------------");
console.log(myBuffer.toString("ascii"));
console.log(anotherBuffer);