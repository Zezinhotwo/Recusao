// [3, 2, 1, 13, 8, 5, 0, 1]
// [0, 1, 1, 2, 3, 5, 8, 13]

export function mergerSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2)
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  // console.log(left);
  // console.log(right);
  return merger(mergerSort(left), mergerSort(right));
}
function merger(left, right) {
    const sortArray = [];
  
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        sortArray.push(left.shift()); 
      } else {
        sortArray.push(right.shift()); 
      }
    }
  
    return sortArray.concat(left).concat(right);
  }
// console.log(mergerSort([3, 2, 1, 13, 8, 5, 0, 1]));
// [0, 1, 1, 2, 3, 5, 8, 13];
