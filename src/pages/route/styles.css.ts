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

export const sectionBetween = style({
  ...theme.layouts.rowBetween,
});

export const sectionTitle = style({
  color: theme.colors.black,
  fontSize: rem(16),
  fontWeight: 600,
  lineHeight: rem(26),
});

export const sectionSubtitle = style({
  ...theme.layouts.centerY,
  color: '#191919B2',
  fontSize: rem(12),
  fontWeight: 600,
  lineHeight: rem(24),
  gap: rem(8),
});

export const route = style({
  width: '100%',
  height: 'auto',
  userSelect: 'none',
});

export const inputRoot = style({
  position: 'fixed',
  top: rem(48),
  left: 0,
  width: '100%',
});

export const inputContainer = style({
  width: '100%',
  maxWidth: theme.sizes.appWidth,
  marginInline: 'auto',
  paddingInline: theme.sizes.appInlinePadding,
});

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

export const accentText = style({
  marginLeft: rem(16),
  fontSize: rem(12),
  fontWeight: 600,
});
