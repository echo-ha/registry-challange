import { style } from '@vanilla-extract/css';

import { themeVars } from 'src/theme.css';

export const repositoriesContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: themeVars.spacing.large,
  width: '100%',
  maxWidth: 1200
});

export const repositoriesList = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: themeVars.spacing.large,
  width: '100%'
});
