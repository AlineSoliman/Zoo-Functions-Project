const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const employee = {};
  if (employeeName) {
    return data.employees.find((element) =>
      (element.firstName === employeeName || element.lastName === employeeName));
  }
  return employee;
}
console.log(getEmployeeByName('Ola'));
module.exports = getEmployeeByName;
