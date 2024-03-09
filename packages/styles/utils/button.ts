import { ThemeSpacing, ShapeSize, shapeSizeKeys } from 'types';

export const getShadowWidth = (size: ShapeSize, spacing: ThemeSpacing) => {
  switch (size) {
    case shapeSizeKeys.small:
      return spacing.get(4);

    case shapeSizeKeys.medium:
      return spacing.get(6);

    case shapeSizeKeys.large:
      return spacing.get(8);
  }
};
