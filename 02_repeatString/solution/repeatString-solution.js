const repeatString = function (string, num) {
  if (num < 0) return "ERROR";
  let string = "";
  for (let i = 0; i < num; i++) {
    string += string;
  }
  return string;
};

module.exports = repeatString;
