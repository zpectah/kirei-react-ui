import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Button } from 'components';
import { BackwardIcon, ForwardIcon } from 'icons';

export interface ArticleFooterProps {
  backRoute?: string;
  backLabel?: string;
  forwardRoute?: string;
  forwardLabel?: string;
}

const ArticleFooter = ({ backRoute, forwardRoute, backLabel, forwardLabel }: ArticleFooterProps) => {
  return (
    <Stack
      justifyContent={
        backRoute && !forwardRoute ? 'flex-start' : !backRoute && forwardRoute ? 'flex-end' : 'space-between'
      }
      style={{
        marginTop: '1rem',
        paddingTop: '.5rem',
        borderTop: '1px solid rgba(100,100,100,.25)',
      }}
    >
      {backRoute && (
        <Button variant="text" as={Link} to={backRoute} startIcon={<BackwardIcon />}>
          {backLabel}
        </Button>
      )}
      {forwardRoute && (
        <Button variant="text" as={Link} to={forwardRoute} endIcon={<ForwardIcon />}>
          {forwardLabel}
        </Button>
      )}
    </Stack>
  );
};

export default ArticleFooter;
