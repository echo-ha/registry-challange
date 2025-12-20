import { style } from '@vanilla-extract/css';

import { themeVars } from 'src/theme.css';

export const tagCard = style({
  display: 'flex',
  flexDirection: 'column',
  gap: themeVars.spacing.medium,
  padding: themeVars.spacing.large,
  borderRadius: 8,
  backgroundColor: 'var(--gray-3)',
  border: '1px solid var(--gray-6)',
  transition: 'all 0.2s ease',
  width: '100%',
  maxWidth: '100%',
  overflow: 'hidden',
  ':hover': {
    backgroundColor: 'var(--gray-4)',
    borderColor: 'var(--gray-7)',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
  }
});

export const tagHeader = style({
  display: 'flex',
  gap: themeVars.spacing.large,
  alignItems: 'flex-start',
  justifyContent: 'space-between'
});

export const tagInfo = style({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  minWidth: 0,
  gap: themeVars.spacing.small
});

export const tagName = style({
  display: 'block',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
});

export const tagMeta = style({
  display: 'flex',
  flexDirection: 'column',
  gap: themeVars.spacing.small
});
