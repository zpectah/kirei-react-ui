import { Theme, IconButtonStylesProps } from 'types';
import {
  getElementTransitions,
  getButtonRootColorVariant,
  getIconButtonShapeSizeVariant,
  getIconButtonShapeBorder,
} from 'styles';

export const useCreateIconButtonStyles = (theme: Theme, stylesProps: IconButtonStylesProps) => {
  const { transitions, palette, spacing, shape: themeShape } = theme;
  const { size, color, variant, shape } = stylesProps;

  const transition = getElementTransitions(
    ['background-color', 'color', 'border-color', 'box-shadow'],
    transitions.duration.shortest,
    transitions.easing.easeInOut
  );

  // root
  const rootBase = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    textDecoration: 'none',
    verticalAlign: 'middle',
    userSelect: 'none',
    cursor: 'pointer',
    boxSizing: 'border-box',
    borderStyle: 'solid',
    borderColor: 'transparent',
    outline: 0,
    lineHeight: 1,
    appearance: 'none',
    borderWidth: themeShape.borderWidth.button,
    transition: transition,
  };

  // icon
  const iconBase = {
    pointerEvents: 'none',
    fontSize: 'inherit',
    lineHeight: 'inherit',
  };

  const styles = {
    root: Object.assign({
      ...rootBase,
      ...getIconButtonShapeSizeVariant(size, spacing),
      ...getButtonRootColorVariant(variant, color, size, palette, spacing, themeShape),
      ...getIconButtonShapeBorder(shape, size, themeShape),
    }),
    icon: Object.assign({
      ...iconBase,
    }),
  };

  return { styles };
};
