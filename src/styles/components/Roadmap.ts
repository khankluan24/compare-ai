import { css } from '@emotion/react';

export const transform = (position = 0) => css`
  transform: translateX(${position}px);
  opacity: 1;
  transition: transform 500ms ease 0s;
`;
