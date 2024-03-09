import React, { useMemo } from 'react';
import { WithChildren } from 'types';
import { useKireiContext } from 'styles';

export interface PlaygroundPreviewProps extends WithChildren {}

const PlaygroundPreview = (props: PlaygroundPreviewProps) => {
  const { children } = props;

  const {
    theme: { spacing, paletteV2 },
  } = useKireiContext();

  const backgroundImage = useMemo(() => {
    const colorPrimary = paletteV2.utils.getDarkenColor(paletteV2.background.body.current, 0.025);
    const colorSecondary = paletteV2.utils.getDarkenColor(paletteV2.background.body.current, 0.15);

    return `
    repeating-linear-gradient(45deg, ${colorPrimary} 25%, transparent 25%, transparent 75%, ${colorPrimary} 75%, ${colorPrimary}),
    repeating-linear-gradient(45deg, ${colorPrimary} 25%, ${colorSecondary} 25%, ${colorSecondary} 75%, ${colorPrimary} 75%, ${colorPrimary})`;
  }, [paletteV2]);
  const backgroundPositionBase = '.5rem';
  const backgroundSizeBase = '1rem';

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: spacing.get(4),
        backgroundImage,
        backgroundPosition: `0 0, ${backgroundPositionBase} ${backgroundPositionBase}`,
        backgroundSize: `${backgroundSizeBase} ${backgroundSizeBase}`,
        padding: spacing.get(8, 4),
        border: `1px solid ${paletteV2.background.divider}`,
      }}
    >
      {children}
    </div>
  );
};

export default PlaygroundPreview;
