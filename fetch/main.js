const newReq = new Request('https://jsonplaceholder.typicode.com/users');

const newInit = {
  method: 'GET'
};

const pokeReq = new Request('https://pokeapi.co/api/v2/pokemon/jolteon');

fetch(newReq, newInit).then(response => response.json()).then(data => console.log(data));

fetch(pokeReq, newInit).then(response => response.json()).then(data => console.log(data));
