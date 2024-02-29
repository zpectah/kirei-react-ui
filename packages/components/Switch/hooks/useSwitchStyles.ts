import { UseSwitchStyles, UseSwitchStylesReturn, SwitchStylesProps } from 'types';
import { useKireiContext } from 'styles';
import { useCreateSwitchStyles } from './useCreateSwitchStyles';

export const useSwitchStyles = (
  { styles }: UseSwitchStyles,
  { ...SwitchStyles }: SwitchStylesProps
): UseSwitchStylesReturn => {
  const { theme } = useKireiContext();
  const {
    styles: { root, label, slider },
  } = useCreateSwitchStyles(theme, SwitchStyles);

  const composedStyles = {
    root: [root, theme.components.Switch.root, styles?.root],
    label: [label, theme.components.Switch.label, styles?.label],
    slider: [slider, theme.components.Switch.slider, styles?.slider],
  };

  return {
    composedStyles,
  };
};
