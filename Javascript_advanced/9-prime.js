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

let start = performance.now();
let primeCount = countPrimeNumbers();
let end = performance.now();

console.log('execution time of printing countPrimeNumbers was ${end - start} milliseconds.');