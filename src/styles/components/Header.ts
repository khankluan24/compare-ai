import { css } from '@emotion/react';

export const position = (positionY = 0) => css`
  @media screen and (min-width: 767px) {
    transform: translateY(${positionY}px);
  }
`;
