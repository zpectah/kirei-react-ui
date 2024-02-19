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
    Modal: {
      root: components?.Modal?.root,
      backdrop: components?.Modal?.backdrop,
      container: components?.Modal?.container,
      dialog: components?.Modal?.dialog,
    },
    ModalBody: {
      root: components?.ModalBody?.root,
    },
    ModalFooter: {
      root: components?.ModalFooter?.root,
    },
    ModalHeader: {
      root: components?.ModalHeader?.root,
    },
    Paper: {
      root: components?.Paper?.root,
    },
    Backdrop: {
      root: components?.Backdrop?.root,
    },
  };
};
