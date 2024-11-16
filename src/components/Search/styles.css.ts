import { style } from '@vanilla-extract/css';

import { theme } from '@/styles/theme.css.ts';
import { rem } from '@/utils/pxto.ts';

export const search = style({
  ...theme.layouts.centerY,
  width: '100%',
  height: rem(48),
  padding: rem(16),
  marginTop: rem(24),
  color: theme.colors.black,
  border: `${rem(1)} solid ${theme.colors.border_accent}`,
  borderRadius: rem(16),
  backgroundColor: theme.colors.white,
  boxShadow: `0 ${rem(8)} ${rem(8)} 0 rgba(0, 0, 0, 0.05)`,
});

export const searchText = style({
  marginLeft: rem(16),
  fontSize: rem(12),
  fontWeight: 600,
});
