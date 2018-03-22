import React from 'react';
import styled from 'styled-components';

const GifListItem = styled('li') `
  cursor: pointer;
  margin: 5px;
`;

const Gif = ({ id, src, title, onGifClick }) => (
  <GifListItem><img src={src} onClick={() => onGifClick(id)} alt={title} /></GifListItem>
);

export default Gif;