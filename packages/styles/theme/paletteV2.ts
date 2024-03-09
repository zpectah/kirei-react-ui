import Color from 'color';
import { themeModeKeys, DeepPartial, ThemePaletteV2 } from 'types';
import { PALETTE } from 'core';

export const createThemePaletteV2 = (palette?: DeepPartial<ThemePaletteV2>): ThemePaletteV2 => {
  const mode = palette?.mode || themeModeKeys.light;
  const mode_opposite = mode === themeModeKeys.light ? themeModeKeys.dark : themeModeKeys.light;

  const black = PALETTE.black;
  const white = PALETTE.white;
  const common = {
    black,
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
    white,
  };

  // ---

  const PALETTE_THRESHOLD = 0.25; // TODO

  const DIVIDER_ALPHA = 0.15;

  const DISABLE_ALPHA = 0.35;
  const ACTIVE_ALPHA = 0.15;
  const HOVER_ALPHA = 0.05;
  const FOCUS_ALPHA = 0.15;

  // ---

  const PRIMARY_BASE = palette?.primary?.base || PALETTE.primary;
  const PRIMARY_MAIN_LIGHT = palette?.primary?.main?.light || Color(PRIMARY_BASE).darken(PALETTE_THRESHOLD).toString();
  const PRIMARY_MAIN_DARK = palette?.primary?.main?.dark || Color(PRIMARY_BASE).lighten(PALETTE_THRESHOLD).toString();

  // --

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
    //
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
    //
    light: {
      base: PALETTE.light,
    },
    dark: {
      base: PALETTE.dark,
    },
    //
    // neutral: {
    //   base: PALETTE.dark,
    // },
    // inverted: {
    //   base: PALETTE.light,
    // },
  };

  const theme_update = {
    background: {
      body: {
        ...theme_base.background.body,
      },
      paper: {
        ...theme_base.background.paper,
      },
      shape: {
        light: palette?.background?.shape?.light || Color(theme_base.background.paper.light).blacken(0.25).toString(),
        dark: palette?.background?.shape?.dark || Color(theme_base.background.paper.light).whiten(0.25).toString(),
      },
      dividerAlpha: theme_base.background.dividerAlpha,
    },
    text: {
      body: {
        ...theme_base.text.body,
      },
      muted: {
        light: palette?.text?.muted?.light || Color(theme_base.text.body.light).lighten(0.15).toString(),
        dark: palette?.text?.muted?.dark || Color(theme_base.text.body.dark).darken(0.15).toString(),
      },
      disabled: {
        light:
          palette?.text?.disabled?.light ||
          Color(theme_base.text.body.light).alpha(theme_base.action.disableAlpha).toString(),
        dark:
          palette?.text?.disabled?.dark ||
          Color(theme_base.text.body.dark).alpha(theme_base.action.disableAlpha).toString(),
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
    //
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
        light: Color(theme_base.secondary.base).darken(PALETTE_THRESHOLD).toString(),
        dark: Color(theme_base.secondary.base).lighten(PALETTE_THRESHOLD).toString(),
      },
      contrast: {
        light: PALETTE.white,
        dark: PALETTE.black,
      },
    },
    tertiary: {
      main: {
        light: Color(theme_base.tertiary.base).darken(PALETTE_THRESHOLD).toString(),
        dark: Color(theme_base.tertiary.base).lighten(PALETTE_THRESHOLD).toString(),
      },
      contrast: {
        light: PALETTE.white,
        dark: PALETTE.black,
      },
    },
    success: {
      main: {
        light: Color(theme_base.success.base).darken(PALETTE_THRESHOLD).toString(),
        dark: Color(theme_base.success.base).lighten(PALETTE_THRESHOLD).toString(),
      },
      contrast: {
        light: PALETTE.white,
        dark: PALETTE.black,
      },
    },
    info: {
      main: {
        light: Color(theme_base.info.base).darken(PALETTE_THRESHOLD).toString(),
        dark: Color(theme_base.info.base).lighten(PALETTE_THRESHOLD).toString(),
      },
      contrast: {
        light: PALETTE.white,
        dark: PALETTE.black,
      },
    },
    warning: {
      main: {
        light: Color(theme_base.warning.base).darken(PALETTE_THRESHOLD).toString(),
        dark: Color(theme_base.warning.base).lighten(PALETTE_THRESHOLD).toString(),
      },
      contrast: {
        light: PALETTE.white,
        dark: PALETTE.black,
      },
    },
    error: {
      main: {
        light: Color(theme_base.error.base).darken(PALETTE_THRESHOLD).toString(),
        dark: Color(theme_base.error.base).lighten(PALETTE_THRESHOLD).toString(),
      },
      contrast: {
        light: PALETTE.white,
        dark: PALETTE.black,
      },
    },
    //
    light: {
      main: {
        light: Color(theme_base.light.base).darken(PALETTE_THRESHOLD).toString(),
        dark: Color(theme_base.light.base).lighten(PALETTE_THRESHOLD).toString(),
      },
      contrast: {
        light: PALETTE.black,
        dark: PALETTE.white,
      },
    },
    dark: {
      main: {
        light: Color(theme_base.dark.base).darken(PALETTE_THRESHOLD).toString(),
        dark: Color(theme_base.dark.base).lighten(PALETTE_THRESHOLD).toString(),
      },
      contrast: {
        light: PALETTE.white,
        dark: PALETTE.black,
      },
    },
    //
    // neutral: {
    //   main: {
    //     light: Color(theme_base.neutral.base).darken(PALETTE_THRESHOLD).toString(),
    //     dark: Color(theme_base.neutral.base).lighten(PALETTE_THRESHOLD).toString(),
    //   },
    //   contrast: {
    //     light: PALETTE.white,
    //     dark: PALETTE.black,
    //   },
    // },
    // inverted: {
    //   main: {
    //     light: Color(theme_base.inverted.base).darken(PALETTE_THRESHOLD).toString(),
    //     dark: Color(theme_base.inverted.base).lighten(PALETTE_THRESHOLD).toString(),
    //   },
    //   contrast: {
    //     light: PALETTE.black,
    //     dark: PALETTE.white,
    //   },
    // },
  };

  const current = {
    background: {
      body: theme_update.background.body[mode],
      paper: theme_update.background.paper[mode],
      shape: theme_update.background.shape[mode],
    },
    text: {
      body: theme_update.text.body[mode],
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
    //
    light: {
      main: theme_update.light.main[mode],
      contrast: theme_update.light.contrast[mode],
    },
    dark: {
      main: theme_update.dark.main[mode],
      contrast: theme_update.dark.contrast[mode],
    },
    //
    // neutral: {},
    // inverted: {},
  };

  // ---

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

  // What exactly is light
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

  // What exactly is dark
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

  // TODO
  // What exactly is neutral
  const neutral = {
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

  // TODO
  // What exactly is inverted
  const inverted = {
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

  return {
    mode,
    common,
    background,
    text,
    action,
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
  };
};
