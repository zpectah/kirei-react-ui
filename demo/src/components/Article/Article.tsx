import React, { ReactNode } from 'react';
import { WithChildren } from 'types';
import { useUiContext } from 'styles';

export interface ArticleProps extends WithChildren {
  title?: ReactNode;
}

const Article = ({ children, title }: ArticleProps) => {
  const { theme } = useUiContext();

  return (
    <article style={{ width: '100%', padding: theme.spacing.get(2, 0) }}>
      {title && <div>{title}</div>}
      <div>{children}</div>
    </article>
  );
};

export default Article;
