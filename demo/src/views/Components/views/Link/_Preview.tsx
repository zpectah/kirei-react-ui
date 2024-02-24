import React from 'react';
import { Link } from 'components';
import { routes } from '../../../../config';
import { Article, ArticleFooter, Section } from '../../../../components';
import { PreviewCode, PreviewCombo } from '../../components/index';

const PreviewView = () => {
  return (
    <>
      <Section>
        <PreviewCode code={`import { Link } from 'components';`} />
      </Section>
      <Article
        title="Basics"
        subtitle={`The Link can be used as a traditional hypertext link or as a \`button\` element.`}
      >
        <Section>
          <PreviewCombo
            code='<Link href="/">...</Link>
<Link as="button">...</Link>'
          >
            <Link href="/">Link</Link>
            <Link
              as="button"
              onClick={() => {
                console.log('button callback');
              }}
            >
              Button
            </Link>
          </PreviewCombo>
        </Section>
      </Article>
      <Article title="Link underline" subtitle={`For the Link component, the underline behavior can be configured.`}>
        <Section>
          <PreviewCombo
            code='<Link underline="none">...</Link>
<Link underline="hover">...</Link>
<Link underline="always">...</Link>
          '
          >
            <Link href="/" underline="none">
              Underline none
            </Link>
            <Link href="/" underline="hover">
              Underline on hover
            </Link>
            <Link href="/" underline="always">
              Underline always
            </Link>
          </PreviewCombo>
        </Section>
      </Article>
      <Article
        title="Link colors"
        subtitle={`The color of the Link component is based on the primary color in the theme, but it can also be extended to include additional colors defined in the theme.`}
      >
        <Section title="Brand colors">
          <PreviewCombo
            code='<Link color="primary">...</Link>
<Link color="secondary">...</Link>
<Link color="tertiary">...</Link>'
          >
            <Link href="/" color="primary">
              Primary
            </Link>
            <Link href="/" color="secondary">
              Secondary
            </Link>
            <Link href="/" color="tertiary">
              Tertiary
            </Link>
          </PreviewCombo>
        </Section>
        <Section title="Emotion colors">
          <PreviewCombo
            code='<Link color="success">...</Link>
<Link color="info">...</Link>
<Link color="warning">...</Link>
<Link color="error">...</Link>'
          >
            <Link href="/" color="success">
              Success
            </Link>
            <Link href="/" color="info">
              Info
            </Link>
            <Link href="/" color="warning">
              Warning
            </Link>
            <Link href="/" color="error">
              Error
            </Link>
          </PreviewCombo>
        </Section>
        <Section title="Typography colors">
          <PreviewCombo
            code='<Link color="text-tertiary">...</Link>
<Link color="text-secondary">...</Link>
<Link color="text-tertiary">...</Link>'
          >
            <Link href="/" color="text-tertiary">
              Text primary
            </Link>
            <Link href="/" color="text-secondary">
              Text secondary
            </Link>
            <Link href="/" color="text-tertiary">
              Text tertiary
            </Link>
          </PreviewCombo>
        </Section>
        <Section title="Neutral colors">
          <PreviewCombo
            code='<Link color="light">...</Link>
<Link color="inverted">...</Link>
<Link color="dark">...</Link>
<Link color="neutral">...</Link>'
          >
            <Link href="/" color="light">
              Light
            </Link>
            <Link href="/" color="inverted">
              Inverted
            </Link>
            <Link href="/" color="dark">
              Dark
            </Link>
            <Link href="/" color="neutral">
              Neutral
            </Link>
          </PreviewCombo>
        </Section>
      </Article>
      <Article
        title="Disabled link"
        subtitle={`The Link component offers the option to incorporate a disabled state, enabling the deactivation of its functionality.`}
      >
        <Section>
          <PreviewCombo
            code='<Link href="/" isDisabled>...</Link>
<Link as="button" isDisabled>...</Link>'
          >
            <Link href="/" isDisabled>
              Link
            </Link>
            <Link
              as="button"
              onClick={() => {
                console.log('button callback');
              }}
              isDisabled
            >
              Button
            </Link>
          </PreviewCombo>
        </Section>
      </Article>

      <ArticleFooter
        forwardRoute={`${routes.components.routes.link.root}${routes.components.detail.api}`}
        forwardLabel={'API'}
      />
    </>
  );
};

export default PreviewView;
