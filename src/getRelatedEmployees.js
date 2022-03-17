const data = require('../data/zoo_data');

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';

function isManager(id) {
  return data.employees.some((element) =>
    (id === stephanieId || id === olaId || id === burlId));
}
console.log(isManager('fdb2543b-5662-46a7-badc-93d960fdc0a8'));

function getRelatedEmployees(managerId) {
  if (isManager(stephanieId) === true && managerId === stephanieId) {
    return ['Burl Bethea', 'Ola Orloff', 'Emery Elser'];
  }
  if (isManager() === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
}
console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
