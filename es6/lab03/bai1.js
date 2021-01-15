const multiply = (n1, n2) => {
  return n1 * n2;
};

const toCelsius = (fahrenheit) => {
  return (5 / 9) * (fahrenheit - 32);
};

const padZeros = (num, totalLen) => {
  let numStr = num.toString();
  let numZeros = totalLen - numStr.length;
  for (let i = 0; i <= numZeros; i++) {
    numStr = "0" + numStr;
  }
  return numStr;
};

const power = (base, exponent) => {
  let result = 1;
  for (let i = 0; i <= exponent; i++) {
    result *= base;
  }
  return result;
};

const greet = (who) => {
  console.log("hello", who);
};
