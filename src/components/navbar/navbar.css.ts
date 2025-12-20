import { style } from '@vanilla-extract/css';

import { themeVars } from 'src/theme.css';

export const navbar = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-start',
  padding: `${themeVars.spacing.large} 0`,
  cursor: 'pointer'
});

export const navbarLink = style({
  textDecoration: 'none'
});

export const navbarLogo = style({
  height: '28px'
});
