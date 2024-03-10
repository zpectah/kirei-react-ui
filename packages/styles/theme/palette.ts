import Color from 'color';
import { themeModeKeys, DeepPartial, ThemePalette } from 'types';
import {
  PALETTE,
  PALETTE_TONAL_OFFSET,
  PALETTE_DIVIDER_ALPHA,
  PALETTE_DISABLE_ALPHA,
  PALETTE_ACTIVE_ALPHA,
  PALETTE_HOVER_ALPHA,
  PALETTE_FOCUS_ALPHA,
  TEXT_MUTED_RATIO,
} from 'core';

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

  const utils = {
    getLightenColor,
    getDarkenColor,
    getNegativeColor,
    getGreyscaleColor,
    getWhitenColor,
    getBlackenColor,
    getAlphaColor,
  };
  const tonalOffset = palette?.tonalOffset || PALETTE_TONAL_OFFSET;

  // ---

  const primaryBase = palette?.primary?.base || PALETTE.primary;
  const primaryMainLight = palette?.primary?.main?.light || Color(primaryBase).darken(tonalOffset).toString();
  const primaryMainDark = palette?.primary?.main?.dark || Color(primaryBase).lighten(tonalOffset).toString();

  // ---

  const _action = {
    disableAlpha: palette?.action?.disableAlpha || PALETTE_DISABLE_ALPHA,
    activeAlpha: palette?.action?.activeAlpha || PALETTE_ACTIVE_ALPHA,
    hoverAlpha: palette?.action?.hoverAlpha || PALETTE_HOVER_ALPHA,
    focusAlpha: palette?.action?.focusAlpha || PALETTE_FOCUS_ALPHA,
  };
  const _backgroundBody = {
    light: palette?.background?.body?.light || PALETTE.light,
    dark: palette?.background?.body?.dark || PALETTE.dark,
  };
  const _backgroundPaper = {
    light: palette?.background?.paper?.light || PALETTE.light,
    dark: palette?.background?.paper?.dark || PALETTE.dark,
  };
  const _textBody = {
    light: palette?.text?.body?.light || PALETTE.dark,
    dark: palette?.text?.body?.dark || PALETTE.light,
  };
  const _backgroundShape = {
    light: palette?.background?.shape?.light || Color(_textBody.light).blacken(tonalOffset).toString(),
    dark: palette?.background?.shape?.dark || Color(_textBody.dark).whiten(tonalOffset).toString(),
  };
  const _backgroundDividerAlpha = palette?.background?.dividerAlpha || PALETTE_DIVIDER_ALPHA;
  const _textMuted = {
    light: palette?.text?.muted?.light || Color(_textBody.light).lighten(TEXT_MUTED_RATIO).toString(),
    dark: palette?.text?.muted?.dark || Color(_textBody.dark).darken(TEXT_MUTED_RATIO).toString(),
  };
  const _textDisabled = {
    light: palette?.text?.disabled?.light || Color(_textMuted.light).alpha(_action.disableAlpha).toString(),
    dark: palette?.text?.disabled?.dark || Color(_textMuted.dark).alpha(_action.disableAlpha).toString(),
  };

  const theme_base = {
    primary: primaryBase,
    secondary: palette?.secondary?.base || PALETTE.secondary,
    tertiary: palette?.tertiary?.base || PALETTE.tertiary,
    success: palette?.success?.base || PALETTE.success,
    info: palette?.info?.base || PALETTE.info,
    warning: palette?.warning?.base || PALETTE.warning,
    error: palette?.error?.base || PALETTE.error,
    light: palette?.light?.base || PALETTE.light,
    dark: palette?.dark?.base || PALETTE.dark,
  };

  const theme_compose = {
    background: {
      body: {
        ..._backgroundBody,
      },
      paper: {
        ..._backgroundPaper,
      },
      shape: {
        ..._backgroundShape,
      },
      dividerAlpha: _backgroundDividerAlpha,
    },
    text: {
      body: {
        ..._textBody,
      },
      muted: {
        ..._textMuted,
      },
      disabled: {
        ..._textDisabled,
      },
    },
    action: {
      disabled: {
        light: palette?.action?.disabled?.light || Color(PALETTE.black).alpha(_action.disableAlpha).toString(),
        dark: palette?.action?.disabled?.dark || Color(PALETTE.light).alpha(_action.disableAlpha).toString(),
      },
      active: {
        light: palette?.action?.active?.light || Color(primaryMainLight).alpha(_action.activeAlpha).toString(),
        dark: palette?.action?.active?.dark || Color(primaryMainDark).alpha(_action.activeAlpha).toString(),
      },
    },
    primary: {
      main: {
        light: primaryMainLight,
        dark: primaryMainDark,
      },
      contrast: {
        light: palette?.primary?.contrast?.light || PALETTE.white,
        dark: palette?.primary?.contrast?.dark || PALETTE.black,
      },
    },
    secondary: {
      main: {
        light: palette?.secondary?.main?.light || Color(theme_base.secondary).darken(tonalOffset).toString(),
        dark: palette?.secondary?.main?.dark || Color(theme_base.secondary).lighten(tonalOffset).toString(),
      },
      contrast: {
        light: palette?.secondary?.contrast?.light || PALETTE.white,
        dark: palette?.secondary?.contrast?.dark || PALETTE.black,
      },
    },
    tertiary: {
      main: {
        light: palette?.tertiary?.main?.light || Color(theme_base.tertiary).darken(tonalOffset).toString(),
        dark: palette?.tertiary?.main?.dark || Color(theme_base.tertiary).lighten(tonalOffset).toString(),
      },
      contrast: {
        light: palette?.tertiary?.contrast?.light || PALETTE.white,
        dark: palette?.tertiary?.contrast?.dark || PALETTE.black,
      },
    },
    success: {
      main: {
        light: palette?.success?.main?.light || Color(theme_base.success).darken(tonalOffset).toString(),
        dark: palette?.success?.main?.dark || Color(theme_base.success).lighten(tonalOffset).toString(),
      },
      contrast: {
        light: palette?.success?.contrast?.light || PALETTE.white,
        dark: palette?.success?.contrast?.dark || PALETTE.black,
      },
    },
    info: {
      main: {
        light: palette?.info?.main?.light || Color(theme_base.info).darken(tonalOffset).toString(),
        dark: palette?.info?.main?.dark || Color(theme_base.info).lighten(tonalOffset).toString(),
      },
      contrast: {
        light: palette?.info?.contrast?.light || PALETTE.white,
        dark: palette?.info?.contrast?.dark || PALETTE.black,
      },
    },
    warning: {
      main: {
        light: palette?.warning?.main?.light || Color(theme_base.warning).darken(tonalOffset).toString(),
        dark: palette?.warning?.main?.dark || Color(theme_base.warning).lighten(tonalOffset).toString(),
      },
      contrast: {
        light: palette?.warning?.contrast?.light || PALETTE.white,
        dark: palette?.warning?.contrast?.dark || PALETTE.black,
      },
    },
    error: {
      main: {
        light: palette?.error?.main?.light || Color(theme_base.error).darken(tonalOffset).toString(),
        dark: palette?.error?.main?.dark || Color(theme_base.error).lighten(tonalOffset).toString(),
      },
      contrast: {
        light: palette?.error?.contrast?.light || PALETTE.white,
        dark: palette?.error?.contrast?.dark || PALETTE.black,
      },
    },
    light: {
      main: {
        light: palette?.light?.main?.light || Color(theme_base.light).darken(tonalOffset).toString(),
        dark: palette?.light?.main?.dark || Color(theme_base.light).lighten(tonalOffset).toString(),
      },
      contrast: {
        light: palette?.light?.contrast?.light || PALETTE.black,
        dark: palette?.light?.contrast?.dark || PALETTE.black,
      },
    },
    dark: {
      main: {
        light: palette?.dark?.main?.light || Color(theme_base.dark).darken(tonalOffset).toString(),
        dark: palette?.dark?.main?.dark || Color(theme_base.dark).lighten(tonalOffset).toString(),
      },
      contrast: {
        light: palette?.dark?.contrast?.light || PALETTE.white,
        dark: palette?.dark?.contrast?.dark || PALETTE.white,
      },
    },
  };

  const current = {
    background: {
      body: theme_compose.background.body[mode],
      paper: theme_compose.background.paper[mode],
      shape: theme_compose.background.shape[mode],
    },
    text: {
      body: theme_compose.text.body[mode],
      muted: theme_compose.text.muted[mode],
      disabled: theme_compose.text.disabled[mode],
    },
    action: {
      disabled: theme_compose.action.disabled[mode],
      active: theme_compose.action.active[mode],
    },
    primary: {
      main: theme_compose.primary.main[mode],
      contrast: theme_compose.primary.contrast[mode],
    },
    secondary: {
      main: theme_compose.secondary.main[mode],
      contrast: theme_compose.secondary.contrast[mode],
    },
    tertiary: {
      main: theme_compose.tertiary.main[mode],
      contrast: theme_compose.tertiary.contrast[mode],
    },
    success: {
      main: theme_compose.success.main[mode],
      contrast: theme_compose.success.contrast[mode],
    },
    info: {
      main: theme_compose.info.main[mode],
      contrast: theme_compose.info.contrast[mode],
    },
    warning: {
      main: theme_compose.warning.main[mode],
      contrast: theme_compose.warning.contrast[mode],
    },
    error: {
      main: theme_compose.error.main[mode],
      contrast: theme_compose.error.contrast[mode],
    },
    light: {
      main: theme_compose.light.main[mode],
      contrast: theme_compose.light.contrast[mode],
    },
    dark: {
      main: theme_compose.dark.main[mode],
      contrast: theme_compose.dark.contrast[mode],
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
      ...theme_compose.background.body,
      current: current.background.body,
    },
    paper: {
      ...theme_compose.background.paper,
      current: current.background.paper,
    },
    shape: {
      ...theme_compose.background.shape,
      current: current.background.shape,
    },
    divider:
      palette?.background?.divider || Color(current.text.body).alpha(theme_compose.background.dividerAlpha).toString(),
    dividerAlpha: theme_compose.background.dividerAlpha,
  };

  const text = {
    body: {
      ...theme_compose.text.body,
      current: current.text.body,
    },
    muted: {
      ...theme_compose.text.muted,
      current: current.text.muted,
    },
    disabled: {
      ...theme_compose.text.disabled,
      current: current.text.disabled,
    },
  };

  const action = {
    disabled: {
      ...theme_compose.action.disabled,
      current: current.action.disabled,
    },
    active: {
      ...theme_compose.action.active,
      current: current.action.active,
    },
    ..._action,
  };

  const primary = {
    base: theme_base.primary,
    main: {
      ...theme_compose.primary.main,
      current: current.primary.main,
    },
    contrast: {
      ...theme_compose.primary.contrast,
      current: current.primary.contrast,
    },
  };

  const secondary = {
    base: theme_base.secondary,
    main: {
      ...theme_compose.secondary.main,
      current: current.secondary.main,
    },
    contrast: {
      ...theme_compose.secondary.contrast,
      current: current.secondary.contrast,
    },
  };

  const tertiary = {
    base: theme_base.tertiary,
    main: {
      ...theme_compose.tertiary.main,
      current: current.tertiary.main,
    },
    contrast: {
      ...theme_compose.tertiary.contrast,
      current: current.tertiary.contrast,
    },
  };

  const success = {
    base: theme_base.success,
    main: {
      ...theme_compose.success.main,
      current: current.success.main,
    },
    contrast: {
      ...theme_compose.success.contrast,
      current: current.success.contrast,
    },
  };

  const info = {
    base: theme_base.info,
    main: {
      ...theme_compose.info.main,
      current: current.info.main,
    },
    contrast: {
      ...theme_compose.info.contrast,
      current: current.info.contrast,
    },
  };

  const warning = {
    base: theme_base.warning,
    main: {
      ...theme_compose.warning.main,
      current: current.warning.main,
    },
    contrast: {
      ...theme_compose.warning.contrast,
      current: current.warning.contrast,
    },
  };

  const error = {
    base: theme_base.error,
    main: {
      ...theme_compose.error.main,
      current: current.error.main,
    },
    contrast: {
      ...theme_compose.error.contrast,
      current: current.error.contrast,
    },
  };

  const light = {
    base: theme_base.light,
    main: {
      ...theme_compose.light.main,
      current: current.light.main,
    },
    contrast: {
      ...theme_compose.light.contrast,
      current: current.light.contrast,
    },
  };

  const dark = {
    base: theme_base.dark,
    main: {
      ...theme_compose.dark.main,
      current: current.dark.main,
    },
    contrast: {
      ...theme_compose.dark.contrast,
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
