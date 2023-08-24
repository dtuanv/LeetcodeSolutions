strs = ["aca", "cba"];

var longestCommonPrefix = function (strs) {
  let result = "";
  let shortest = strs[0];
  strs.forEach((st) => {
    if (st.length < shortest.length) {
      shortest = st;
    }
  });
  let commonMap = new Map();
  let checkExist = true;
  for (let i = 0; i < shortest.length; i++) {
    if (checkExist) {
      strs.forEach((st) => {
        if (st[i] != shortest[i]) {
          checkExist = false;
          if (i == 0) {
            return "";
          }
        }
      });
    }

    if (checkExist) {
      if (commonMap.size > 0 && commonMap.has(i - 1)) {
        commonMap.set(i, shortest[i]);
        result += shortest[i];
      }
      if (commonMap.size == 0) {
        commonMap.set(i, shortest[i]);

        result += shortest[i];
      }
    }
  }
  return result;
};
console.log("re", longestCommonPrefix(strs));
