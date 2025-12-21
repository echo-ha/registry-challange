import { style } from '@vanilla-extract/css';

import { themeVars } from 'src/theme.css';

export const repositoryCard = style({
  display: 'flex',
  flexDirection: 'column',
  gap: themeVars.spacing.medium,
  padding: themeVars.spacing.large,
  borderRadius: 8,
  backgroundColor: 'var(--gray-3)',
  border: '1px solid var(--gray-6)',
  transition: 'all 0.2s ease',
  cursor: 'pointer',
  width: '100%',
  maxWidth: '100%',
  overflow: 'hidden',
  ':hover': {
    backgroundColor: 'var(--gray-4)',
    borderColor: 'var(--gray-7)',
    transform: 'translateY(-2px)',
    boxShadow: themeVars.shadow.card
  }
});

export const repositoryHeader = style({
  display: 'flex',
  gap: themeVars.spacing.large,
  alignItems: 'flex-start'
});

export const repositoryInfo = style({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  minWidth: 0,
  gap: themeVars.spacing.small
});

export const repositoryLogo = style({
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 8,
  overflow: 'hidden',
  backgroundColor: 'var(--gray-4)'
});

export const repositoryLogoImage = style({
  width: '100%',
  height: '100%',
  objectFit: 'contain'
});

export const repositoryName = style({
  display: 'block',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
});

export const repositoryOwner = style({
  display: 'block',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
});

export const repositoryOfficial = style({
  color: themeVars.color.echoGreen,
  display: 'flex',
  alignItems: 'center',
  gap: themeVars.spacing.small,
  selectors: {
    '& svg': {
      color: themeVars.color.echoGreen,
      fill: themeVars.color.echoGreen
    }
  }
});

export const repositoryDescription = style({
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  lineHeight: 1.4
});
