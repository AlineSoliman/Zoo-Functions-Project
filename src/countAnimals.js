const data = require('../data/zoo_data');

const specieQtd = data.species.reduce((acc, curr) => {
  (acc[curr.name] = (curr.residents).length);
  return acc;
}, {});

function countAnimals(animal) {
  if (animal === undefined) {
    return specieQtd;
  }
  const { specie, sex } = animal; // desestruturar para abranger os 2 paramnetros em animal
  if (sex === undefined) { // se sex não for passado como parâmentro
    return specieQtd[specie];
  }
  const animals = data.species.find((element) => element.name === specie);
  const genero = animals.residents.filter((element2) => element2.sex === sex);
  return genero.length;
}

console.log(countAnimals({ specie: 'giraffes', sex: 'female' }));

module.exports = countAnimals;
