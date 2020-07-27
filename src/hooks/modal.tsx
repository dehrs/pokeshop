import React, { createContext, useContext, useState, useCallback } from 'react';
import Modal from '../components/Modal';

export interface ModalMessage {
  title: string;
  message: string;
  visible: boolean;
}

interface ModalContextData {
  messageModal: ModalMessage;
  addModal(message: Omit<ModalMessage, 'visible'>): void;
  closeModal(): void;
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

const ModalProvider: React.FC = ({ children }) => {
  const [messageModal, setMessageModal] = useState<ModalMessage>(
    {} as ModalMessage,
  );

  const addModal = useCallback(
    ({ title, message }: Omit<ModalMessage, 'visible'>) => {
      const modal = {
        title,
        message,
        visible: true,
      };

      setMessageModal(modal);
    },
    [],
  );

  const closeModal = useCallback(() => {
    console.log('fechar');
    const modal = {
      title: '',
      message: '',
      visible: false,
    };
    setMessageModal(modal);
  }, []);

  return (
    <ModalContext.Provider value={{ messageModal, addModal, closeModal }}>
      {children}
      <Modal visible={messageModal.visible} />
    </ModalContext.Provider>
  );
};

function useModal(): ModalContextData {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }

  return context;
}

export { ModalProvider, useModal };
