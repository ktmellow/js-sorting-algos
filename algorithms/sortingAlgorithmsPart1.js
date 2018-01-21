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

function selectionSort(arr) {
  let newArr = arr.slice();
  for(var i=0; i < newArr.length; i++) {
    let mindex = i;
    for(var j=i; j < newArr.length; j++) {
      if(newArr[mindex] < newArr[j] ) {
        mindex = j;
      }
    }
    newArr.unshift(newArr.splice(mindex,1)[0]);
  }

  return newArr;
}

// this is different than bubblesort 
// because you don't have indeterminate looping
// don't check for swapping
function insertionSort(arr) {
  let newArr = arr.slice();
  for(let i = 0; i < newArr.length; i++) {

    // increment j until arr[i] > arr[j]. insert right after.
    for(let j=0; j < newArr.length; j++) {
      // skip if compare to self
      if(i === j) break;

      // if greater than newArr[j], add i val to after j index
      if (newArr[i] <= newArr[j]) {
        newArr.splice(j,0,newArr.splice(i, 1)[0]);
        break;
      }
    }
  }
  return newArr;
}

module.exports = {
  bubbleSort,
  selectionSort,
  insertionSort
};