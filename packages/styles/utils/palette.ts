import { DeepPartial, ThemeMode, themeModeKeys, ThemePalette } from 'types';
import { PALETTE, PALETTE_RATIO, PALETTE_RATIO_CORRECTION } from 'core';

export const getRatio = (ratio?: Partial<ThemePalette['ratio']>) => {
  return {
    activeAlpha: ratio?.activeAlpha || PALETTE_RATIO.activeAlpha,
    hoverAlpha: ratio?.hoverAlpha || PALETTE_RATIO.hoverAlpha,
    disabledAlpha: ratio?.disabledAlpha || PALETTE_RATIO.disabledAlpha,
    backgroundDarken: ratio?.backgroundDarken || PALETTE_RATIO.backgroundDarken,
    backgroundLighten: ratio?.backgroundLighten || PALETTE_RATIO.backgroundLighten,
    textSecondary: ratio?.textSecondary || PALETTE_RATIO.textSecondary,
    textTertiary: ratio?.textTertiary || PALETTE_RATIO.textTertiary,
    shapeDivider: ratio?.shapeDivider || PALETTE_RATIO.shapeDivider,
    shapeBorder: ratio?.shapeBorder || PALETTE_RATIO.shapeBorder,
    backgroundSurface: ratio?.backgroundSurface || PALETTE_RATIO.backgroundSurface,
    hoverShadowAlpha: ratio?.hoverShadowAlpha || PALETTE_RATIO.hoverShadowAlpha,
    focusOutlineAlpha: ratio?.focusOutlineAlpha || PALETTE_RATIO.focusOutlineAlpha,
    disabledInvertedAlpha: ratio?.disabledInvertedAlpha || PALETTE_RATIO.disabledInvertedAlpha,
    loadingLabelAlpha: ratio?.loadingLabelAlpha || PALETTE_RATIO.loadingLabelAlpha,
  };
};

export const getThemePaletteProps = (
  mode: ThemeMode,
  utils: ThemePalette['utils'],
  palette?: DeepPartial<ThemePalette>
) => {
  const { getLightenColor, getDarkenColor, getAlphaColor } = utils;
  const ratio = getRatio(palette?.ratio);

  let textColor, backgroundColor, greyBase;

  switch (mode) {
    case themeModeKeys.dark:
      textColor = palette?.text?.primary || PALETTE.white;
      backgroundColor = palette?.background?.primary || PALETTE.dark;
      greyBase = palette?.grey?.['0'] || PALETTE.dark;

      return {
        grey: {
          0: greyBase,
          5: getLightenColor(greyBase, 0.05),
          10: getLightenColor(greyBase, 0.1),
          20: getLightenColor(greyBase, 0.2),
          30: getLightenColor(greyBase, 0.3),
          40: getLightenColor(greyBase, 0.4),
          50: getLightenColor(greyBase, 0.5),
          60: getLightenColor(greyBase, 0.6),
          70: getLightenColor(greyBase, 0.7),
          80: getLightenColor(greyBase, 0.8),
          90: getLightenColor(greyBase, 0.9),
          100: getLightenColor(greyBase, 1.0),
        },
        text: {
          primary: textColor,
          secondary: palette?.text?.secondary || getDarkenColor(textColor, ratio.textSecondary / 100),
          tertiary: palette?.text?.tertiary || getDarkenColor(textColor, ratio.textTertiary / 100),
          muted: palette?.text?.muted || PALETTE.muted,
          disabled: palette?.text?.disabled || getAlphaColor(PALETTE.muted, ratio.disabledAlpha),
        },
        shape: {
          divider: palette?.shape?.divider || getDarkenColor(textColor, ratio.shapeDivider / 100),
          border: palette?.shape?.border || getDarkenColor(textColor, ratio.shapeBorder / 100),
        },
        background: {
          primary: backgroundColor,
          secondary:
            palette?.background?.secondary ||
            getLightenColor(backgroundColor, ratio.backgroundSurface * PALETTE_RATIO_CORRECTION.darkBgSecondary),
          tertiary:
            palette?.background?.tertiary ||
            getLightenColor(backgroundColor, ratio.backgroundSurface * PALETTE_RATIO_CORRECTION.darkBgTertiary),
        },
        inverted: {
          main: palette?.inverted?.main || backgroundColor,
          dark: palette?.inverted?.dark || getDarkenColor(backgroundColor, ratio.backgroundDarken),
          light: palette?.inverted?.light || getLightenColor(backgroundColor, ratio.backgroundLighten),
          contrast: palette?.inverted?.contrast || PALETTE.light,
        },
        neutral: {
          main: palette?.neutral?.main || textColor,
          dark: palette?.neutral?.dark || getDarkenColor(textColor, ratio.backgroundDarken),
          light: palette?.neutral?.light || getLightenColor(textColor, ratio.backgroundLighten),
          contrast: palette?.neutral?.contrast || PALETTE.dark,
        },
      };

    case themeModeKeys.light:
    default:
      textColor = palette?.text?.primary || PALETTE.black;
      backgroundColor = palette?.background?.primary || PALETTE.light;
      greyBase = palette?.grey?.['0'] || PALETTE.light;

      return {
        grey: {
          0: greyBase,
          5: getDarkenColor(greyBase, 0.05),
          10: getDarkenColor(greyBase, 0.1),
          20: getDarkenColor(greyBase, 0.2),
          30: getDarkenColor(greyBase, 0.3),
          40: getDarkenColor(greyBase, 0.4),
          50: getDarkenColor(greyBase, 0.5),
          60: getDarkenColor(greyBase, 0.6),
          70: getDarkenColor(greyBase, 0.7),
          80: getDarkenColor(greyBase, 0.8),
          90: getDarkenColor(greyBase, 0.9),
          100: getDarkenColor(greyBase, 1.0),
        },
        text: {
          primary: textColor,
          secondary: palette?.text?.secondary || getLightenColor(textColor, ratio.textSecondary),
          tertiary: palette?.text?.tertiary || getLightenColor(textColor, ratio.textTertiary),
          muted: palette?.text?.muted || PALETTE.muted,
          disabled: palette?.text?.disabled || getAlphaColor(PALETTE.muted, ratio.disabledAlpha),
        },
        shape: {
          divider: palette?.shape?.divider || getLightenColor(textColor, ratio.shapeDivider),
          border: palette?.shape?.border || getLightenColor(textColor, ratio.shapeBorder),
        },
        background: {
          primary: backgroundColor,
          secondary: palette?.background?.secondary || getDarkenColor(backgroundColor, ratio.backgroundSurface),
          tertiary:
            palette?.background?.tertiary ||
            getDarkenColor(backgroundColor, ratio.backgroundSurface * PALETTE_RATIO_CORRECTION.lightBgTertiary),
        },
        inverted: {
          main: palette?.inverted?.main || backgroundColor,
          dark: palette?.inverted?.dark || getDarkenColor(backgroundColor, ratio.backgroundDarken),
          light: palette?.inverted?.light || getLightenColor(backgroundColor, ratio.backgroundLighten),
          contrast: palette?.inverted?.contrast || PALETTE.dark,
        },
        neutral: {
          main: palette?.neutral?.main || textColor,
          dark: palette?.neutral?.dark || getDarkenColor(textColor, ratio.backgroundDarken),
          light: palette?.neutral?.light || getLightenColor(textColor, ratio.backgroundLighten),
          contrast: palette?.neutral?.contrast || PALETTE.light,
        },
      };
  }
};
