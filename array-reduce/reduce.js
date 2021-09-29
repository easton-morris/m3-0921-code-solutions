function reduce(array, reducer, initialValue) {
  let finalVal;
  let initInd = 0;
  if (initialValue) {
    finalVal = initialValue;
  } else {
    finalVal = array[0];
    initInd = 1;
  }
  for (let ii = initInd; ii < array.length; ii++) {
    finalVal = reducer(finalVal, array[ii]);
  }
  return finalVal;
}
