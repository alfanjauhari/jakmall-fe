import 'styled-components';

type ColorVariant = 'orange' | 'background' | 'green' | 'gray' | 'white';
type SizeVariant = 'base' | 'lg' | 'xl' | 'xxl';
type TransitionVariant = 'slow' | 'normal' | 'fast' | 'veryFast';
type BreakpointVariant = 'base' | 'lg' | 'xl' | 'xxl';

type Colors = Record<ColorVariant, string>;
type Sizes = Record<SizeVariant, string>;
type Transitions = Record<TransitionVariant, string>;
type Breakpoints = Record<BreakpointVariant, string>;

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
    sizes: Sizes;
    transitions: Transitions;
    breakpoints: Breakpoints;
  }
}
