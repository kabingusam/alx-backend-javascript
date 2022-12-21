export default function createIteratorObject(report) {
const departments = Object.keys(report.allEmployees);
let currentDepartmentIndex = 0;
let currentEmployeeIndex = 0;

return {
next: () => {
const currentDepartment = departments[currentDepartmentIndex];
const employees = report.allEmployees[currentDepartment];
if (currentEmployeeIndex >= employees.length) {
currentDepartmentIndex++;
currentEmployeeIndex = 0;
return { done: true };
}
const employee = employees[currentEmployeeIndex];
currentEmployeeIndex++;
return { value: employee, done: false };
},
};
}