const isValid = function (s) {
  if (s.length > 1 && s.length % 2 == 0) {
    let parentheses = ["()", "[]", "{}"];
    let strStack = [];
    for (let i = 0; i < s.length; i++) {
      let check = strStack[strStack.length - 1] + s[i];
      if (parentheses.includes(check)) {
        strStack.pop();
      } else {
        strStack.push(s[i]);
      }
    }
    if (strStack.length > 0) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
};

let str = "";
console.log("isValid ", isValid(str));
