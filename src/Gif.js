import React from 'react';

const Gif = ({ id, src, title, onGifClick }) => (
  <li><img src={src} onClick={onGifClick} alt={title} /></li>
);

export default Gif;