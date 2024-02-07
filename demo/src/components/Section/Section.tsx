import React, { ReactNode } from 'react';
import { WithChildren } from 'types';
import { useUiContext } from 'styles';
import { Typography } from 'components';

export interface SectionProps extends Partial<WithChildren> {
  title?: ReactNode;
  subtitle?: ReactNode;
}

const Section = ({ children, title, subtitle }: SectionProps) => {
  const { theme } = useUiContext();

  return (
    <section
      style={{ padding: theme.spacing.get(2, 0), display: 'flex', flexDirection: 'column', gap: theme.spacing.get(3) }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing.get(2) }}>
        {title && (
          <Typography variant="h5" as="h3">
            {title}
          </Typography>
        )}
        {subtitle && <Typography>{subtitle}</Typography>}
      </div>
      {children && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: theme.spacing.get(2, 0),
            gap: theme.spacing.get(2),
          }}
        >
          {children}
        </div>
      )}
    </section>
  );
};

export default Section;
