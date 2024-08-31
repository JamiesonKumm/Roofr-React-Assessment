import React from 'react';
import './BattleView.css';
import PokemonView, { PokemonViewData } from './PokemonView';

interface BattleViewProps {
  playerPokemonData: PokemonViewData;
  opponentPokemonData: PokemonViewData;
}

function BattleView(props: BattleViewProps) {
  return (
    <div className="battle-view-container">
      <PokemonView isOpponent={true} pokemonData={props.opponentPokemonData} />
      <PokemonView pokemonData={props.playerPokemonData} />
    </div>
  );
}

export default BattleView;