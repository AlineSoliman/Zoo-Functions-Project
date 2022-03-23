const data = require('../data/zoo_data');

// parte 3
const parameters2 = (options) => {
  const localização = { NE: [], NW: [], SE: [], SW: [] };
  const { includeNames, sorted } = options;
  if (sorted) {
    data.species.forEach((e) => {
      const nomes = { [e.name]: e.residents.map((e2) => e2.name).sort() };
      localização[e.location].push(nomes);
    });
    return localização;
  }
  if (includeNames) {
    data.species.forEach((e) => {
      const nomes = { [e.name]: e.residents.map((e2) => e2.name) };
      localização[e.location].push(nomes);
    });
    return localização;
  }
};

// parte 2
function parameters1(options) {
  const localização = { NE: [], NW: [], SE: [], SW: [] };
  const { includeNames, sex, sorted } = options; //  desconstrução do parâmetro para usar mais parâmentro
  if (includeNames && sorted && sex) {
    data.species.forEach((e) => {
      const sexo = e.residents.filter((element) => element.sex === sex);
      const nomes = { [e.name]: sexo.map((e2) => e2.name).sort() };
      localização[e.location].push(nomes);
    }); return localização;
  }
  if (sex) {
    data.species.forEach((e) => {
      const sexo = e.residents.filter((element) => element.sex === sex);
      const nomes = { [e.name]: sexo.map((e2) => e2.name) };
      localização[e.location].push(nomes);
    });
    return localização;
  }
  return parameters2(options);
}

// parte 1
function getAnimalMap(options) {
  const localização = { NE: [], NW: [], SE: [], SW: [] };
  if (!options) {
    data.species.forEach((e) => {
      localização[e.location].push(e.name);
    });
    return localização;
  }
  const { includeNames } = options; //  desconstrução do parâmetro para usar mais parâmentro
  if (!includeNames === true) {
    data.species.forEach((e) => {
      console.log(localização[e.location].push(e.name));
    });
    return localização;
  }
  return parameters1(options);
}

console.log(getAnimalMap({ includeNames: true, sex: 'female', sorted: true }));
module.exports = getAnimalMap;
