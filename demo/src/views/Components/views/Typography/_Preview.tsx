import React from 'react';
import { Typography } from 'components';
import { routes } from '../../../../config';
import { Article, ArticleFooter, Section } from '../../../../components';
import { PreviewCode, PreviewCombo } from '../../components/index';

const PreviewView = () => {
  return (
    <>
      <Section>
        <PreviewCode code={`import { Typography } from 'components';`} />
      </Section>
      <Article>
        <Section title="Typography default">
          <PreviewCombo code="<Typography>...</Typography>">...</PreviewCombo>
          <Typography variant="body1">Lorem ipsum dolor sit amet ...</Typography>
          <Typography variant="body2">Lorem ipsum dolor sit amet ...</Typography>
          <Typography variant="h1">Lorem ipsum dolor sit amet ...</Typography>
          <Typography variant="h2">Lorem ipsum dolor sit amet ...</Typography>
          <Typography variant="h3">Lorem ipsum dolor sit amet ...</Typography>
          <Typography variant="h4">Lorem ipsum dolor sit amet ...</Typography>
          <Typography variant="h5">Lorem ipsum dolor sit amet ...</Typography>
          <Typography variant="h6">Lorem ipsum dolor sit amet ...</Typography>
          <Typography variant="subtitle1">Lorem ipsum dolor sit amet ...</Typography>
          <Typography variant="subtitle2">Lorem ipsum dolor sit amet ...</Typography>
          <Typography variant="caption">Lorem ipsum dolor sit amet ...</Typography>
          <Typography variant="overline">Lorem ipsum dolor sit amet ...</Typography>
          <Typography variant="shapeSmall">Lorem ipsum dolor sit amet ...</Typography>
          <Typography variant="shapeMedium">Lorem ipsum dolor sit amet ...</Typography>
          <Typography variant="shapeLarge">Lorem ipsum dolor sit amet ...</Typography>
        </Section>
        <Section title="Typography colors">
          <PreviewCombo code="<Typography>...</Typography>">...</PreviewCombo>
          <Typography variant="body1" color="primary">
            Lorem ipsum dolor sit amet ...
          </Typography>
          <Typography variant="body2" color="error">
            Lorem ipsum dolor sit amet ...
          </Typography>
        </Section>
        <Section title="Typography colors">
          <PreviewCombo code="<Typography>...</Typography>">...</PreviewCombo>
          <Typography variant="body1" color="text-primary">
            Lorem ipsum dolor sit amet ...
          </Typography>
          <Typography variant="body1" color="text-secondary">
            Lorem ipsum dolor sit amet ...
          </Typography>
          <Typography variant="body1" color="text-tertiary">
            Lorem ipsum dolor sit amet ...
          </Typography>
          <Typography variant="body2" color="text-muted">
            Lorem ipsum dolor sit amet ...
          </Typography>
        </Section>
        <Section title="Typography truncate">
          <PreviewCombo code="<Typography>...</Typography>">...</PreviewCombo>
          <Typography isTruncated>
            Molestie augue, felis non sit amet dui vel dolor praesent accumsan turpis, fusce ante magna sit amet odio.
            Vel arcu integer, eget rutrum sollicitudin ullamcorper mi orci urna mauris, condimentum iaculis ollicitudin
            facilisis. Ullamcorper elit, sed a pretium accumsan vestibulum in ex sem nisl convallis, quam at sem
            tristique mauris. Condimentum turpis, nec posuere turpis nec proin ullamcorper curabitur, ligula et nisi
            maximus suspendisse.
          </Typography>
        </Section>
      </Article>

      <ArticleFooter
        forwardRoute={`${routes.components.routes.typography.root}${routes.components.detail.api}`}
        forwardLabel={'API'}
      />
    </>
  );
};

export default PreviewView;
