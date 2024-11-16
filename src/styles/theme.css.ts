import { createGlobalTheme } from '@vanilla-extract/css';

import { rem } from '@/utils/pxto';

const sizes = {
  appWidth: rem(480),
  appInlinePadding: rem(24),
};

const fonts = {
  mono: `"Roboto Mono", "Pretendard Variable", "Courier New", Courier, monospace`,
  sans: `"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif`,
};

const layouts = {
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerX: {
    display: 'flex',
    justifyContent: 'center',
  },
  centerY: {
    display: 'flex',
    alignItems: 'center',
  },
  rowBetween: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  columnCenter: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  columnCenterX: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  columnCenterY: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
};

const zIndices = {
  overlay: '100',
  headerContainer: '150',
  modal: '200',
};

const colors = {
  white: '#FFFFFF',
  border: '#F2F2F2',
  border_accent: '#DEDEDE',
  border_highlight: '#EBEBEB',

  primary: '#3C5AED',
  secondary: '#ED3C3F',

  black: '#191919',
};

export const theme = createGlobalTheme(':root', {
  colors,
  fonts,
  sizes,
  layouts,
  zIndices,
});
