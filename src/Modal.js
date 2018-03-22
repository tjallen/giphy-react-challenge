import React from 'react';

const Modal = ({ isVisible, modalGif }) => {
  if (!isVisible) return null;
  const { title, images, import_dateTime } = modalGif;
  return (
    <div>
      <h3>{title}</h3>
      <img src={images.original.url} alt={title} />
      <span>{import_dateTime}</span>
    </div>
  );
};

Modal.defaultProps = {
  title: 'untitled',
  author: 'unknown',
  uploaded: 'unknown date',
}

export default Modal;