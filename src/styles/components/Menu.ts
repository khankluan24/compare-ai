import { css } from '@emotion/react';

export const contactModal3ContentWrapper2 = (isShow = false) => css`
  transition: all 0.3s ease-in;
  transform: translateX(${isShow ? 0 : 500}px);
`;
export const display = (isShow = false) => css`
  display: ${isShow ? 'flex !important;' : 'none !important;'};
`;
