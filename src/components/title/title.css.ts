import { style } from '@vanilla-extract/css';

import { themeVars } from 'src/theme.css';

export const TitleHighlightStyle = style({
  color: themeVars.color.echoGreen,
  fontWeight: 'bold'
});
