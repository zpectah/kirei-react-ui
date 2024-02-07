import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { UiComponentsList } from 'types';
import { useUiContext } from 'styles';
import { Button } from 'components';
import { routes } from '../../../../config';
import { DETAIL_NAVIGATION } from '../../../../constants';

export interface ViewNavigationProps {
  route: UiComponentsList;
}

const ViewNavigation = ({ route }: ViewNavigationProps) => {
  const { t } = useTranslation('common');
  const { pathname } = useLocation();
  const {
    theme: { spacing, palette },
  } = useUiContext();

  return (
    <div
      style={{
        marginBottom: spacing.get(3),
        display: 'flex',
        flexDirection: 'row',
        borderBottom: `1px solid ${palette.shape.border}`,
      }}
    >
      {DETAIL_NAVIGATION.map((item) => {
        const rootPath = `${routes.components.routes[route]}${item.path}`;
        const isActive = pathname === rootPath;

        return (
          <Button
            key={item.key}
            as={Link}
            to={rootPath}
            variant="text"
            color={isActive ? 'primary' : 'neutral'}
            size="small"
            styles={{
              root: {
                borderRadius: 0,
                '&.sizeLarge': {
                  paddingLeft: spacing.get(3),
                  paddingRight: spacing.get(3),
                },
                '&.textPrimary': {
                  borderBottomColor: palette.primary.main,
                },
              },
            }}
          >
            {t(item.label)}
          </Button>
        );
      })}
    </div>
  );
};

export default ViewNavigation;
