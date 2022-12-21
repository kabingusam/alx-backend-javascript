export default function iterateThroughObject(reportWithIterator) {
let result = '';
let employee = reportWithIterator.next();
while (!employee.done) {
result += ${employee.value}\n;
employee = reportWithIterator.next();
}
return result;
}