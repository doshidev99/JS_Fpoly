const arr = [1, 2, 3, 4, 5, 6, 7];

const handleSum = (arr) => {
  let total = 0;
  arr.forEach((el) => {
    return (total += el);
  });
  return total;
};

console.log(handleSum(arr));
