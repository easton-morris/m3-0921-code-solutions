function filter(array, predicate) {
  const newArray = [];
  for (let ii = 0; ii < array.length; ii++) {
    const result = array[ii].predicate;
    if (result === true) {
      newArray.push(result);
    }
  }
  return newArray;
}
