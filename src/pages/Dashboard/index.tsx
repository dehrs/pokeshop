import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import Cart from '../../components/Cart';
import Card from '../../components/Card';

import { Container, Content } from './styles';

export interface Pokemon {
  id: number;
  name: string;
  price: number;
}

interface ResponsePokemon {
  name: string;
  url: string;
}

const Dashboard: React.FC = () => {
  const [allPokemons, setAllPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=20').then(res => {
      const getPokemon = res.data.results;

      getPokemon.map((url: ResponsePokemon) =>
        axios.get(url.url).then(response => {
          const {
            data: { id, name },
          } = response;

          const result = {
            id,
            name,
            price: Math.floor(Math.random() * 1000),
          };
          setAllPokemons(currentPokemon => [...currentPokemon, result]);
        }),
      );
    });
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Content>
          <Card listPokemon={allPokemons} />
        </Content>
        <Cart />
      </Container>
    </>
  );
};

export default Dashboard;
