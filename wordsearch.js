/*const wordSearch = (letters, word) => { 
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};*/
const transpose = function(matrix) {
  let newArr = [];
  for (let i = 0; i < matrix[0].length; i++) {
    let subArr = [];
    for (let j = 0; j < matrix.length; j++) {
      subArr.push(matrix[j][i]);
    }
    newArr.push(subArr);
  }
  return newArr;
};
const wordSearch = (letters, word) => { 
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  const verticleJoin = transpose(letters).map(ls => ls.join(''));
  for (l of verticleJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};

module.exports = wordSearch;

/*const backwardJoin = letters.map(ls => ls.join(''));
for (let i = letters.length -1; i <= 0 ; i--) {
  module.exports = wordSearch;
  const backwardJoin = letters.map(ls => ls.reverse().join(''));
  for (let i = ) {
      if (p.includes(word)) return true;
    }
    return false;*/