import { style } from '@vanilla-extract/css';
import { themeVars } from 'src/theme.css';

export const TitleStyle = style({
  fontSize: themeVars.font.size.large
});

export const BoldTitleStyle = style([
  TitleStyle,
  {
    fontWeight: 'bold'
  }
]);

export const TitleHighlightStyle = style({
  color: themeVars.color.echoGreen,
  fontWeight: 'bold'
});
