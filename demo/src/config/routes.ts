import { kireiComponentsRootListKeys } from 'types';
import { apiRouteKeys, customizationRouteKeys, getStartedRouteKeys } from '../enums';

const getStartedRootPrefix = 'get-started';
const componentsRootPrefix = 'components';
const apiRootPrefix = 'api';
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
        route: `/${getStartedRouteKeys.overview}/*`,
      },
      installation: {
        root: `/${getStartedRootPrefix}/${getStartedRouteKeys.installation}`,
        route: `/${getStartedRouteKeys.installation}/*`,
      },
      usage: {
        root: `/${getStartedRootPrefix}/${getStartedRouteKeys.usage}`,
        route: `/${getStartedRouteKeys.usage}/*`,
      },
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
      playground: '/playground',
    },
  },
  api: {
    rootPrefix: `/${apiRootPrefix}`,
    root: `/${apiRootPrefix}/${apiRouteKeys.button}`,
    route: `${apiRootPrefix}/*`,
    routes: {
      button: {
        root: `/${apiRootPrefix}/${apiRouteKeys.button}`,
        route: `/${apiRouteKeys.button}/*`,
      },
      checkbox: {
        root: `/${apiRootPrefix}/${apiRouteKeys.checkbox}`,
        route: `/${apiRouteKeys.checkbox}/*`,
      },
      container: {
        root: `/${apiRootPrefix}/${apiRouteKeys.container}`,
        route: `/${apiRouteKeys.container}/*`,
      },
      'control-label': {
        root: `/${apiRootPrefix}/${apiRouteKeys['control-label']}`,
        route: `/${apiRouteKeys['control-label']}/*`,
      },
      'icon-button': {
        root: `/${apiRootPrefix}/${apiRouteKeys['icon-button']}`,
        route: `/${apiRouteKeys['icon-button']}/*`,
      },
      icons: {
        root: `/${apiRootPrefix}/${apiRouteKeys.icons}`,
        route: `/${apiRouteKeys.icons}/*`,
      },
      link: {
        root: `/${apiRootPrefix}/${apiRouteKeys.link}`,
        route: `/${apiRouteKeys.link}/*`,
      },
      modal: {
        root: `/${apiRootPrefix}/${apiRouteKeys.modal}`,
        route: `/${apiRouteKeys.modal}/*`,
      },
      'modal-body': {
        root: `/${apiRootPrefix}/${apiRouteKeys['modal-body']}`,
        route: `/${apiRouteKeys['modal-body']}/*`,
      },
      'modal-footer': {
        root: `/${apiRootPrefix}/${apiRouteKeys['modal-footer']}`,
        route: `/${apiRouteKeys['modal-footer']}/*`,
      },
      'modal-header': {
        root: `/${apiRootPrefix}/${apiRouteKeys['modal-header']}`,
        route: `/${apiRouteKeys['modal-header']}/*`,
      },
      paper: {
        root: `/${apiRootPrefix}/${apiRouteKeys.paper}`,
        route: `/${apiRouteKeys.paper}/*`,
      },
      radio: {
        root: `/${apiRootPrefix}/${apiRouteKeys.radio}`,
        route: `/${apiRouteKeys.radio}/*`,
      },
      stack: {
        root: `/${apiRootPrefix}/${apiRouteKeys.stack}`,
        route: `/${apiRouteKeys.stack}/*`,
      },
      switch: {
        root: `/${apiRootPrefix}/${apiRouteKeys.switch}`,
        route: `/${apiRouteKeys.switch}/*`,
      },
      typography: {
        root: `/${apiRootPrefix}/${apiRouteKeys.typography}`,
        route: `/${apiRouteKeys.typography}/*`,
      },
    },
  },
};
