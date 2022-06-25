import { Colors, ColorVariant } from '@/types/styled';
import { DefaultTheme } from 'styled-components';

export const getColorTheme = (
  color?: ColorVariant,
  rawReturn?: boolean,
  opacity: number = 1,
) => {
  const colors = {
    orange: `rgba(255, 138, 0, ${opacity})`,
    background: `rgba(255, 250, 230, ${opacity})`,
    green: `rgba(27, 217, 123, ${opacity})`,
    gray: `rgba(204, 204, 204, ${opacity})`,
    white: `rgba(250, 250, 250, ${opacity})`,
  };

  if (rawReturn && !color) {
    return colors;
  }

  return colors[color as ColorVariant];
};

const theme: DefaultTheme = {
  colors: getColorTheme(undefined, true) as Colors,
  sizes: {
    base: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
  transitions: {
    veryFast: 'all .1s ease',
    fast: 'all .5s ease',
    normal: 'all 1s ease',
    slow: 'all 2s ease',
  },
  breakpoints: {
    base: '640px',
    lg: '768px',
    xl: '1024px',
    xxl: '1280px',
  },
};

export default theme;
