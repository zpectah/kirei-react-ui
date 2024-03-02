import { kireiComponentsRootListKeys } from 'types';
import { customizationRouteKeys, getStartedRouteKeys } from '../enums';

const getStartedRootPrefix = 'get-started';
const componentsRootPrefix = 'components';
const customizationRootPrefix = 'customization';

export const routes = {
  root: {
    root: '/',
    route: '/',
  },
  getStarted: {
    rootPrefix: `/${getStartedRootPrefix}`,
    root: `/${getStartedRootPrefix}/${getStartedRouteKeys.overview}`,
    route: `${getStartedRootPrefix}/*`,
    routes: {
      overview: {
        root: `/${getStartedRootPrefix}/${getStartedRouteKeys.overview}`,
        route: `/overview/*`,
      },
      installation: {
        root: `/${getStartedRootPrefix}/${getStartedRouteKeys.installation}`,
        route: `/installation/*`,
      },
      usage: {
        root: `/${getStartedRootPrefix}/${getStartedRouteKeys.usage}`,
        route: `/usage/*`,
      },
    },
  },
  components: {
    rootPrefix: `/${componentsRootPrefix}`,
    root: `/${componentsRootPrefix}/${kireiComponentsRootListKeys.button}`,
    route: `${componentsRootPrefix}/*`,
    routes: {
      button: {
        root: `/${componentsRootPrefix}/${kireiComponentsRootListKeys.button}`,
        route: `/${kireiComponentsRootListKeys.button}/*`,
      },
      link: {
        root: `/${componentsRootPrefix}/${kireiComponentsRootListKeys.link}`,
        route: `/${kireiComponentsRootListKeys.link}/*`,
      },
      container: {
        root: `/${componentsRootPrefix}/${kireiComponentsRootListKeys.container}`,
        route: `/${kireiComponentsRootListKeys.container}/*`,
      },
      stack: {
        root: `/${componentsRootPrefix}/${kireiComponentsRootListKeys.stack}`,
        route: `/${kireiComponentsRootListKeys.stack}/*`,
      },
      typography: {
        root: `/${componentsRootPrefix}/${kireiComponentsRootListKeys.typography}`,
        route: `/${kireiComponentsRootListKeys.typography}/*`,
      },
      modal: {
        root: `/${componentsRootPrefix}/${kireiComponentsRootListKeys.modal}`,
        route: `/${kireiComponentsRootListKeys.modal}/*`,
      },
      icons: {
        root: `/${componentsRootPrefix}/${kireiComponentsRootListKeys.icons}`,
        route: `/${kireiComponentsRootListKeys.icons}/*`,
      },
      paper: {
        root: `/${componentsRootPrefix}/${kireiComponentsRootListKeys.paper}`,
        route: `/${kireiComponentsRootListKeys.paper}/*`,
      },
      'icon-button': {
        root: `/${componentsRootPrefix}/${kireiComponentsRootListKeys['icon-button']}`,
        route: `/${kireiComponentsRootListKeys['icon-button']}/*`,
      },
      checkbox: {
        root: `/${componentsRootPrefix}/${kireiComponentsRootListKeys.checkbox}`,
        route: `/${kireiComponentsRootListKeys.checkbox}/*`,
      },
      radio: {
        root: `/${componentsRootPrefix}/${kireiComponentsRootListKeys.radio}`,
        route: `/${kireiComponentsRootListKeys.radio}/*`,
      },
      switch: {
        root: `/${componentsRootPrefix}/${kireiComponentsRootListKeys.switch}`,
        route: `/${kireiComponentsRootListKeys.switch}/*`,
      },
    },
    detail: {
      preview: '',
      api: '/api',
      playground: '/playground',
    },
  },
  customization: {
    rootPrefix: `/${customizationRootPrefix}`,
    root: `/${customizationRootPrefix}/${customizationRouteKeys.theme}`,
    route: `${customizationRootPrefix}/*`,
    routes: {
      theme: {
        root: `/${customizationRootPrefix}/${customizationRouteKeys.theme}`,
        route: `/theme/*`,
      },
      palette: {
        root: `/${customizationRootPrefix}/${customizationRouteKeys.palette}`,
        route: `/palette/*`,
      },
      typography: {
        root: `/${customizationRootPrefix}/${customizationRouteKeys.typography}`,
        route: `/typography/*`,
      },
      breakpoints: {
        root: `/${customizationRootPrefix}/${customizationRouteKeys.breakpoints}`,
        route: `/breakpoints/*`,
      },
      components: {
        root: `/${customizationRootPrefix}/${customizationRouteKeys.components}`,
        route: `/components/*`,
      },
    },
  },
};
