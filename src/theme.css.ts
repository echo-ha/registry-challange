import { createTheme, globalStyle, style } from '@vanilla-extract/css';

export const [themeClass, themeVars] = createTheme({
  color: {
    echoGreen: '#7CF2C9',
    echoGreenDark: '#3FBFA1',
    bg: 'black',
    fg: 'white'
  },
  font: {
    body: 'arial'
  },
  spacing: {
    small: '4px',
    medium: '8px',
    large: '16px'
  }
});

export const appContainer = style({
  backgroundColor: themeVars.color.bg,
  color: themeVars.color.fg,
  fontFamily: themeVars.font.body,
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
