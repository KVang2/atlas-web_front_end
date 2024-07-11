function countPrimeNumbers() {
    let primeCount = 0;
  
    for (let n = 2; n <= 100; n++) {
      let isPrime = true;
  
      for (let i = 2; i < n; i++) {
        if (n % i === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
          primeCount++;
      }
    }
  
    return primeCount;
}
function measureExecutionTime() {
  let start = performance.now();
  
  for (let i = 0; i < 100; i++) {
    countPrimeNumbers();
  }
  let end = performance.now();
  
  console.log('execution time of printing countPrimeNumbers was ${end - start} milliseconds.');
}
setTimeout(measureExecutionTime, 0);