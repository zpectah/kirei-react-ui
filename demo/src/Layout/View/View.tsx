import React, { ReactNode } from 'react';
import { WithChildren } from 'types';
import { useUiContext } from 'styles';
import { Typography } from 'components';

export interface ViewProps extends WithChildren {
  title: ReactNode;
  subtitle?: ReactNode;
}

const View = ({ children, title, subtitle }: ViewProps) => {
  const {
    theme: { spacing },
  } = useUiContext();

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: spacing.get(4) }}>
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: spacing.get(3),
          paddingTop: spacing.get(5),
        }}
      >
        <Typography variant="h2" as="h2">
          {title}
        </Typography>
        {subtitle && <Typography>{subtitle}</Typography>}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default View;
