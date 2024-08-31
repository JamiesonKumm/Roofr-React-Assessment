import React, { useMemo } from 'react';
import './PokemonView.css';

export interface PokemonViewData {
  pokemonName: string;
  moveName: string;
  movePower: string;
  spriteUrl: string;
}

interface PokemonViewProps {
  isOpponent?: boolean;
  pokemonData: PokemonViewData | null;
}

function PokemonView(props: PokemonViewProps) {
  const viewContainerClassString = useMemo(() => {
    return `pokemon-view-container ${!props.isOpponent && "pokemon-view-container--flipped"}`;
  }, [props.isOpponent]);

  const moveInfoClassString = useMemo(() => {
    return `pokemon-info__move-info ${props.isOpponent && "pokemon-info__move-info--is-opponent"}`;
  }, [props.isOpponent]);

  return <>{
      props.pokemonData != null && 
      <div className={viewContainerClassString}>
        <div className="pokemon-info">
          <span className="pokemon-info__pokemon-name">{props.pokemonData.pokemonName}</span>
          <div className={moveInfoClassString}>
            <span className="move-info">{`${props.pokemonData.moveName}: ${props.pokemonData.movePower}`}</span>
          </div>
        </div>
        <div className="separator" />
        <img
          className="pokemon-sprite"
          src={props.pokemonData.spriteUrl}
          alt={props.pokemonData.pokemonName}
        />
      </div>
  }</>;
}

export default PokemonView;