import React, { ElementType, useMemo } from 'react';
import { useKireiContext } from 'styles';
import { SpacingValues, StackProps } from 'types';
import { Stack } from 'components';

export interface PreviewStackProps extends StackProps<ElementType> {
  spacing?: SpacingValues;
}

const PreviewStack = (props: PreviewStackProps) => {
  const { children, gap = 4, alignItems = 'center', justifyContent = 'center', spacing = 5, ...rest } = props;

  const {
    theme: { palette, spacing: themeSpacing },
  } = useKireiContext();

  const backgroundImage = useMemo(() => {
    const colorPrimary = palette.background.tertiary;
    const colorSecondary = palette.background.primary;

    return `
    repeating-linear-gradient(45deg, ${colorPrimary} 25%, transparent 25%, transparent 75%, ${colorPrimary} 75%, ${colorPrimary}),
    repeating-linear-gradient(45deg, ${colorPrimary} 25%, ${colorSecondary} 25%, ${colorSecondary} 75%, ${colorPrimary} 75%, ${colorPrimary})`;
  }, [palette]);
  const backgroundPositionBase = '.5rem';
  const backgroundSizeBase = '1rem';

  return (
    <Stack
      style={{
        backgroundImage,
        backgroundPosition: `0 0, ${backgroundPositionBase} ${backgroundPositionBase}`,
        backgroundSize: `${backgroundSizeBase} ${backgroundSizeBase}`,
        padding: themeSpacing.get(spacing),
        border: `1px solid ${palette.utils.getAlphaColor(palette.shape.border, 0.5)}`,
      }}
      gap={gap}
      alignItems={alignItems}
      justifyContent={justifyContent}
      wrap="wrap"
      {...rest}
    >
      {children}
    </Stack>
  );
};

export default PreviewStack;
