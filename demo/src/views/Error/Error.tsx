import React from 'react';
import { Container } from 'components';
import { CONTAINER_SECONDARY_MAX_WIDTH, HEADER_DESKTOP_HEIGHT } from '../../constants';

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
      <Container maxWidth={CONTAINER_SECONDARY_MAX_WIDTH}>
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
