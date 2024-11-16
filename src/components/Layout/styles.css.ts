import { style } from '@vanilla-extract/css';

import { theme } from '@/styles/theme.css';
import { rem } from '@/utils/pxto.ts';

export const root = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: '100%',
});

export const main = style({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  width: '100%',
  maxWidth: theme.sizes.appWidth,
  marginInline: 'auto',

  selectors: {
    '&::before': {
      content: '',
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: '50%',
      width: '1px',
      transform: `translateX(calc(-1 * ${theme.sizes.appWidth} / 2))`,
      backgroundColor: theme.colors.border,
      zIndex: 1,
    },
    '&::after': {
      content: '',
      position: 'fixed',
      top: 0,
      bottom: 0,
      right: '50%',
      width: '1px',
      transform: `translateX(calc(${theme.sizes.appWidth} / 2))`,
      backgroundColor: theme.colors.border,
      zIndex: 1,
    },
  },
});

export const mainBottomPadding = style({
  paddingBottom: `calc(${rem(104)} + env(safe-area-inset-bottom))`,
});
