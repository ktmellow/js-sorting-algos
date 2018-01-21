function swap(arr, idx1, idx2) {
  const newArr = arr.slice();
  newArr[idx1] = arr[idx2];
  newArr[idx2] = arr[idx1];
  return newArr;
}

function merge(arr1, arr2) {
  let newArr = [];
  let ar1 = arr1.slice();
  let ar2 = arr2.slice();

  // loop condition while either array has length
  while(ar1.length || ar2.length) {
    if(!ar1.length) {
      newArr = newArr.concat(ar2);
      return newArr;
    } else if(!ar2.length) {
      newArr = newArr.concat(arr1);
      return newArr;
    // if first in arr1 is smaller, add it to new arr
    } else if (ar1[0] <= ar2[0]) {
      newArr.push(ar1.shift());

    // if first in arr2 is smaller, add it to new arr
    } else {
      newArr.push(ar2.shift());
    }
  }
  return newArr;
}

function partition(arr, left, right) {

}

module.exports = {
  swap,
  merge,
  partition
}