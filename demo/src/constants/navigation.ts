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
    label: 'menuItem.components.sub.api',
    path: routes.components.detail.api,
  },
  {
    key: 3,
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
