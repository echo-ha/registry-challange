import { createTheme, globalStyle, style } from '@vanilla-extract/css';

export const [themeClass, themeVars] = createTheme({
  color: {
    echoGreen: 'mint',
    echoGreenDark: '#3FBFA1',
    fg: 'white'
  },
  font: {
    body: '"Inter Variable", Arial, sans-serif',
    size: {
      small: '14px',
      medium: '20px',
      large: '26px',
      XL: '32px'
    }
  },
  spacing: {
    small: '4px',
    medium: '8px',
    large: '16px'
  }
});

export const appContainer = style({
  fontFamily: themeVars.font.body,
  fontSize: themeVars.font.size.medium,
  minHeight: '100dvh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: themeVars.spacing.medium
});

globalStyle('html, body', {
  margin: 0,
  width: '100%',
  minHeight: '100dvh'
});

globalStyle('body', {
  display: 'flex',
  flexDirection: 'column'
});
