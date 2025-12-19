import { style } from '@vanilla-extract/css';

import { themeVars } from 'src/theme.css';

export const repositoriesContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: themeVars.spacing.large,
  alignItems: 'center'
});

export const repositoriesList = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  gap: themeVars.spacing.large,
  padding: `0 ${themeVars.spacing.XXL}`,
  width: '100%',
  maxWidth: '1200px'
});
