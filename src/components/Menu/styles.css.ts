import { style } from '@vanilla-extract/css';

import { theme } from '@/styles/theme.css.ts';
import { rem } from '@/utils/pxto.ts';

export const root = style({
  ...theme.layouts.centerY,
  position: 'fixed',
  left: '50%',
  bottom: rem(48),
  transform: 'translateX(-50%)',
  padding: rem(4),
  borderRadius: rem(68),
  backgroundColor: theme.colors.border,
  gap: rem(4),
});

export const item = style({
  padding: rem(12),
  color: theme.colors.black,
  borderRadius: '50%',
  backgroundColor: theme.colors.border_highlight,
});

export const active = style({
  color: theme.colors.white,
  backgroundColor: theme.colors.primary,
  borderRadius: rem(68),
});
