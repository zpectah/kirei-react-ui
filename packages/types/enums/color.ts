export const brandColorKeys = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
} as const;

export const neutralColorKeys = {
  light: 'light',
  dark: 'dark',
  inverted: 'inverted',
  neutral: 'neutral',
} as const;

export const emotionColorKeys = {
  error: 'error',
  warning: 'warning',
  info: 'info',
  success: 'success',
} as const;

export const themeColorKeys = {
  ...brandColorKeys,
  ...neutralColorKeys,
  ...emotionColorKeys,
} as const;

export const textColorKeys = {
  body: 'body',
  muted: 'muted',
  disabled: 'disabled',
  inherit: 'inherit',
} as const;

export const backdropBackgroundColorKeys = {
  light: 'light',
  dark: 'dark',
} as const;
