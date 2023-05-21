import 'styled-components';

import { AppTheme } from './constants';

declare module 'styled-components' {
  export type DefaultTheme = AppTheme;
}
