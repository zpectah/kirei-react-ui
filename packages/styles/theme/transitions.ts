import { DeepPartial, ThemeTransitions } from 'types';
import { TRANSITIONS_EASING, TRANSITIONS_DURATION } from 'core';

export const createThemeTransitions = (transitions?: DeepPartial<ThemeTransitions>): ThemeTransitions => {
  return {
    easing: {
      easeInOut: transitions?.easing?.easeInOut || TRANSITIONS_EASING.easeInOut,
      easeOut: transitions?.easing?.easeOut || TRANSITIONS_EASING.easeOut,
      easeIn: transitions?.easing?.easeIn || TRANSITIONS_EASING.easeIn,
      sharp: transitions?.easing?.sharp || TRANSITIONS_EASING.sharp,
    },
    duration: {
      shortest: transitions?.duration?.shortest || TRANSITIONS_DURATION.shortest,
      short: transitions?.duration?.short || TRANSITIONS_DURATION.short,
      standard: transitions?.duration?.standard || TRANSITIONS_DURATION.standard,
      complex: transitions?.duration?.complex || TRANSITIONS_DURATION.complex,
      screen: transitions?.duration?.screen || TRANSITIONS_DURATION.screen,
    },
  };
};
