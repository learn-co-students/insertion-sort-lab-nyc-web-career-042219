function findMinAndRemove(array){
  let min = array[0];
  let idx;
  for(let i = 1; i < array.length; i++) {
    if (min > array[i]) {
      min = array[i];
      idx = i;
    }
  }
  array.splice(idx, 1)
  return min
}

function insertionSort(array){
  const sorted = [];
  while (array.length > 0) {
    sorted.push(findMinAndRemove(array))
  }
  return sorted;
}
