import React, { useEffect, useState } from 'react';
import './App.css';
import BattleView from './BattleView';
import BattleLog from './BattleLog';
import { PokemonViewData } from './PokemonView';

function App() {
  const [playerPokemonData, setPlayerPokemonData] = useState<PokemonViewData | null>(null);
  const [opponentPokemonData, setOpponentPokemonData] = useState<PokemonViewData | null>(null);
  const [battleLogMessage, setBattleLogMessage] = useState<string>("");

  // TODO: Add some error handling for when the request fails or the data is no good
  const loadPokemonData = async (pokemonId: number, isOpponent?: boolean) => {
    const pokemonDataResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    const pokemonData = await pokemonDataResponse.json();

    console.log(pokemonData);

    const randomMoveIndex = Math.floor(Math.random() * pokemonData["moves"].length);
    const chosenMoveUrl = pokemonData["moves"][randomMoveIndex]["move"]["url"];

    const moveDataResponse = await fetch(chosenMoveUrl);
    const moveData = await moveDataResponse.json();

    return {
      pokemonName: pokemonData["name"].charAt(0).toUpperCase() + pokemonData["name"].slice(1),
      spriteUrl: isOpponent ? pokemonData["sprites"]["front_default"] : pokemonData["sprites"]["back_default"],
      moveName: moveData["name"],
      movePower: moveData["power"]
    };
  }

  const handleExecuteBattle = () => {
    if (playerPokemonData != null && opponentPokemonData != null) {
      if (playerPokemonData.movePower > opponentPokemonData.movePower) {
        setBattleLogMessage(`${playerPokemonData.pokemonName} lands a decisive blow with ${playerPokemonData.moveName} knocking out ${opponentPokemonData.pokemonName}!`);
      } else if (opponentPokemonData.movePower > playerPokemonData.movePower) {
        setBattleLogMessage(`${opponentPokemonData.pokemonName} lands a decisive blow with ${opponentPokemonData.moveName} knocking out ${playerPokemonData.pokemonName}!`);
      } else {
        setBattleLogMessage("Draw");
      }
    }
  }

  useEffect(() => {
    let randomPokemonId = 0;

    if (playerPokemonData == null) {
      randomPokemonId = Math.floor((Math.random() * 150) + 1);
      
      loadPokemonData(randomPokemonId).then((data) => {
        setPlayerPokemonData(data);
      });
    }

    if (opponentPokemonData == null) {
      randomPokemonId = Math.floor((Math.random() * 150) + 1);
      
      loadPokemonData(randomPokemonId, true).then((data) => {
        setOpponentPokemonData(data);
      });
    }
  }, []);

  return (
    <div className="App">
      <BattleView
        playerPokemonData={playerPokemonData}
        opponentPokemonData={opponentPokemonData}
      />
      <BattleLog
        message={battleLogMessage}
        executeBattle={handleExecuteBattle}
      />
    </div>
  );
}

export default App;