import React from 'react';
import { useKireiContext } from 'styles';
import { View, withPlainLayout } from '../../../Layout';
import { Article, Section } from '../../../components';

const TypographyView = () => {
  const { theme } = useKireiContext();
  const { paletteV2 } = theme;

  return (
    <View
      title="Typography"
      subtitle="Condimentum at sem, fusce ante turpis venenatis donec bibendum volutpat rutrum, vitae ut libero odio leo. Ultrices auctor, libero fusce vitae cursus tellus iaculis nullam integer, nec ullamcorper fermentum ligula."
    >
      <Article>
        <Section title="default">
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '.5rem',
            }}
          >
            <p style={{ color: paletteV2.text.body.current }}>[body] Lorem ipsum dolor sit amet ...</p>
            <p style={{ color: paletteV2.text.muted.current }}>[muted] Lorem ipsum dolor sit amet ...</p>
            <p style={{ color: paletteV2.text.disabled.current }}>[disabled] Lorem ipsum dolor sit amet ...</p>
          </div>
        </Section>
      </Article>
    </View>
  );
};

export default withPlainLayout(TypographyView);
