import Color from 'color';
import { themeModeKeys, DeepPartial, ThemePalette } from 'types';
import { PALETTE } from 'core';

const TONAL_OFFSET = 0.25;
const DIVIDER_ALPHA = 0.15;
const DISABLE_ALPHA = 0.35;
const ACTIVE_ALPHA = 0.15;
const HOVER_ALPHA = 0.05;
const FOCUS_ALPHA = 0.15;

const TEXT_MUTED_RATIO = 0.25;

const getLightenColor = (color: string, ratio: number) => Color(color).lighten(ratio).toString();
const getDarkenColor = (color: string, ratio: number) => Color(color).darken(ratio).toString();
const getNegativeColor = (color: string) => Color(color).negate().toString();
const getGreyscaleColor = (color: string) => Color(color).grayscale().toString();
const getWhitenColor = (color: string, ratio: number) => Color(color).whiten(ratio).toString();
const getBlackenColor = (color: string, ratio: number) => Color(color).blacken(ratio).toString();
const getAlphaColor = (color: string, ratio: number) => Color(color).alpha(ratio).toString();

export const createThemePalette = (palette?: DeepPartial<ThemePalette>): ThemePalette => {
  const mode = palette?.mode || themeModeKeys.light;
  const mode_opposite = mode === themeModeKeys.light ? themeModeKeys.dark : themeModeKeys.light;

  // ---

  const tonalOffset = palette?.tonalOffset || TONAL_OFFSET;

  // ---

  const PRIMARY_BASE = palette?.primary?.base || PALETTE.primary;
  const PRIMARY_MAIN_LIGHT = palette?.primary?.main?.light || Color(PRIMARY_BASE).darken(tonalOffset).toString();
  const PRIMARY_MAIN_DARK = palette?.primary?.main?.dark || Color(PRIMARY_BASE).lighten(tonalOffset).toString();

  // ---

  const utils = {
    getLightenColor,
    getDarkenColor,
    getNegativeColor,
    getGreyscaleColor,
    getWhitenColor,
    getBlackenColor,
    getAlphaColor,
  };

  // ---

  const theme_base = {
    background: {
      body: {
        light: palette?.background?.body?.light || PALETTE.light,
        dark: palette?.background?.body?.dark || PALETTE.dark,
      },
      paper: {
        light: palette?.background?.paper?.light || PALETTE.light,
        dark: palette?.background?.paper?.dark || PALETTE.dark,
      },
      dividerAlpha: palette?.background?.dividerAlpha || DIVIDER_ALPHA,
    },
    text: {
      body: {
        light: palette?.text?.body?.light || PALETTE.dark,
        dark: palette?.text?.body?.dark || PALETTE.light,
      },
    },
    action: {
      disableAlpha: palette?.action?.disableAlpha || DISABLE_ALPHA,
      activeAlpha: palette?.action?.activeAlpha || ACTIVE_ALPHA,
      hoverAlpha: palette?.action?.hoverAlpha || HOVER_ALPHA,
      focusAlpha: palette?.action?.focusAlpha || FOCUS_ALPHA,
    },
    primary: {
      base: PRIMARY_BASE,
    },
    secondary: {
      base: palette?.secondary?.base || PALETTE.secondary,
    },
    tertiary: {
      base: palette?.tertiary?.base || PALETTE.tertiary,
    },
    success: {
      base: palette?.success?.base || PALETTE.success,
    },
    info: {
      base: palette?.info?.base || PALETTE.info,
    },
    warning: {
      base: palette?.warning?.base || PALETTE.warning,
    },
    error: {
      base: palette?.error?.base || PALETTE.error,
    },
    light: {
      base: palette?.light?.base || PALETTE.light,
    },
    dark: {
      base: palette?.dark?.base || PALETTE.dark,
    },
  };

  const TEXT_MUTED_LIGHT =
    palette?.text?.muted?.light || Color(theme_base.text.body.light).lighten(TEXT_MUTED_RATIO).toString();
  const TEXT_MUTED_DARK =
    palette?.text?.muted?.dark || Color(theme_base.text.body.dark).darken(TEXT_MUTED_RATIO).toString();

  const theme_update = {
    background: {
      body: {
        ...theme_base.background.body,
      },
      paper: {
        ...theme_base.background.paper,
      },
      shape: {
        light: palette?.background?.shape?.light || Color(theme_base.text.body.light).blacken(tonalOffset).toString(),
        dark: palette?.background?.shape?.dark || Color(theme_base.text.body.dark).whiten(tonalOffset).toString(),
      },
      dividerAlpha: theme_base.background.dividerAlpha,
    },
    text: {
      body: {
        ...theme_base.text.body,
      },
      muted: {
        light: TEXT_MUTED_LIGHT,
        dark: TEXT_MUTED_DARK,
      },
      disabled: {
        light:
          palette?.text?.disabled?.light || Color(TEXT_MUTED_LIGHT).alpha(theme_base.action.disableAlpha).toString(),
        dark: palette?.text?.disabled?.dark || Color(TEXT_MUTED_DARK).alpha(theme_base.action.disableAlpha).toString(),
      },
    },
    action: {
      disabled: {
        light:
          palette?.action?.disabled?.light || Color(PALETTE.black).alpha(theme_base.action.disableAlpha).toString(),
        dark: palette?.action?.disabled?.dark || Color(PALETTE.light).alpha(theme_base.action.disableAlpha).toString(),
      },
      active: {
        light:
          palette?.action?.active?.light || Color(PRIMARY_MAIN_LIGHT).alpha(theme_base.action.activeAlpha).toString(),
        dark: palette?.action?.active?.dark || Color(PRIMARY_MAIN_DARK).alpha(theme_base.action.activeAlpha).toString(),
      },
    },
    primary: {
      main: {
        light: PRIMARY_MAIN_LIGHT,
        dark: PRIMARY_MAIN_DARK,
      },
      contrast: {
        light: palette?.primary?.contrast?.light || PALETTE.white,
        dark: palette?.primary?.contrast?.dark || PALETTE.black,
      },
    },
    secondary: {
      main: {
        light: palette?.secondary?.main?.light || Color(theme_base.secondary.base).darken(tonalOffset).toString(),
        dark: palette?.secondary?.main?.dark || Color(theme_base.secondary.base).lighten(tonalOffset).toString(),
      },
      contrast: {
        light: palette?.secondary?.contrast?.light || PALETTE.white,
        dark: palette?.secondary?.contrast?.dark || PALETTE.black,
      },
    },
    tertiary: {
      main: {
        light: palette?.tertiary?.main?.light || Color(theme_base.tertiary.base).darken(tonalOffset).toString(),
        dark: palette?.tertiary?.main?.dark || Color(theme_base.tertiary.base).lighten(tonalOffset).toString(),
      },
      contrast: {
        light: palette?.tertiary?.contrast?.light || PALETTE.white,
        dark: palette?.tertiary?.contrast?.dark || PALETTE.black,
      },
    },
    success: {
      main: {
        light: palette?.success?.main?.light || Color(theme_base.success.base).darken(tonalOffset).toString(),
        dark: palette?.success?.main?.dark || Color(theme_base.success.base).lighten(tonalOffset).toString(),
      },
      contrast: {
        light: palette?.success?.contrast?.light || PALETTE.white,
        dark: palette?.success?.contrast?.dark || PALETTE.black,
      },
    },
    info: {
      main: {
        light: palette?.info?.main?.light || Color(theme_base.info.base).darken(TONAL_OFFSET).toString(),
        dark: palette?.info?.main?.dark || Color(theme_base.info.base).lighten(TONAL_OFFSET).toString(),
      },
      contrast: {
        light: palette?.info?.contrast?.light || PALETTE.white,
        dark: palette?.info?.contrast?.dark || PALETTE.black,
      },
    },
    warning: {
      main: {
        light: palette?.warning?.main?.light || Color(theme_base.warning.base).darken(tonalOffset).toString(),
        dark: palette?.warning?.main?.dark || Color(theme_base.warning.base).lighten(tonalOffset).toString(),
      },
      contrast: {
        light: palette?.warning?.contrast?.light || PALETTE.white,
        dark: palette?.warning?.contrast?.dark || PALETTE.black,
      },
    },
    error: {
      main: {
        light: palette?.error?.main?.light || Color(theme_base.error.base).darken(tonalOffset).toString(),
        dark: palette?.error?.main?.dark || Color(theme_base.error.base).lighten(tonalOffset).toString(),
      },
      contrast: {
        light: palette?.error?.contrast?.light || PALETTE.white,
        dark: palette?.error?.contrast?.dark || PALETTE.black,
      },
    },
    light: {
      main: {
        light: palette?.light?.main?.light || Color(theme_base.light.base).darken(tonalOffset).toString(),
        dark: palette?.light?.main?.dark || Color(theme_base.light.base).lighten(tonalOffset).toString(),
      },
      contrast: {
        light: palette?.light?.contrast?.light || PALETTE.black,
        dark: palette?.light?.contrast?.dark || PALETTE.black,
      },
    },
    dark: {
      main: {
        light: palette?.dark?.main?.light || Color(theme_base.dark.base).darken(tonalOffset).toString(),
        dark: palette?.dark?.main?.dark || Color(theme_base.dark.base).lighten(tonalOffset).toString(),
      },
      contrast: {
        light: palette?.dark?.contrast?.light || PALETTE.white,
        dark: palette?.dark?.contrast?.dark || PALETTE.white,
      },
    },
  };

  const current = {
    background: {
      body: theme_update.background.body[mode],
      paper: theme_update.background.paper[mode],
      shape: theme_update.background.shape[mode],
    },
    text: {
      body: theme_base.text.body[mode],
      muted: theme_update.text.muted[mode],
      disabled: theme_update.text.disabled[mode],
    },
    action: {
      disabled: theme_update.action.disabled[mode],
      active: theme_update.action.active[mode],
    },
    primary: {
      main: theme_update.primary.main[mode],
      contrast: theme_update.primary.contrast[mode],
    },
    secondary: {
      main: theme_update.secondary.main[mode],
      contrast: theme_update.secondary.contrast[mode],
    },
    tertiary: {
      main: theme_update.tertiary.main[mode],
      contrast: theme_update.tertiary.contrast[mode],
    },
    success: {
      main: theme_update.success.main[mode],
      contrast: theme_update.success.contrast[mode],
    },
    info: {
      main: theme_update.info.main[mode],
      contrast: theme_update.info.contrast[mode],
    },
    warning: {
      main: theme_update.warning.main[mode],
      contrast: theme_update.warning.contrast[mode],
    },
    error: {
      main: theme_update.error.main[mode],
      contrast: theme_update.error.contrast[mode],
    },
    light: {
      main: theme_update.light.main[mode],
      contrast: theme_update.light.contrast[mode],
    },
    dark: {
      main: theme_update.dark.main[mode],
      contrast: theme_update.dark.contrast[mode],
    },
  };

  // ---

  const black = PALETTE.black;
  const white = PALETTE.white;
  const common = {
    black,
    dark: PALETTE.dark,
    grey: {
      95: 'hsl(0, 0%, 5%)',
      90: 'hsl(0, 0%, 10%)',
      80: 'hsl(0, 0%, 20%)',
      70: 'hsl(0, 0%, 30%)',
      60: 'hsl(0, 0%, 40%)',
      50: 'hsl(0, 0%, 50%)',
      40: 'hsl(0, 0%, 60%)',
      30: 'hsl(0, 0%, 70%)',
      20: 'hsl(0, 0%, 80%)',
      10: 'hsl(0, 0%, 90%)',
      5: 'hsl(0, 0%, 95%)',
    },
    light: PALETTE.light,
    white,
  };

  const background = {
    body: {
      ...theme_update.background.body,
      current: current.background.body,
    },
    paper: {
      ...theme_update.background.paper,
      current: current.background.paper,
    },
    shape: {
      ...theme_update.background.shape,
      current: current.background.shape,
    },
    divider:
      palette?.background?.divider || Color(current.text.body).alpha(theme_update.background.dividerAlpha).toString(),
    dividerAlpha: theme_update.background.dividerAlpha,
  };

  const text = {
    body: {
      ...theme_update.text.body,
      current: current.text.body,
    },
    muted: {
      ...theme_update.text.muted,
      current: current.text.muted,
    },
    disabled: {
      ...theme_update.text.disabled,
      current: current.text.disabled,
    },
  };

  const action = {
    disabled: {
      ...theme_update.action.disabled,
      current: current.action.disabled,
    },
    active: {
      ...theme_update.action.active,
      current: current.action.active,
    },
    ...theme_base.action,
  };

  const primary = {
    base: theme_base.primary.base,
    main: {
      ...theme_update.primary.main,
      current: current.primary.main,
    },
    contrast: {
      ...theme_update.primary.contrast,
      current: current.primary.contrast,
    },
  };

  const secondary = {
    base: theme_base.secondary.base,
    main: {
      ...theme_update.secondary.main,
      current: current.secondary.main,
    },
    contrast: {
      ...theme_update.secondary.contrast,
      current: current.secondary.contrast,
    },
  };

  const tertiary = {
    base: theme_base.tertiary.base,
    main: {
      ...theme_update.tertiary.main,
      current: current.tertiary.main,
    },
    contrast: {
      ...theme_update.tertiary.contrast,
      current: current.tertiary.contrast,
    },
  };

  const success = {
    base: theme_base.success.base,
    main: {
      ...theme_update.success.main,
      current: current.success.main,
    },
    contrast: {
      ...theme_update.success.contrast,
      current: current.success.contrast,
    },
  };

  const info = {
    base: theme_base.info.base,
    main: {
      ...theme_update.info.main,
      current: current.info.main,
    },
    contrast: {
      ...theme_update.info.contrast,
      current: current.info.contrast,
    },
  };

  const warning = {
    base: theme_base.warning.base,
    main: {
      ...theme_update.warning.main,
      current: current.warning.main,
    },
    contrast: {
      ...theme_update.warning.contrast,
      current: current.warning.contrast,
    },
  };

  const error = {
    base: theme_base.error.base,
    main: {
      ...theme_update.error.main,
      current: current.error.main,
    },
    contrast: {
      ...theme_update.error.contrast,
      current: current.error.contrast,
    },
  };

  const light = {
    base: theme_base.light.base,
    main: {
      ...theme_update.light.main,
      current: current.light.main,
    },
    contrast: {
      ...theme_update.light.contrast,
      current: current.light.contrast,
    },
  };

  const dark = {
    base: theme_base.dark.base,
    main: {
      ...theme_update.dark.main,
      current: current.dark.main,
    },
    contrast: {
      ...theme_update.dark.contrast,
      current: current.dark.contrast,
    },
  };

  const neutralColor = {
    light,
    dark,
  };

  const neutral = {
    base: neutralColor[mode_opposite].base,
    main: {
      light: neutralColor[mode_opposite].main.light,
      dark: neutralColor[mode_opposite].main.dark,
      current: neutralColor[mode_opposite].main.current,
    },
    contrast: {
      light: neutralColor[mode_opposite].contrast.light,
      dark: neutralColor[mode_opposite].contrast.dark,
      current: neutralColor[mode_opposite].contrast.current,
    },
  };

  const inverted = {
    base: neutralColor[mode].base,
    main: {
      light: neutralColor[mode].main.light,
      dark: neutralColor[mode].main.dark,
      current: neutralColor[mode].main.current,
    },
    contrast: {
      light: neutralColor[mode].contrast.light,
      dark: neutralColor[mode].contrast.dark,
      current: neutralColor[mode].contrast.current,
    },
  };

  return {
    mode,
    common,
    background,
    text,
    action,
    tonalOffset,
    primary,
    secondary,
    tertiary,
    success,
    info,
    warning,
    error,
    light,
    dark,
    neutral,
    inverted,
    utils,
  };
};
