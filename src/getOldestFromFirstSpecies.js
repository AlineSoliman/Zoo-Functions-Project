const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const findFirstSpecie = (id) => {
  const employee = employees.find((element) => element.id === id);
  const responsible = employee.responsibleFor[0];// primeira espécie gerenciada
  return responsible;
};

function getOldestFromFirstSpecies(id) {
  findFirstSpecie(id);
  const array = data.species.find((element) => element.id === findFirstSpecie(id));
  console.log(array);
  const ages = array.residents.reduce((acc, item) => {
    if (acc.age > item.age) {
      return acc;
    }
    return item;
  }, []);
  return [ages.name, ages.sex, ages.age];
}
console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
