// This does not work yet
let s = "()[]{}";

let stack = new Stack();
console.log(stack);
const isValid = function (s) {
  let parentheses = ["()", "[]", "{}"];
  let result = true;
  if (s.length > 1 && s.length % 2 == 0) {
    for (let i = 0; i < s.length - 1; ) {
      let pCouple = "";
      pCouple = s[i] + s[i + 1];
      i = i + 2;
      if (!parentheses.includes(pCouple)) {
        result = false;
      }
    }
    if (!result) {
      result = true;
      let firstSub = s
        .substring(0, s.length / 2)
        .split("")
        .join("");
      let lastSub = s
        .substring(s.length / 2)
        .split("")
        .reverse()
        .join("");
      for (let i = 0; i < firstSub.length; i++) {
        let pc = "";
        pc = firstSub[i] + lastSub[i];

        if (!parentheses.includes(pc)) {
          result = false;
        }
      }
    }
    return result;
  } else {
    return false;
  }
};

console.log("isValid(s); ", isValid(s));
