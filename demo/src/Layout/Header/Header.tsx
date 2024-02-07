import React from 'react';
import { Link } from 'react-router-dom';
import { useUiContext } from 'styles';
import { Button, Typography, Container } from 'components';
import { meta } from '../../config';
import { HEADER_DESKTOP_HEIGHT } from '../../constants';
import HeaderNavigation from './HeaderNavigation';

const Header = () => {
  const { theme, toggleThemeMode } = useUiContext();

  return (
    <header
      style={{
        width: '100%',
        height: HEADER_DESKTOP_HEIGHT,
        position: 'fixed',
        top: 0,
        left: 0,
        backgroundColor: theme.palette.dark.dark,
        color: theme.palette.dark.contrast,
      }}
    >
      <Container isFluid>
        <div
          style={{
            width: '100%',
            height: HEADER_DESKTOP_HEIGHT,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <Link to="/" style={{ padding: '0 .25rem' }}>
              <Typography variant="h5" as="h1">
                {meta.name}
              </Typography>
            </Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '.5rem', alignItems: 'center' }}>
            <HeaderNavigation />
            <div>
              <Button variant="outlined" color="light" onClick={toggleThemeMode}>
                [{theme.palette.mode}]
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
