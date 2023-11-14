import { css } from '@emotion/react';

export const position = (positionY = 0) => css`
  transform: translateY(${positionY}px);
`;
