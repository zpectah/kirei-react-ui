import { DeepPartial, PaperColor, ThemeMode, themeModeKeys, ThemePalette, ThemePaletteV2 } from 'types';
import { PALETTE, PALETTE_RATIO, SECONDARY_TEXT_ALPHA, SHAPE_BORDER_ALPHA, SHAPE_DIVIDER_ALPHA } from 'core';

export const getThemePaletteRatio = (ratio?: Partial<ThemePalette['ratio']>) => {
  return {
    activeAlpha: ratio?.activeAlpha || PALETTE_RATIO.activeAlpha,
    backgroundAlpha: ratio?.backgroundAlpha || PALETTE_RATIO.backgroundAlpha,
    backgroundTonal: ratio?.backgroundTonal || PALETTE_RATIO.backgroundTonal,
    disabledAlpha: ratio?.disabledAlpha || PALETTE_RATIO.disabledAlpha,
    hoverAlpha: ratio?.hoverAlpha || PALETTE_RATIO.hoverAlpha,
    outlineAlpha: ratio?.outlineAlpha || PALETTE_RATIO.outlineAlpha,
    shadowAlpha: ratio?.shadowAlpha || PALETTE_RATIO.shadowAlpha,
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
          secondary: palette?.text?.secondary || getAlphaColor(textColor, SECONDARY_TEXT_ALPHA),
          muted: palette?.text?.muted || PALETTE.disabled,
          disabled: palette?.text?.disabled || getAlphaColor(PALETTE.disabled, ratio.disabledAlpha),
        },
        shape: {
          divider: palette?.shape?.divider || getAlphaColor(PALETTE.white, SHAPE_DIVIDER_ALPHA),
          border: palette?.shape?.border || getAlphaColor(PALETTE.white, SHAPE_BORDER_ALPHA),
        },
        background: {
          default: backgroundColor,
          paper: paperBase,
        },
        inverted: {
          main: palette?.inverted?.main || backgroundColor,
          dark: palette?.inverted?.dark || getDarkenColor(backgroundColor, ratio.backgroundTonal),
          light: palette?.inverted?.light || getLightenColor(backgroundColor, ratio.backgroundTonal),
          contrast: palette?.inverted?.contrast || PALETTE.light,
        },
        neutral: {
          main: palette?.neutral?.main || textColor,
          dark: palette?.neutral?.dark || getDarkenColor(textColor, ratio.backgroundTonal),
          light: palette?.neutral?.light || getLightenColor(textColor, ratio.backgroundTonal),
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
          secondary: palette?.text?.secondary || getAlphaColor(textColor, SECONDARY_TEXT_ALPHA),
          muted: palette?.text?.muted || PALETTE.disabled,
          disabled: palette?.text?.disabled || getAlphaColor(PALETTE.disabled, ratio.disabledAlpha),
        },
        shape: {
          divider: palette?.shape?.divider || getAlphaColor(PALETTE.black, SHAPE_DIVIDER_ALPHA),
          border: palette?.shape?.border || getAlphaColor(PALETTE.black, SHAPE_BORDER_ALPHA),
        },
        background: {
          default: backgroundColor,
          paper: paperBase,
        },
        inverted: {
          main: palette?.inverted?.main || backgroundColor,
          dark: palette?.inverted?.dark || getDarkenColor(backgroundColor, ratio.backgroundTonal),
          light: palette?.inverted?.light || getLightenColor(backgroundColor, ratio.backgroundTonal),
          contrast: palette?.inverted?.contrast || PALETTE.dark,
        },
        neutral: {
          main: palette?.neutral?.main || textColor,
          dark: palette?.neutral?.dark || getDarkenColor(textColor, ratio.backgroundTonal),
          light: palette?.neutral?.light || getLightenColor(textColor, ratio.backgroundTonal),
          contrast: palette?.neutral?.contrast || PALETTE.light,
        },
      };
  }
};
