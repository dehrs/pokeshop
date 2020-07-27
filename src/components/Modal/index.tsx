import React from 'react';
import { FiCheckCircle, FiX } from 'react-icons/fi';

import { useModal } from '../../hooks/modal';

import { Container, Content, ContentHeader, ContentMessage } from './styles';

interface Props {
  visible: boolean;
}

const Modal: React.FC<Props> = ({ visible }) => {
  const { closeModal, messageModal } = useModal();

  return (
    <>
      {visible && (
        <Container>
          <Content>
            <button
              type="button"
              onClick={() => {
                closeModal();
              }}
            >
              <FiX size={24} color="#fff" />
            </button>
            <ContentHeader>
              <FiCheckCircle size={80} color="#fff" />
            </ContentHeader>
            <ContentMessage>
              <strong>{messageModal.title}</strong>
              <p>{messageModal.message}</p>
            </ContentMessage>
          </Content>
        </Container>
      )}
    </>
  );
};

export default Modal;
