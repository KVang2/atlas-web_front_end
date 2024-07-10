// Start queue
console.log("Start of the execution queue");

// set time
setTimeout(() => {
  console.log("Final code block to be executed");
}, 0);

// Loop to iterate 100 times and log it
for (let i = 1; i <= 100; i++) {
  console.log(i);
}
console.log("End of the loop printing");