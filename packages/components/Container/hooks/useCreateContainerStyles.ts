import { Theme, ContainerStylesProps } from 'types';
import { getContainerMaxWidth } from 'styles';

export const useCreateContainerStyles = (theme: Theme, stylesProps: ContainerStylesProps) => {
  const { maxWidth, isFluid, xOffset } = stylesProps;
  const { breakpoints } = theme;

  const rootBase = {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    boxSizing: 'border-box',
    paddingLeft: theme.spacing.get(xOffset),
    paddingRight: theme.spacing.get(xOffset),
  };
  const rootWidth = isFluid
    ? {
        maxWidth: '100%',
      }
    : getContainerMaxWidth(maxWidth, breakpoints);

  const styles = {
    root: Object.assign({
      ...rootBase,
      ...rootWidth,
    }),
  };

  return { styles };
};
