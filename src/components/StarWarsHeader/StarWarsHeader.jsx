import React from 'react';
import * as S from './StarWarsHeader.styles';

const STAR_WARS_IMAGE = 'http://www.clipartbest.com/cliparts/aTq/Loy/aTqLoyz8c.png';

export const StarWarsHeader = () => (
  <S.Wrapper>
    <S.StarWarsImage
      alt="star-wars-logo"
      src={ STAR_WARS_IMAGE }
    />
  </S.Wrapper>
);
