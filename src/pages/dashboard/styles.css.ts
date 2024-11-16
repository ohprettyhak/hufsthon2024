import { globalStyle, style } from '@vanilla-extract/css';

import { theme } from '@/styles/theme.css.ts';
import { rem } from '@/utils/pxto.ts';

export const sectionTitle = style({
  color: theme.colors.black,
  fontSize: rem(16),
  fontWeight: 600,
  lineHeight: rem(26),
});

export const accentText = style({
  marginLeft: rem(16),
  fontSize: rem(12),
  fontWeight: 600,
});

export const card = style({
  ...theme.layouts.column,
  flex: 1,
  width: '100%',
  padding: rem(16),
  border: `${rem(1)} solid ${theme.colors.border_accent}`,
  borderRadius: rem(12),
  backgroundColor: theme.colors.white,
  boxShadow: `0 ${rem(4)} ${rem(8)} 0 rgba(0, 0, 0, 0.05)`,
  gap: rem(12),
});

export const cardHorizon = style({
  ...theme.layouts.centerY,
  width: '100%',
  padding: rem(16),
  border: `${rem(1)} solid ${theme.colors.border_accent}`,
  borderRadius: rem(12),
  backgroundColor: theme.colors.white,
  boxShadow: `0 ${rem(4)} ${rem(8)} 0 rgba(0, 0, 0, 0.05)`,
  gap: rem(12),
});

export const cardContent = style({
  ...theme.layouts.rowBetween,
  width: '100%',
  flex: 1,
});

globalStyle(`${cardContent} > div`, {
  ...theme.layouts.centerY,
  gap: rem(12),
});

export const cardSubTitle = style({
  color: theme.colors.black,
  fontSize: rem(12),
});

export const cardTitle = style({
  color: theme.colors.black,
  fontSize: rem(16),
  fontWeight: 700,
});

export const sectionBetween = style({
  ...theme.layouts.rowBetween,
});

export const sectionSubtitle = style({
  ...theme.layouts.centerY,
  color: '#191919B2',
  fontSize: rem(12),
  fontWeight: 600,
  lineHeight: rem(24),
  gap: rem(8),
});

export const cardHighlight = style({
  border: 'none',
  backgroundColor: theme.colors.primary,
});
