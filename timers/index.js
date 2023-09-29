// console.log(1);

// the first two arguments of setTimeout
// 1. function to be called.
// 2. time in milliseconds after which we want to call the function.
// setTimeout(function () {
//   // f1
//   console.log(2);
// }, 200);

// setTimeout(function () {
//   // f2
//   console.log(4);
// }, 199);

// console.log(3);

// 1 3 2 4
// scheduler => f1, f2
// callback queue => f2
// let d1 = new Date();
// for (let i = 0; i < 10e9; i++) {}
// let d2 = new Date();
// console.log(d2 - d1); // gives the milliseconds gap

// console.log(1);
// setTimeout(() => {
//   // f1 = #100
//   console.log(2);
// }, 1000);

// for (let i = 0; i < 10e9; i++) {} // Global Context

// setTimeout(() => {
//   // f2
//   console.log(3);
// });

// console.log(4);

/**
 * output: 1, 4, 2, 3
 * scheduler: []
 * callbackqueue : []
 * callstack=> empty => f1 => empty => f2 => empty
 */

// setTimeout will always return a number => timerId
// let x = setTimeout(() => {}); //
// let y = setTimeout(() => {}); //
// console.log(x, y);

// console.log(1);
// let timerId1 = setTimeout(() => {
//   console.log(3);
// }, 2000);
// console.log(2);
// let x = 19;
// if (x % 2 === 0) {
//   clearTimeout(timerId1); // it will clear the scheduled function
// }
// 1 , 2 ,3
// let i = 0;
// setInterval(() => {
//   console.log(++i);
// }, 1000);

// const timerElement = document.getElementById("timer");

// function startTimer() {
//   let time = 4;
//   let timerId = setInterval(() => {
//     if (time === 0) {
//       clearInterval(timerId);
//     }
//     timerElement.innerText = time === 0 ? "Time's up" : --time;
//   }, 1000);
// }

// in browsers when we register a function with a time delay of 0sec. that function will not be pushed immediately into callback queue. instead that will be pushed once the callstack becomes empty.

// callstack empty => #100 => empty -> one event loop cycle

// setTimeout(() => {
//   console.log(1);
// }, 200);
// console.time("abc");
// for (let i = 0; i < 10e8; i++) {}
// console.timeEnd("abc");
// setTimeout(() => {
//   console.log(20);
// }, 0);
// setTimeout(() => {
//   console.log(1);
// }, 200);
// // console.time("abc");
// for (let i = 0; i < 10e8; i++) {} // 500ms
// // console.timeEnd("abc");
// setTimeout(() => {
//   console.log(2);
// }, 1);

// 2, 1

/**
 * promp from the user time.
 * set timer for that amount of timer
 * implement the fature of pause and play
 */

// let time = parseInt(window.prompt("Enter time"));
// const timerElement = document.getElementById("timer");
// const button = document.getElementById("handler");

// timerElement.innerText = time;

// button.addEventListener("click", toggleTimer);

// let timerId;
// function toggleTimer() {
//   if (!timerId) { // if the timer is not started yet
//     // play functionality
//     button.innerText = "stop";
//     timerId = setInterval(() => {
//                   if (time === 0) {
//                     timerElement.innerText = "time's up";
//                     clearInterval(timerId);
//                     timerId = undefined;
//                     return;
//                   }
//                   timerElement.innerText = --time;
//                 }, 1000);
//   } else {
//     // pause functionality
//     button.innerText = "start";
//     clearInterval(timerId); // 3
//     timerId = undefined;
//   }
// }

/**
 * timerId = undefined => 3 => undefined (timer is not started yet)
 *
 * button => `start` =>
 *
 * button => `stop` =>
 *
 * button => `start`
 */

// function convertToHrs(seconds) {
//   // seconds is the number of seconds
//   let totalMins = parseInt(seconds / 60);
//   let totalSeconds = seconds % 60;
//   let totalHrs = parseInt(totalMins / 60);
//   let finalMins = totalMins % 60;
//   return `${totalHrs}H: ${finalMins}M: ${totalSeconds}S`;
//   // return "01H: 20M: 30S"
// }

// console.log(convertToHrs(3829220));
// 3829220 / 60 => 63820.3333 => 63820M
// 3829220 % 60 => 20S
// 63820 / 60 => 1063.6666 =>

const test = document.getElementById("test");

function addListener() {
  // test.addEventListener("click", () => {
  //   console.log("inside");
  // });

  test.onclick = () => {
    console.log("first");
  };
}
