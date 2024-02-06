import { DeepPartial, ThemeComponents } from 'types';

export const createThemeComponents = (components?: DeepPartial<ThemeComponents>) => {
  return {
    Button: {
      root: components?.Button?.root,
      label: components?.Button?.label,
      iconStart: components?.Button?.iconStart,
      iconEnd: components?.Button?.iconEnd,
      iconLoading: components?.Button?.iconLoading,
    },
    Container: {
      root: components?.Container?.root,
    },
    Stack: {
      root: components?.Stack?.root,
    },
    Typography: {
      root: components?.Typography?.root,
    },
    Link: {
      root: components?.Link?.root,
    },
    ModalDialog: {
      root: components?.ModalDialog?.root,
    },
  };
};
