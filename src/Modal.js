import React from 'react';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  background: rgba(36, 36, 36, 0.75);
  height: 100%;
  width: 100%;
  z-index: 99;
`;

const ModalInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #fff;
  position: relative;
  z-index: 100;
  max-width: 500px;
  margin: 0 auto;
  border-radius: 4px;
  padding: 15px;
`;

const CloseButton = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  margin: 10px;
  z-index: 101;
  cursor: pointer;
`;

const Modal = ({ isVisible, modalGif, onModalCloseClick }) => {
  if (!isVisible) return null;
  const { title, images, import_dateTime } = modalGif;
  return (
    <ModalWrapper onClick={onModalCloseClick}>
      <ModalInner>
        <a onClick={onModalCloseClick}><CloseButton>X</CloseButton></a>
      <h3>{title}</h3>
      <img src={images.original.url} alt={title} />
      <span>{import_dateTime}</span>
      </ModalInner>
    </ModalWrapper>
  );
};

Modal.defaultProps = {
  title: 'untitled',
  author: 'unknown',
  uploaded: 'unknown date',
}

export default Modal;