'use strict'

const swap = require('./helpers').swap;

function bubbleSort(arr){
  // keep going through for loop. if find one that is more, swap;
  let newArr = arr.slice();
  let swapped = false;
  do {
    let swapped = false;
    for (let i=0; i < newArr.length; i++) {
      for(let j=i+1; j < newArr.length; j++) {
        if(newArr[i] > newArr[j]) {
          newArr = swap(newArr, i, j);
          swapped = true;
        }
      }
    }
  } while (swapped)
  return newArr;
}

// goes through i and puts it into sorted list previous to i
function selectionSort(arr) {
  let newArr = arr.slice();
  for(var i=0; i < newArr.length; i++) {
    let mindex = i;
    for(var j=i; j < newArr.length; j++) {
      if(newArr[mindex] > newArr[j] ) {
        mindex = j;
      }
    }
    newArr = swap(newArr, i, mindex)
  }

  return newArr;
}

// insertion sort should pluck i out of array and put it where it belongs in entire array
// this one doesn't swap in place
// function insertionSort(arr) {
//   let newArr = arr.slice();
//   for(let i = 0; i < newArr.length; i++) {

//     // increment j until arr[i] > arr[j]. insert right after.
//     for(let j=0; j < newArr.length; j++) {
//       // skip if compare to self
//       if(i === j) break;

//       // if greater than newArr[j], add i val to after j index
//       if (newArr[i] <= newArr[j]) {
//         newArr.splice(j,0,newArr.splice(i, 1)[0]);
//         break;
//       }
//     }
//   }
//   return newArr;
// }

// push everything to the right of i and then insert i
function insertionSort(arr) {
  let newArr = arr.slice();
  for(var i = 0; i < newArr.length; i++) {

    // note what i is instead of plucking i out of array
    var temp = newArr[i];

    // searches for where i's value belongs array
    var j = i - 1;

    // j >= 0 is just edge case for index 0
    // for every index after i
    // shift everything right until we find an index with a smaller value
    while (j >= 0 && newArr[j] > temp) {
      // we shift everything right 
      // if we don't find a lesser value
      newArr[j + 1] = newArr[j];
      j--;
    }

    // next one becomes i value if while loop not activated
    // after shifting all the bigger elements to the right of j
    // we can assign i's value to one after j, j now being less than i value
    newArr[j + 1] = temp;
  }
  return newArr;
}

module.exports = {
  bubbleSort,
  selectionSort,
  insertionSort
};