import { placementKeys, spacingKeys } from 'types';

export const CONTROL_LABEL_ROOT = 'ControlLabel';
export const CONTROL_LABEL_LABEL = `${CONTROL_LABEL_ROOT}-label`;

export const CONTROL_LABEL_DEFAULT_VALUES = {
  labelPlacement: placementKeys.end,
  gap: spacingKeys['2'],
  label: {
    as: 'span',
  },
};
