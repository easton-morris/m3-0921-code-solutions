function filter(array, predicate) {
  const newArray = [];
  for (let ii = 0; ii < array.length; ii++) {
    const result = predicate(array[ii]);
    if (result === true) {
      newArray.push(array[ii]);
    }
  }
  return newArray;
}
