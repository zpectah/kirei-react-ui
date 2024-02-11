import { StackStylesProps, Theme } from 'types';

export const useCreateStackStyles = (theme: Theme, stylesProps: StackStylesProps) => {
  const { alignContent, alignItems, direction, gap, isInline, justifyContent, justifyItems, wrap } = stylesProps;

  const rootBase = {
    display: isInline ? 'inline-flex' : 'flex',
    alignItems,
    justifyItems,
    alignContent,
    justifyContent,
    flexWrap: wrap,
    flexDirection: direction,
    gap: theme.spacing.get(gap),
  };

  const styles = {
    root: Object.assign({
      ...rootBase,
    }),
  };

  return {
    styles,
  };
};
