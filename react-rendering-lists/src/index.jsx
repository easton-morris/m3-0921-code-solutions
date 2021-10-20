import React from 'react';
import ReactDOM from 'react-dom';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

function ListItem(props) {
  return <li>{props.value}</li>;
}

function PokeList(props) {
  const pokedex = props.pokedex;
  const listItems = pokedex.map(pokemon =>
  <ListItem key={pokedex.number} value={pokemon.name} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

ReactDOM.render(
  <PokeList pokedex={pokedex} />,
  document.getElementById('root')
);
