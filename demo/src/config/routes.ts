import { kireiComponentsListKeys } from 'types';
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
    root: `/${componentsRootPrefix}/${kireiComponentsListKeys.button}`,
    route: `${componentsRootPrefix}/*`,
    routes: {
      button: `/${componentsRootPrefix}/${kireiComponentsListKeys.button}`,
      link: `/${componentsRootPrefix}/${kireiComponentsListKeys.link}`,
      container: `/${componentsRootPrefix}/${kireiComponentsListKeys.container}`,
      stack: `/${componentsRootPrefix}/${kireiComponentsListKeys.stack}`,
      typography: `/${componentsRootPrefix}/${kireiComponentsListKeys.typography}`,
      modal: `/${componentsRootPrefix}/${kireiComponentsListKeys.modal}`,
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
