## Projeto realizado durante o curso de Desenvolvimento Web da Trybe - Fundamentos

##Hbilidades

- Produzir código legível, conciso e expressivo utilizando as novas funcionalidades do ES6;
- Utilizar as _Higher Order Functions_ para manipular e criar arrays;
- Escolher a _Higher Order Function_ mais adequada para a obtenção de um resultado esperado;
- Aprender a usar de forma conjunta as _Higher Order Functions_;
- Interpretar testes unitários e produzir soluções que atendam a eles.
## Entregáveis

### O que se espera:

Implementação de funções para atender aos requisitos propostos e garantir que todas as funções passem nos testes unitários.


 Instale as dependências
  * `npm install`
---

### 1. Função `getSpeciesByIds`

Esta função é responsável pela busca das espécies de animais por id. Ela retorna um array contendo as espécies referentes aos ids passados como parâmetro, podendo receber um ou mais ids.

### Função `getAnimalsOlderThan`

Esta função, a partir do nome de uma espécie e uma idade mínima, verifica se todos os animais daquela espécie possuem a idade mínima especificada.

### Função `getEmployeeByName`

Esta função é responsável pela busca das pessoas colaboradoras através do primeiro ou do último nome delas

### Função `getRelatedEmployees`

Considerando a boa prática de dividir o código em partes menores, apresentamos a função `getRelatedEmployees` em que você deverá dividí-la em duas funções: 
  
### Função `isManager` - que será responsável por verificar se uma pessoa colaboradora é gerente ou não. O retorno dessa função deve ser um booleano: `true` ou `false`;

### Função `getRelatedEmployees` - que utiliza a primeira função para apresentar as seguintes saídas: 
  * se for uma pessoa colaboradora gerente, deve retornar um array contendo os nomes das pessoas colaboradoras que ela é responsável;
  * se **não** for uma pessoa colaboradora gerente, deverá ser lançado um erro gerado com a função construtora **Error** da biblioteca padrão do JavaScript com a mensagem **"O id inserido não é de uma pessoa colaboradora gerente!"**.


### Função `countAnimals`

  Esta função é responsável por contabilizar a quantidade de animais de cada espécie.

### Função `calculateEntry`

Esta função irá receber um array de visitantes no seguinte formato:

```javascript
const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];
```
### Função `getAnimalMap`

A função é responsável pelo mapeamento geográfico das espécies e seus animais, podendo ainda filtrá-los por ordem alfabética e sexo.

### Função `getOldestFromFirstSpecies`

A função busca por informações do animal mais velho da primeira espécie gerenciada pela pessoa colaboradora do parâmetro.

