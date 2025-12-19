import { createTheme, globalStyle, style } from '@vanilla-extract/css';

export const [themeClass, themeVars] = createTheme({
  color: {
    echoGreen: '#7CF2C9',
    echoGreenDark: '#3FBFA1',
    fg: 'white'
  },
  font: {
    family: '"Inter Variable", Arial, sans-serif',
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
    large: '16px',
    XL: '24px',
    XXL: '32px'
  }
});

export const appContainer = style({
  fontFamily: themeVars.font.family,
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
  minHeight: '100dvh',
  transition: 'all 0.3s ease-in-out'
});

globalStyle('body', {
  display: 'flex',
  flexDirection: 'column'
});
