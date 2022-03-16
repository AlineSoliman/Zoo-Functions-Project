const data = require('../data/zoo_data');

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
function getSpeciesByIds(...ids) { // ...rest para mais de um parâmetro
  if (!ids) {
    return [];
  }
  const specie = [];
  ids.filter((id) => // identificar o id do parametro primeiro (pode ser mais de um)
    data.species.forEach((element) => {
      if (element.id === id) {
        specie.push(element);
      }
    }));
  return specie;
}
console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));

module.exports = getSpeciesByIds;
