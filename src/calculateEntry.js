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

// const resultado1 = countEntrants(entrants);
// resultado1.filter((element) => {
//   let result;
//   if (element.child === resultado1.child) { result = resultado1.child.length * 20.99; }
//   if (element.adult === resultado1.adult) { result = resultado1.adult.length * 49.99; }
//   if (element.senior === resultado1.senior) { result = resultado1.senior.length * 24.99; }
//   return result;
// });

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
