import { uiComponentsListKeys } from 'types';
import { customizationRouteKeys, getStartedRouteKeys } from '../enums';

const getStartedRootPrefix = 'get-started';
const componentsRootPrefix = 'components';
const customizationRootPrefix = 'customization';

export const routes = {
  welcome: {
    root: '/',
    route: '/',
  },
  getStarted: {
    rootPrefix: `/${getStartedRootPrefix}`,
    root: `/${getStartedRootPrefix}/${getStartedRouteKeys.overview}`,
    route: `${getStartedRootPrefix}/*`,
    routes: {
      overview: `/${getStartedRootPrefix}/${getStartedRouteKeys.overview}`,
      installation: `/${getStartedRootPrefix}/${getStartedRouteKeys.installation}`,
      usage: `/${getStartedRootPrefix}/${getStartedRouteKeys.usage}`,
    },
  },
  components: {
    rootPrefix: `/${componentsRootPrefix}`,
    root: `/${componentsRootPrefix}/${uiComponentsListKeys.button}`,
    route: `${componentsRootPrefix}/*`,
    routes: {
      button: `/${componentsRootPrefix}/${uiComponentsListKeys.button}`,
      link: `/${componentsRootPrefix}/${uiComponentsListKeys.link}`,
      container: `/${componentsRootPrefix}/${uiComponentsListKeys.container}`,
      stack: `/${componentsRootPrefix}/${uiComponentsListKeys.stack}`,
      typography: `/${componentsRootPrefix}/${uiComponentsListKeys.typography}`,
      'modal-dialog': `/${componentsRootPrefix}/${uiComponentsListKeys['modal-dialog']}`,
    },
  },
  customization: {
    rootPrefix: `/${customizationRootPrefix}`,
    root: `/${customizationRootPrefix}/${customizationRouteKeys.theme}`,
    route: `${customizationRootPrefix}/*`,
    routes: {
      theme: `/${customizationRootPrefix}/${customizationRouteKeys.theme}`,
      palette: `/${customizationRootPrefix}/${customizationRouteKeys.palette}`,
      typography: `/${customizationRootPrefix}/${customizationRouteKeys.typography}`,
      breakpoints: `/${customizationRootPrefix}/${customizationRouteKeys.breakpoints}`,
      components: `/${customizationRootPrefix}/${customizationRouteKeys.components}`,
    },
  },
};
