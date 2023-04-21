function sumArray(items) {
  let sum = 0;
  items.forEach((ele) => {
    sum += ele;
  });

  return sum;
}

console.log(sumArray([1, 2, 5]));
