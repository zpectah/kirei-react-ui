export const flexDirectionKeys = {
  'column-reverse': 'column-reverse',
  'row-reverse': 'row-reverse',
  column: 'column',
  inherit: 'inherit',
  initial: 'initial',
  row: 'row', // Default
} as const;

export const flexAlignItemsKeys = {
  'flex-end': 'flex-end',
  'flex-start': 'flex-start',
  'self-end': 'self-end',
  'self-start': 'self-start',
  baseline: 'baseline',
  center: 'center',
  end: 'end',
  inherit: 'inherit',
  initial: 'initial',
  normal: 'normal', // Default
  start: 'start',
  stretch: 'stretch',
} as const;

export const flexJustifyItemsKeys = {
  center: 'center',
  end: 'end',
  inherit: 'inherit',
  initial: 'initial',
  left: 'left',
  legacy: 'legacy', // Default
  normal: 'normal',
  right: 'right',
  start: 'start',
  stretch: 'stretch',
} as const;

export const flexAlignContentKeys = {
  'flex-end': 'flex-end',
  'flex-start': 'flex-start',
  'space-around': 'space-around',
  'space-between': 'space-between',
  'space-evenly': 'space-evenly',
  center: 'center',
  inherit: 'inherit',
  initial: 'initial',
  stretch: 'stretch', // Default
} as const;

export const flexJustifyContentKeys = {
  'flex-end': 'flex-end',
  'flex-start': 'flex-start', // Default
  'space-around': 'space-around',
  'space-between': 'space-between',
  'space-evenly': 'space-evenly',
  center: 'center',
  inherit: 'inherit',
  initial: 'initial',
} as const;

export const flexWrapKeys = {
  'wrap-reverse': 'wrap-reverse',
  inherit: 'inherit',
  initial: 'initial',
  nowrap: 'nowrap', // Default
  wrap: 'wrap',
} as const;
