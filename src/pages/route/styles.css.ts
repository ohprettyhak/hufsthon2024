import { style } from '@vanilla-extract/css';

import { theme } from '@/styles/theme.css.ts';
import { rem } from '@/utils/pxto.ts';

export const map = style({
  width: '100%',
  height: 'auto',
  userSelect: 'none',
});

export const root = style({
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100%',
});

export const sheet = style({
  width: '100%',
  maxWidth: theme.sizes.appWidth,
  paddingBlock: rem(32),
  paddingInline: theme.sizes.appInlinePadding,
  marginInline: 'auto',
  borderTopLeftRadius: rem(16),
  borderTopRightRadius: rem(16),
  backgroundColor: theme.colors.white,
  boxShadow: '0px -4px 16px 0px rgba(0, 0, 0, 0.15)',
});
