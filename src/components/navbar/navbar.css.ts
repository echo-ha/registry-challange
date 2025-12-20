import { style } from '@vanilla-extract/css';

export const navbar = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-start',
  cursor: 'pointer'
});

export const navbarLink = style({
  textDecoration: 'none'
});

export const navbarLogo = style({
  height: 32
});
