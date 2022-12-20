export default function appendToEachArrayValue(array, appendString) {
  for (var idx of array) {
    var value = array[idx];
    array[idx] = appendString + value;
  }

  return array;
}