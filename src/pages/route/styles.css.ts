import { style } from '@vanilla-extract/css';

import { theme } from '@/styles/theme.css.ts';
import { rem } from '@/utils/pxto.ts';

export const map = style({
  width: '100%',
  height: 'auto',
  userSelect: 'none',
});

export const fixed = style({
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  width: '100%',
});

export const searchContainer = style({
  width: '100%',
  maxWidth: theme.sizes.appWidth,
  marginInline: 'auto',
  paddingInline: theme.sizes.appInlinePadding,
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

export const sheetHeader = style({
  ...theme.layouts.rowBetween,
});

export const sheetHeaderTitle = style({
  color: theme.colors.black,
  fontSize: rem(16),
  fontWeight: 600,
  lineHeight: rem(26),
});

export const sheetHeaderSubTitle = style({
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
