import React, { ReactNode } from 'react';
import { WithChildren } from 'types';
import { useKireiContext } from 'styles';
import { Typography } from 'components';

export interface SectionProps extends Partial<WithChildren> {
  title?: ReactNode;
  subtitle?: ReactNode;
}

const Section = ({ children, title, subtitle }: SectionProps) => {
  const { theme } = useKireiContext();

  return (
    <section
      style={{ padding: theme.spacing.get(2, 0), display: 'flex', flexDirection: 'column', gap: theme.spacing.get(3) }}
    >
      {(title || subtitle) && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing.get(2) }}>
          {title && (
            <Typography variant="h5" as="h3">
              {title}
            </Typography>
          )}
          {subtitle && <Typography>{subtitle}</Typography>}
        </div>
      )}
      {children && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginBottom: theme.spacing.get(2),
            gap: theme.spacing.get(3),
          }}
        >
          {children}
        </div>
      )}
    </section>
  );
};

export default Section;
