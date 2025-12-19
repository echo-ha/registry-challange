import { style } from '@vanilla-extract/css';

import { themeVars } from 'src/theme.css';

export const emptyStateContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: themeVars.spacing.XXL,
  width: '100%',
  gap: themeVars.spacing.medium
});

export const emptyStateIcon = style({
  width: '48px',
  height: '48px',
  color: themeVars.color.fg,
  opacity: 0.6
});

export const emptyStateMessage = style({
  color: themeVars.color.fg,
  textAlign: 'center'
});

export const emptyStateSubtitle = style({
  textAlign: 'center'
});
