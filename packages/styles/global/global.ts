import { css } from '@emotion/react';
import { Theme } from 'types';

export const createGlobalStyles = (theme: Theme) => {
  return css({
    html: {
      margin: 0,
      padding: 0,
      fontSize: theme.typography.fontSize,
    },
    body: {
      margin: 0,
      padding: 0,
      fontSize: '1rem',
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.fontWeightRegular,
      backgroundColor: theme.palette.background.primary,
      color: theme.palette.text.primary,
    },
  });
};
