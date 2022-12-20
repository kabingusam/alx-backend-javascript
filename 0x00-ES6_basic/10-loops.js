export default function appendToEachArrayValue(array, appendString) {
  for (const idx of array) {
    array[idx] = appendString + value;
  }

  return array;
}
