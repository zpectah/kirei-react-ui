import React from 'react';
import { Container } from 'components';
import { HEADER_DESKTOP_HEIGHT } from '../../constants';

const Error = () => {
  return (
    <article
      style={{
        width: '100%',
        height: `calc(100% - ${HEADER_DESKTOP_HEIGHT})`,
        minHeight: '500px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
          }}
        >
          Error view
        </div>
      </Container>
    </article>
  );
};

export default Error;
