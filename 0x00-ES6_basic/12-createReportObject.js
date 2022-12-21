export default function createReportObject(employeesList) {
const allEmployees = {};

employeesList.forEach((employee) => {
const { department, name } = employee;

if (!allEmployees[department]) {
  allEmployees[department] = [name];
} else {
  allEmployees[department].push(name);
}
});

return {
allEmployees,
getNumberOfDepartments: () => Object.keys(allEmployees).length,
};
}
