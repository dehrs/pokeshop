import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';

interface Pokemon {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartContextData {
  pokemons: Pokemon[];
  addToCart(item: Omit<Pokemon, 'quantity'>): void;
  removeToCart(): void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

const CartProvider: React.FC = ({ children }) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>(() => {
    const storageBuyPokemons = localStorage.getItem('@Pokeshop:pokemons');
    if (storageBuyPokemons) {
      return JSON.parse(storageBuyPokemons);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('@Pokeshop:pokemons', JSON.stringify(pokemons));
  }, [pokemons]);

  const addToCart = useCallback(
    async poke => {
      const pokemonExists = pokemons.find(p => p.id === poke.id);

      if (pokemonExists) {
        setPokemons(
          pokemons.map(p =>
            p.id === poke.id ? { ...poke, quantity: p.quantity + 1 } : p,
          ),
        );
      } else {
        setPokemons([...pokemons, { ...poke, quantity: 1 }]);
      }
    },
    [pokemons],
  );

  const removeToCart = useCallback(() => {
    localStorage.removeItem('@Pokeshop:pokemons');
    setPokemons([]);
  }, []);

  return (
    <CartContext.Provider value={{ addToCart, removeToCart, pokemons }}>
      {children}
    </CartContext.Provider>
  );
};

function useCart(): CartContextData {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(`useCart must be used within a CartProvider`);
  }

  return context;
}

export { CartProvider, useCart };
