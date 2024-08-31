import React from 'react';
import './App.css';
import BattleView from './BattleView';
import BattleLog from './BattleLog';

function App() {

  // TODO: Generate two random pokemon and pick a move for each (and get move data!)

  return (
    <div className="App">
      <BattleView
        playerPokemonData={{
          pokemonName: "Bulbasaur",
          moveName: "Tackle",
          movePower: 40,
          spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"
        }}
        opponentPokemonData={{
          pokemonName: "Charmander",
          moveName: "Scratch",
          movePower: 50,
          spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
        }}
      />
      <BattleLog

      />
    </div>
  );
}

export default App;