import { style } from '@vanilla-extract/css';

import { theme } from '@/styles/theme.css.ts';
import { rem } from '@/utils/pxto.ts';

export const root = style({
  ...theme.layouts.column,
  paddingInline: theme.sizes.appInlinePadding,
  gap: rem(24),
});
