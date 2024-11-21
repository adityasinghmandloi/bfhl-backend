export const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

export const processData = (data) => {
  let numbers = [];
  let alphabets = [];
  let highestLowercase = [];
  let isPrimeFound = false;

  data.forEach(item => {
    if (!isNaN(item)) {
      numbers.push(item);
      if (isPrime(parseInt(item))) {
        isPrimeFound = true;
      }
    } else if (/[a-zA-Z]/.test(item)) {
      alphabets.push(item);
      if (item === item.toLowerCase()) {
        highestLowercase.push(item);
      }
    }
  });

  highestLowercase.sort().reverse();
  return { numbers, alphabets, highestLowercase, isPrimeFound };
};
