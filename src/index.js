module.exports = function check(str, bracketsConfig) {
  let bracketsType = [];
  let temp = str;
  let counter = Math.round(str.length / 2);

  for (let i of bracketsConfig) {
    bracketsType = [...bracketsType, i[0]+i[1]];
  }

  while (true) {
    counter--;
    for (let i of bracketsType) {
      if (temp.indexOf(i) != -1 && typeof temp === 'string') temp = temp.split(i);
      if (typeof temp === 'object') temp = temp.join('');
      if (temp.length === 0) return true;
      if (counter < 1) return false;
    }
  }
}
