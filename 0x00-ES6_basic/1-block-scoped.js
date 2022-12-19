var task = false;
var task2 = true;

export default function taskBlock(trueOrFalse) {

  if (trueOrFalse) {
    var task = true;
    var task2 = false;
  }

  return [task, task2];
}
