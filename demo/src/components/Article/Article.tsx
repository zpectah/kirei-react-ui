import React, { ReactNode } from 'react';
import { WithChildren } from 'types';
import { useKireiContext } from 'styles';
import { Typography } from 'components';

export interface ArticleProps extends WithChildren {
  title?: ReactNode;
  subtitle?: ReactNode;
}

const Article = ({ children, title, subtitle }: ArticleProps) => {
  const {
    theme: { spacing },
  } = useKireiContext();

  return (
    <article
      style={{
        width: '100%',
        padding: spacing.get(2, 0),
        display: 'flex',
        flexDirection: 'column',
        gap: spacing.get(4),
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: spacing.get(2),
        }}
      >
        {title && (
          <Typography variant="h4" as="h2">
            {title}
          </Typography>
        )}
        {subtitle && <Typography>{subtitle}</Typography>}
      </div>
      <div>{children}</div>
    </article>
  );
};

export default Article;
