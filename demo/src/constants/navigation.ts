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
    path: '',
  },
  {
    key: 2,
    label: 'menuItem.components.sub.api',
    path: '/api',
  },
  {
    key: 3,
    label: 'menuItem.components.sub.playground',
    path: '/playground',
  },
];

export const GET_STARTED_SIDEBAR_NAVIGATION = [
  {
    key: 1,
    label: 'menuItem.getStarted.overview',
    path: routes.getStarted.routes.overview,
  },
  {
    key: 2,
    label: 'menuItem.getStarted.installation',
    path: routes.getStarted.routes.installation,
  },
  {
    key: 3,
    label: 'menuItem.getStarted.usage',
    path: routes.getStarted.routes.usage,
  },
];

export const COMPONENTS_SIDEBAR_NAVIGATION = [
  {
    key: 1,
    label: 'menuItem.components.button',
    path: routes.components.routes.button,
  },
  {
    key: 2,
    label: 'menuItem.components.link',
    path: routes.components.routes.link,
  },
  {
    key: 3,
    label: 'menuItem.components.container',
    path: routes.components.routes.container,
  },
  {
    key: 4,
    label: 'menuItem.components.stack',
    path: routes.components.routes.stack,
  },
  {
    key: 5,
    label: 'menuItem.components.typography',
    path: routes.components.routes.typography,
  },
  {
    key: 6,
    label: 'menuItem.components.modalDialog',
    path: routes.components.routes['modal-dialog'],
  },
];

export const CUSTOMIZATION_SIDEBAR_NAVIGATION = [
  {
    key: 1,
    label: 'menuItem.customization.theme',
    path: routes.customization.routes.theme,
  },
  {
    key: 2,
    label: 'menuItem.customization.palette',
    path: routes.customization.routes.palette,
  },
  {
    key: 3,
    label: 'menuItem.customization.breakpoints',
    path: routes.customization.routes.breakpoints,
  },
  {
    key: 4,
    label: 'menuItem.customization.typography',
    path: routes.customization.routes.typography,
  },
  {
    key: 5,
    label: 'menuItem.customization.components',
    path: routes.customization.routes.components,
  },
];
