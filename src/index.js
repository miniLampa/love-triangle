/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let arr = preferences;
  let result = 0;

  function chekTriangl(i) {
    let first = arr[i] - 1;
    let second = arr[first] && arr[first] - 1 !== first ? arr[first] - 1 : null;
    let third = arr[second] && arr[second] - 1 !== second ? arr[second] - 1 : null;

    if (third == i) {
      arr[i] = arr[first] = arr[second] = 0;
      return true;
    }
    return false;
  }

  for (let i = 0; i < arr.length; i++) {
    if (chekTriangl(i)) {
      result++;
    }
  }
  return result;
};
