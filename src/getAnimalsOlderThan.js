const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animals = data.species.find((element) => element.name === animal); // percorre procurando o nome
  return animals.residents.every((element2) => element2.age >= age); // percorre por age
}
console.log(getAnimalsOlderThan('lions', 7));

module.exports = getAnimalsOlderThan;
