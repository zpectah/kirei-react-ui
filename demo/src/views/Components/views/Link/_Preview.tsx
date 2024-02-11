import React from 'react';
import { Link } from 'components';
import { Article, Section } from '../../../../components';
import { PreviewStack, PreviewCode } from '../../components/index';

const PreviewView = () => {
  return (
    <>
      <Article
        title="Basic Link"
        subtitle={`The Link can be used as a traditional hypertext link or as a \`button\` element.`}
      >
        <Section>
          <PreviewStack>
            <Link href="/">Link</Link>
            <Link
              as="button"
              onClick={() => {
                console.log('button callback');
              }}
            >
              Button
            </Link>
          </PreviewStack>
          <PreviewCode>code</PreviewCode>
        </Section>
      </Article>
      <Article title="Link underline" subtitle={`For the Link component, the underline behavior can be configured.`}>
        <Section>
          <PreviewStack>
            <Link href="/" underline="none">
              Underline none
            </Link>
            <Link href="/" underline="hover">
              Underline on hover
            </Link>
            <Link href="/" underline="always">
              Underline always (default)
            </Link>
          </PreviewStack>
          <PreviewCode>code</PreviewCode>
        </Section>
      </Article>
      <Article
        title="Link colors"
        subtitle={`The color of the Link component is based on the primary color in the theme, but it can also be extended to include additional colors defined in the theme.`}
      >
        <Section title="Base colors">
          <PreviewStack>
            <Link href="/" color="primary">
              Primary
            </Link>
            <Link href="/" color="secondary">
              Secondary
            </Link>
            <Link href="/" color="tertiary">
              Tertiary
            </Link>
          </PreviewStack>
          <PreviewCode>code</PreviewCode>
        </Section>
        <Section title="Emotion colors">
          <PreviewStack>
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
          </PreviewStack>
          <PreviewCode>code</PreviewCode>
        </Section>
        <Section title="Typography colors">
          <PreviewStack>
            <Link href="/" color="text-tertiary">
              Text primary
            </Link>
            <Link href="/" color="text-secondary">
              Text secondary
            </Link>
            <Link href="/" color="text-tertiary">
              Text tertiary
            </Link>
          </PreviewStack>
          <PreviewCode>code</PreviewCode>
        </Section>
        <Section title="Neutral (exotic) colors">
          <PreviewStack>
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
          </PreviewStack>
          <PreviewCode>code</PreviewCode>
        </Section>
      </Article>
      <Article
        title="Disabled link"
        subtitle={`The Link component offers the option to incorporate a disabled state, enabling the deactivation of its functionality.`}
      >
        <Section>
          <PreviewStack>
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
          </PreviewStack>
          <PreviewCode>code</PreviewCode>
        </Section>
      </Article>
    </>
  );
};

export default PreviewView;
