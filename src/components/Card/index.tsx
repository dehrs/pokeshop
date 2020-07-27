import React from 'react';

import { CardContent } from './styles';
import { Pokemon } from '../../pages/Dashboard';
import { useCart } from '../../hooks/cart';
import formatValue from '../../utils/formatValue';

interface PokemonData {
  listPokemon?: Pokemon[];
}

const Card: React.FC<PokemonData> = ({ listPokemon }) => {
  const { addToCart } = useCart();

  function handleAddToCart(item: Pokemon): void {
    addToCart(item);
  }
  return (
    <>
      {!!listPokemon &&
        listPokemon.map(pokemons => (
          <CardContent key={pokemons.id}>
            <img
              src={`https://pokeres.bastionbot.org/images/pokemon/${pokemons.id}.png`}
              alt="seila"
            />
            <h3>{pokemons.name}</h3>
            <p>{formatValue(pokemons.price)}</p>
            <button
              type="button"
              onClick={() => {
                handleAddToCart(pokemons);
              }}
            >
              Adicionar ao carrinho
            </button>
          </CardContent>
        ))}
    </>
  );
};

export default Card;
