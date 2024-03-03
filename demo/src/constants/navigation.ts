import { routes } from '../config';

export const PRIMARY_NAVIGATION = [
  {
    key: 1,
    label: 'menuItem.getStarted',
    path: routes.getStarted.root,
    prefix: routes.getStarted.rootPrefix,
  },
  {
    key: 2,
    label: 'menuItem.components',
    path: routes.components.root,
    prefix: routes.components.rootPrefix,
  },
  {
    key: 3,
    label: 'menuItem.api',
    path: routes.api.root,
    prefix: routes.api.rootPrefix,
  },
  {
    key: 4,
    label: 'menuItem.customization',
    path: routes.customization.root,
    prefix: routes.customization.rootPrefix,
  },
];

export const DETAIL_NAVIGATION = [
  {
    key: 1,
    label: 'menuItem.components.sub.preview',
    path: routes.components.detail.preview,
  },
  {
    key: 2,
    label: 'menuItem.components.sub.playground',
    path: routes.components.detail.playground,
  },
];

export const GET_STARTED_SIDEBAR_NAVIGATION = [
  {
    key: 1,
    label: 'menuItem.getStarted.overview',
    path: routes.getStarted.routes.overview.root,
  },
  {
    key: 2,
    label: 'menuItem.getStarted.installation',
    path: routes.getStarted.routes.installation.root,
  },
  {
    key: 3,
    label: 'menuItem.getStarted.usage',
    path: routes.getStarted.routes.usage.root,
  },
];

export const CUSTOMIZATION_SIDEBAR_NAVIGATION = [
  {
    key: 1,
    label: 'menuItem.customization.theme',
    path: routes.customization.routes.theme.root,
  },
  {
    key: 2,
    label: 'menuItem.customization.palette',
    path: routes.customization.routes.palette.root,
  },
  {
    key: 3,
    label: 'menuItem.customization.breakpoints',
    path: routes.customization.routes.breakpoints.root,
  },
  {
    key: 4,
    label: 'menuItem.customization.typography',
    path: routes.customization.routes.typography.root,
  },
  {
    key: 5,
    label: 'menuItem.customization.components',
    path: routes.customization.routes.components.root,
  },
];

export const COMPONENTS_SIDEBAR_NAVIGATION = [
  {
    key: 1,
    label: 'menuItem.components.button',
    path: routes.components.routes.button.root,
  },
  {
    key: 2,
    label: 'menuItem.components.link',
    path: routes.components.routes.link.root,
  },
  {
    key: 3,
    label: 'menuItem.components.container',
    path: routes.components.routes.container.root,
  },
  {
    key: 4,
    label: 'menuItem.components.stack',
    path: routes.components.routes.stack.root,
  },
  {
    key: 5,
    label: 'menuItem.components.typography',
    path: routes.components.routes.typography.root,
  },
  {
    key: 6,
    label: 'menuItem.components.modal',
    path: routes.components.routes.modal.root,
  },
  {
    key: 7,
    label: 'menuItem.components.icons',
    path: routes.components.routes.icons.root,
  },
  {
    key: 8,
    label: 'menuItem.components.paper',
    path: routes.components.routes.paper.root,
  },
  {
    key: 9,
    label: 'menuItem.components.iconButton',
    path: routes.components.routes['icon-button'].root,
  },
  {
    key: 10,
    label: 'menuItem.components.checkbox',
    path: routes.components.routes.checkbox.root,
  },
  {
    key: 11,
    label: 'menuItem.components.radio',
    path: routes.components.routes.radio.root,
  },
  {
    key: 12,
    label: 'menuItem.components.switch',
    path: routes.components.routes.switch.root,
  },
];

export const API_SIDEBAR_NAVIGATION = [
  {
    key: 1,
    label: 'menuItem.api.button',
    path: routes.api.routes.button.root,
  },
  {
    key: 2,
    label: 'menuItem.api.checkbox',
    path: routes.api.routes.checkbox.root,
  },
  {
    key: 3,
    label: 'menuItem.api.container',
    path: routes.api.routes.container.root,
  },
  {
    key: 4,
    label: 'menuItem.api.controlLabel',
    path: routes.api.routes['control-label'].root,
  },
  {
    key: 5,
    label: 'menuItem.api.iconButton',
    path: routes.api.routes['icon-button'].root,
  },
  {
    key: 6,
    label: 'menuItem.api.icons',
    path: routes.api.routes.icons.root,
  },
  {
    key: 7,
    label: 'menuItem.api.link',
    path: routes.api.routes.link.root,
  },
  {
    key: 8,
    label: 'menuItem.api.modal',
    path: routes.api.routes.modal.root,
  },
  {
    key: 9,
    label: 'menuItem.api.modalBody',
    path: routes.api.routes['modal-body'].root,
  },
  {
    key: 10,
    label: 'menuItem.api.modalFooter',
    path: routes.api.routes['modal-footer'].root,
  },
  {
    key: 11,
    label: 'menuItem.api.modalHeader',
    path: routes.api.routes['modal-header'].root,
  },
  {
    key: 12,
    label: 'menuItem.api.paper',
    path: routes.api.routes.paper.root,
  },
  {
    key: 13,
    label: 'menuItem.api.radio',
    path: routes.api.routes.radio.root,
  },
  {
    key: 14,
    label: 'menuItem.api.stack',
    path: routes.api.routes.stack.root,
  },
  {
    key: 15,
    label: 'menuItem.api.switch',
    path: routes.api.routes.switch.root,
  },
  {
    key: 16,
    label: 'menuItem.api.typography',
    path: routes.api.routes.typography.root,
  },
];
