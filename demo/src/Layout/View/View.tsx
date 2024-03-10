import React, { ReactNode } from 'react';
import { WithChildren } from 'types';
import { useKireiContext } from 'styles';
import { Typography } from 'components';

export interface ViewProps extends WithChildren {
  title: ReactNode;
  subtitle?: ReactNode;
  footer?: ReactNode;
}

const View = ({ children, title, subtitle, footer }: ViewProps) => {
  const {
    theme: { spacing, palette },
  } = useKireiContext();

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
        {subtitle && <Typography variant="subtitle1">{subtitle}</Typography>}
      </div>
      <div>{children}</div>
      {footer && (
        <div
          style={{
            width: '100%',
            paddingTop: spacing.get(2),
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'end',
            borderTop: `1px solid ${palette.background.divider}`,
          }}
        >
          {footer}
        </div>
      )}
    </div>
  );
};

export default View;
