import React from 'react';

import { CartProvider } from './cart';
import { ModalProvider } from './modal';

const AppProvider: React.FC = ({ children }) => (
  <CartProvider>
    <ModalProvider>{children}</ModalProvider>
  </CartProvider>
);

export default AppProvider;
