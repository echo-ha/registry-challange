import { style } from '@vanilla-extract/css';

import { themeVars } from 'src/theme.css';

export const loader = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: themeVars.spacing.large,
  width: '100%'
});
