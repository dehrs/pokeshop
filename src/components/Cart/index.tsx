import React, { useMemo, useState, useCallback } from 'react';
import { FiFrown } from 'react-icons/fi';
import { useCart } from '../../hooks/cart';
import { useModal } from '../../hooks/modal';
import formatValue from '../../utils/formatValue';

import { Panel, Products, TotalCart, Content } from './styles';

const Carrinho: React.FC = () => {
  const { pokemons, removeToCart } = useCart();
  const { addModal } = useModal();
  const [isEmpty, setIsEmpty] = useState(false);

  const cartTotal = useMemo(() => {
    const total = pokemons.reduce((accumulator, product) => {
      const productsSubtotal = product.price * product.quantity;

      return accumulator + productsSubtotal;
    }, 0);

    return formatValue(total);
  }, [pokemons]);

  const handleFinalizarCompra = useCallback((): void => {
    if (!isEmpty) {
      removeToCart();
      addModal({
        title: 'Obrigado pela compra !',
        message: 'Você ganhou de volta R$ 20,00',
      });
    }
  }, [removeToCart, addModal, isEmpty]);

  const handleEmptyCart = useMemo((): boolean => {
    if (pokemons.length === 0) {
      setIsEmpty(true);
      return true;
    }
    setIsEmpty(false);
    return false;
  }, [pokemons]);

  return (
    <>
      <Panel>
        <Content isEmpty={isEmpty}>
          {handleEmptyCart && (
            <div>
              <FiFrown size={40} color="#DAD7D3" />
              <span>Carrinho Vazio</span>
            </div>
          )}
          {pokemons.map(p => (
            <Products key={p.id}>
              <img
                src={`https://pokeres.bastionbot.org/images/pokemon/${p.id}.png`}
                alt="pokemon"
              />
              <span>{p.name}</span>
              <span>
                {p.quantity}x</span>
              <span>{formatValue(p.price * p.quantity)}</span>
            </Products>
          ))}
        </Content>

        <TotalCart>
          <strong>Total:</strong>
          <span>{cartTotal}</span>
        </TotalCart>

        <button type="button" onClick={() => handleFinalizarCompra()}>
          Finalizar Compra
        </button>
      </Panel>
    </>
  );
};

export default Carrinho;
