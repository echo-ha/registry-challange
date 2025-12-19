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
  ':hover': {
    backgroundColor: 'var(--gray-4)',
    borderColor: 'var(--gray-7)',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
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
  width: 48,
  height: 48,
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
  fontSize: themeVars.font.size.medium,
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

export const repositoryDescription = style({
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  lineHeight: 1.4
});
