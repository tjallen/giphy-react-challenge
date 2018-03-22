import React from 'react';

const Modal = ({ showingModal, title, author, uploaded, original }) => {
  if (!showingModal) return null;
  return (
    <div>
      Modal
      {title}
      {author}
      {uploaded}
      {original}
    </div>
  );
}

export default Modal;