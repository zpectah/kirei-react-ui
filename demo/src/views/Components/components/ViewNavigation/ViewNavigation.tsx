import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { KireiComponentsRootList } from 'types';
import { useKireiContext } from 'styles';
import { Stack, Button } from 'components';
import { routes } from '../../../../config';
import { DETAIL_NAVIGATION } from '../../../../constants';

export interface ViewNavigationProps {
  route: KireiComponentsRootList;
}

const ViewNavigation = ({ route }: ViewNavigationProps) => {
  const { t } = useTranslation('common');
  const { pathname } = useLocation();
  const {
    theme: { spacing, palette },
  } = useKireiContext();

  return (
    <Stack
      style={{
        marginBottom: spacing.get(3),
        borderBottom: `1px solid ${palette.shape.border}`,
      }}
      wrap="nowrap"
    >
      {DETAIL_NAVIGATION.map((item) => {
        const rootPath = `${routes.components.routes[route].root}${item.path}`;
        const isActive = pathname === rootPath;

        return (
          <Button
            key={item.key}
            as={Link}
            to={rootPath}
            variant="text"
            color={isActive ? 'primary' : 'neutral'}
            styles={{
              root: {
                borderRadius: 0,
                '&.sizeMedium': {
                  paddingLeft: spacing.get(4),
                  paddingRight: spacing.get(4),
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
    </Stack>
  );
};

export default ViewNavigation;
