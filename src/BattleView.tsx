import React from 'react';
import './BattleView.css';
import PokemonView, { PokemonViewData } from './PokemonView';

interface BattleViewProps {
  playerPokemonData: PokemonViewData | null;
  opponentPokemonData: PokemonViewData | null;
}

function BattleView(props: BattleViewProps) {
  return (
    <div className="battle-view-container">
      <PokemonView isOpponent={true} pokemonData={props.opponentPokemonData} />
      <PokemonView isOpponent={false} pokemonData={props.playerPokemonData} />
    </div>
  );
}

export default BattleView;