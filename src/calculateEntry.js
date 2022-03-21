const data = require('../data/zoo_data');

const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

function countEntrants(array) {
  const child = array.filter((element) => element.age < 18);
  const adult = array.filter((element2) => element2.age >= 18 && element2.age < 50);
  const senior = array.filter((element3) => element3.age >= 50);
  const resultado = { adult: adult.length, child: child.length, senior: senior.length };
  return resultado;
}
console.log(countEntrants(entrants));

function calculateEntry(array) {
  if (array === undefined) {
    return 0;
  }
  if (Object.keys(array).length === 0) {
    return 0;
  }
  const adultResult = ((countEntrants(array)).adult) * 49.99;
  const childResult = ((countEntrants(array)).child) * 20.99;
  const seniorResult = ((countEntrants(array)).senior) * 24.99;
  return adultResult + childResult + seniorResult;
}

console.log(calculateEntry(entrants));

module.exports = { calculateEntry, countEntrants };
