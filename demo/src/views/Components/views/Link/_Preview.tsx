import React from 'react';
import { Link } from 'components';
import { Article, Section } from '../../../../components';

const PreviewView = () => {
  return (
    <Article>
      <Section title="Default link">
        <Link href="/">Link somewhere</Link>
      </Section>
      <Section title="Link as button">
        <Link
          as="button"
          onClick={() => {
            console.log('link as button');
          }}
        >
          Link as button
        </Link>
      </Section>
      <Section title="Color link">
        <Link href="/" color="error">
          Link somewhere
        </Link>
      </Section>
      <Section title="Link underline">
        <Link href="/" underline="none">
          Underline none
        </Link>
        <Link href="/" underline="hover">
          Underline on hover
        </Link>
        <Link href="/" underline="always">
          Underline always (default)
        </Link>
      </Section>
    </Article>
  );
};

export default PreviewView;
