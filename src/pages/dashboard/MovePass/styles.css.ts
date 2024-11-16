import { globalStyle, style } from '@vanilla-extract/css';

import { theme } from '@/styles/theme.css.ts';
import { rem } from '@/utils/pxto.ts';

export const root = style({
  ...theme.layouts.column,
  width: '100%',
  padding: rem(16),
  border: `${rem(1)} solid ${theme.colors.border_accent}`,
  borderRadius: rem(12),
  backgroundColor: theme.colors.primary,
  boxShadow: `0 ${rem(4)} ${rem(8)} 0 rgba(0, 0, 0, 0.05)`,
  gap: rem(24),
});

export const headerBetween = style({
  ...theme.layouts.rowBetween,
});

export const branding = style({
  ...theme.layouts.centerY,
  gap: rem(8),
});

globalStyle(`${branding} > p`, {
  color: theme.colors.white,
  fontSize: rem(14),
  fontWeight: 400,
});

globalStyle(`${branding} > p > span`, {
  color: theme.colors.white,
  fontSize: rem(14),
  fontWeight: 600,
});

export const ticket = style({
  ...theme.layouts.column,
  alignItems: 'end',
  color: theme.colors.white,
  gap: rem(4),
});

export const expiration = style({
  fontSize: rem(10),
});

export const date = style({
  fontSize: rem(12),
});

export const button = style({
  ...theme.layouts.center,
  padding: rem(12),
  color: theme.colors.white,
  border: `${rem(1)} solid rgba(255, 255, 255, 0.40)`,
  borderRadius: rem(8),
  gap: rem(16),
});

globalStyle(`${button} > span`, {
  fontSize: rem(14),
  fontWeight: 600,
});
