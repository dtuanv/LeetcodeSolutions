var reverse = function (x) {
  let result = "";
  if (x < 0) {
    result = "-";
    x = Math.abs(x);
  }
  x = String(x);
  let xReverse = Number(x.split("").reverse().join(""));

  if (xReverse <= 2147483648) {
    result += xReverse;
  } else {
    result = 0;
  }

  return Number(result);
};
console.log("result ", reverse(1534236469));
