let s = "MCDLXXVI";
let roman = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
var romanToIntRightToLeft = function (s) {
  let result = 0;
  let before;
  let rela;
  for (let i = s.length - 1; i >= 0; i--) {
    before = roman[s[i - 1]];
    if (i == 0) {
      before = 0;
    }
    rela = roman[s[i]];

    if (before < rela) {
      result += rela - before;
      i--;
    } else {
      result += rela;
    }
  }
  return result;
};

console.log("romanToInt", romanToIntRightToLeft(s));

const romanToIntLeftToRight = function (s) {
  let result = 0;
  let after;
  let relat;

  for (let i = 0; i < s.length; i++) {
    relat = roman[s[i]];
    if (i == s.length - 1) {
      after = 0;
    } else {
      after = roman[s[i + 1]];
    }
    if (relat < after) {
      result += after - relat;
      i++;
    } else {
      result += relat;
    }
  }
  return result;
};

console.log("romanToIntLeftToRight", romanToIntLeftToRight(s));
