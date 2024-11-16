import { style } from '@vanilla-extract/css';

import { theme } from '@/styles/theme.css.ts';
import { rem } from '@/utils/pxto.ts';

export const root = style({
  ...theme.layouts.column,
  paddingInline: theme.sizes.appInlinePadding,
  gap: rem(24),
});

export const image = style({
  width: '100%',
  height: 'auto',
  userSelect: 'none',
});
