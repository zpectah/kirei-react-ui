import { DeepPartial, PaperColor, ThemeMode, themeModeKeys, ThemePalette } from 'types';
import { BACKGROUND_TONAL_OFFSET, PALETTE, PALETTE_RATIO } from 'core';

export const getThemePaletteRatio = (ratio?: Partial<ThemePalette['ratio']>) => {
  return {
    activeAlpha: ratio?.activeAlpha || PALETTE_RATIO.activeAlpha,
    hoverAlpha: ratio?.hoverAlpha || PALETTE_RATIO.hoverAlpha,
    disabledAlpha: ratio?.disabledAlpha || PALETTE_RATIO.disabledAlpha,
    backgroundAlpha: ratio?.backgroundAlpha || PALETTE_RATIO.backgroundAlpha,
    shadowAlpha: ratio?.shadowAlpha || PALETTE_RATIO.shadowAlpha,
    outlineAlpha: ratio?.outlineAlpha || PALETTE_RATIO.outlineAlpha,
    loadingLabelAlpha: ratio?.loadingLabelAlpha || PALETTE_RATIO.loadingLabelAlpha,
  };
};

export const getThemePaletteProps = (
  mode: ThemeMode,
  utils: ThemePalette['utils'],
  palette?: DeepPartial<ThemePalette>
) => {
  const { getLightenColor, getDarkenColor, getAlphaColor } = utils;
  const ratio = getThemePaletteRatio(palette?.ratio);

  let textColor, backgroundColor, paperBase;

  switch (mode) {
    case themeModeKeys.dark:
      textColor = palette?.text?.primary || PALETTE.white;
      backgroundColor = palette?.background?.default || PALETTE.dark;
      paperBase = palette?.background?.paper || PALETTE.paperDark;

      return {
        text: {
          primary: textColor,
          secondary: palette?.text?.secondary || getAlphaColor(textColor, 0.85),
          muted: palette?.text?.muted || PALETTE.disabled,
          disabled: palette?.text?.disabled || getAlphaColor(PALETTE.disabled, ratio.disabledAlpha),
        },
        shape: {
          divider: palette?.shape?.divider || getAlphaColor(PALETTE.white, 0.25),
          border: palette?.shape?.border || getAlphaColor(PALETTE.white, 0.15),
        },
        background: {
          default: backgroundColor,
          paper: paperBase,
        },
        inverted: {
          main: palette?.inverted?.main || backgroundColor,
          dark: palette?.inverted?.dark || getDarkenColor(backgroundColor, BACKGROUND_TONAL_OFFSET),
          light: palette?.inverted?.light || getLightenColor(backgroundColor, BACKGROUND_TONAL_OFFSET),
          contrast: palette?.inverted?.contrast || PALETTE.light,
        },
        neutral: {
          main: palette?.neutral?.main || textColor,
          dark: palette?.neutral?.dark || getDarkenColor(textColor, BACKGROUND_TONAL_OFFSET),
          light: palette?.neutral?.light || getLightenColor(textColor, BACKGROUND_TONAL_OFFSET),
          contrast: palette?.neutral?.contrast || PALETTE.dark,
        },
      };

    case themeModeKeys.light:
    default:
      textColor = palette?.text?.primary || PALETTE.black;
      backgroundColor = palette?.background?.default || PALETTE.light;
      paperBase = palette?.background?.paper || PALETTE.paperLight;

      return {
        text: {
          primary: textColor,
          secondary: palette?.text?.secondary || getAlphaColor(textColor, 0.85),
          muted: palette?.text?.muted || PALETTE.disabled,
          disabled: palette?.text?.disabled || getAlphaColor(PALETTE.disabled, ratio.disabledAlpha),
        },
        shape: {
          divider: palette?.shape?.divider || getAlphaColor(PALETTE.black, 0.25),
          border: palette?.shape?.border || getAlphaColor(PALETTE.black, 0.15),
        },
        background: {
          default: backgroundColor,
          paper: paperBase,
        },
        inverted: {
          main: palette?.inverted?.main || backgroundColor,
          dark: palette?.inverted?.dark || getDarkenColor(backgroundColor, BACKGROUND_TONAL_OFFSET),
          light: palette?.inverted?.light || getLightenColor(backgroundColor, BACKGROUND_TONAL_OFFSET),
          contrast: palette?.inverted?.contrast || PALETTE.dark,
        },
        neutral: {
          main: palette?.neutral?.main || textColor,
          dark: palette?.neutral?.dark || getDarkenColor(textColor, BACKGROUND_TONAL_OFFSET),
          light: palette?.neutral?.light || getLightenColor(textColor, BACKGROUND_TONAL_OFFSET),
          contrast: palette?.neutral?.contrast || PALETTE.light,
        },
      };
  }
};

export const getPaperDividerColor = (color: PaperColor, palette?: DeepPartial<ThemePalette>) => {
  let divider;
  switch (color) {
    case 'primary':
      divider = palette?.primary?.light;
      break;

    case 'secondary':
      divider = palette?.secondary?.light;
      break;

    case 'tertiary':
      divider = palette?.tertiary?.light;
      break;

    case 'neutral':
      divider = palette?.neutral?.light;
      break;

    case 'inverted':
      divider = palette?.inverted?.light;
      break;

    case 'dark':
      divider = palette?.dark?.light;
      break;

    case 'light':
      divider = palette?.light?.light;
      break;

    case 'success':
      divider = palette?.success?.light;
      break;

    case 'info':
      divider = palette?.info?.light;
      break;

    case 'warning':
      divider = palette?.warning?.light;
      break;

    case 'error':
      divider = palette?.error?.light;
      break;

    case 'paper':
    default:
      divider = palette?.shape?.border;
      break;
  }

  return divider;
};
