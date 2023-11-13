import { css } from '@emotion/react';

export const contactModal3Component2 = (isShow = false) => css`
  ${isShow ? 'display: flex !important;' : 'display: none !important;  '}
`;
export const contactModal3ContentWrapper2 = (isShow = false) => css`
  ${isShow
    ? 'transform: translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;'
    : 'transform: translate3d(100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;'}
`;
