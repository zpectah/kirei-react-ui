import React from 'react';
import { Typography, Stack } from 'components';
import { useKireiContext } from 'styles';
import { Article, Section, PreviewCode, PreviewCombo } from '../../../../components';
import examples from './examples';

const PreviewView = () => {
  const {
    theme: { typography },
  } = useKireiContext();

  return (
    <>
      <Section>
        <PreviewCode code={examples.import} />
      </Section>
      <Article
        title="Basics"
        subtitle={`The component does not define the font in the first place, it needs to be imported in the application document and defined in the theme. We are using open source fonts from Google Fonts.`}
      >
        <Stack direction="column" gap={2} style={{ marginBottom: '1rem' }}>
          <PreviewCode language="html" code={examples.html} />
          <PreviewCode code={examples.theme(typography.fontFamily)} />
        </Stack>
      </Article>
      <Article
        title="Variants"
        subtitle={`Variants of the Typography component are based on the typography definition in the theme object. It links these elements across the application.`}
      >
        <Section title="Headings">
          <PreviewCombo code={examples.variant.headings} stackProps={{ direction: 'column', alignItems: 'flex-start' }}>
            <Typography variant="h1">
              h1
              <br />
              Suscipit sit amet, rhoncus vitae justo nam aliquet.
            </Typography>
            <Typography variant="h2">
              h2
              <br />
              Felis scelerisque maximus, pretium accumsan aliquet praesent.
            </Typography>
            <Typography variant="h3">
              h3
              <br />
              Dui et tempus cras dictum, porttitor pretium accumsan elit sed id tortor.
            </Typography>
            <Typography variant="h4">
              h4
              <br />
              Vivamus curabitur, fusce gravida venenatis vel arcu bibendum commodo aliquam proin.
            </Typography>
            <Typography variant="h5">
              h5
              <br />
              Egestas iaculis, in nisi fusce gravida posuere consectetur lorem ipsum interdum eget tortor.
            </Typography>
            <Typography variant="h6">
              h6
              <br />
              Ipsum in nisi, molestie suspendisse luctus nisi commodo porta molestie integer, sed id varius morbi dui
              vel.
            </Typography>
            <Typography variant="subtitle1">
              subtitle1
              <br />
              Lorem fusce gravida, non mauris et nisl vestibulum lorem ipsum dolor sit amet quam tristique consequat,
              purus tellus nec molestie.
            </Typography>
            <Typography variant="subtitle2">
              subtitle2
              <br />
              Tempus a eget, tristique maximus porta venenatis facilisis enim in ac nec, vitae tortor tellus fermentum
              lorem ipsum dolor.
            </Typography>
          </PreviewCombo>
        </Section>
        <Section title="Common">
          <PreviewCombo code={examples.variant.common} stackProps={{ direction: 'column', alignItems: 'flex-start' }}>
            <Typography variant="body1">
              body1
              <br />
              Aliquet suscipit, tortor mauris cursus sapien eget efficitur dui, eget erat diam a nunc. Auctor quis,
              turpis et nisl feugiat varius scelerisque imperdiet sollicitudin, neque aliquet congue suspendisse.
            </Typography>
            <Typography variant="body2">
              body2
              <br />
              Praesent tortor, nunc lorem ullamcorper nulla sed porttitor euismod sodales, ut consequat pulvinar
              pulvinar. Nunc dui vel, mauris consectetur id dolor vulputate purus commodo ut hendrerit, felis a eget
              rhoncus at elit
            </Typography>
            <Typography variant="caption">
              caption
              <br />
              Rutrum convallis, sed aliquam consectetur ipsum vivamus non sollicitudin, pellentesque non nulla dui
              aliquet.
            </Typography>
            <Typography variant="overline">
              overline
              <br />
              Molestie proin, arcu ipsum dui vel sit amet maximus dolor quis non congue, viverra molestie sodales
              bibendum.
            </Typography>
          </PreviewCombo>
        </Section>
        <Section
          title="Shapes"
          subtitle={`These properties are primarily used for shapes that can be rendered in several basic sizes.`}
        >
          <PreviewCombo code={examples.variant.shapes} stackProps={{ direction: 'column', alignItems: 'flex-start' }}>
            <Typography variant="shapeSmall">
              shapeSmall
              <br />
              Ligula tellus, nunc lectus nec commodo dolor sit amet ut hendrerit molestie commodo
            </Typography>
            <Typography variant="shapeMedium">
              shapeMedium
              <br />
              Vel arcu curabitur, sem odio arcu enim in molestie phasellus pellentesque non congue
            </Typography>
            <Typography variant="shapeLarge">
              shapeLarge
              <br />
              Nec fermentum, elit laoreet et iaculis non lacinia volutpat id dolor, accumsan sed id tortor
            </Typography>
          </PreviewCombo>
        </Section>
      </Article>
      <Article
        title="Colors"
        subtitle={`The Typography color is based on the colors defined in the theme and covers all usage in your application.`}
      >
        <Section title="Brand colors">
          <PreviewCombo code={examples.colors.brand} stackProps={{ direction: 'column', alignItems: 'flex-start' }}>
            <Typography color="primary">
              primary: Suscipit ante, sapien sed vitae fermentum non congue iaculis quis nisi commodo
            </Typography>
            <Typography color="secondary">
              secondary: Elementum convallis, curabitur nunc cras dictum scelerisque donec morbi erat
            </Typography>
            <Typography color="tertiary">
              tertiary: Ligula tellus, maximus volutpat nibh maximus proin curabitur erat id sem
            </Typography>
          </PreviewCombo>
        </Section>
        <Section title="Emotion colors">
          <PreviewCombo code={examples.colors.emotion} stackProps={{ direction: 'column', alignItems: 'flex-start' }}>
            <Typography color="success">
              success: Aliquet dolor quis, metus nunc ut enim et quis arcu cursus ligula donec
            </Typography>
            <Typography color="info">
              info: Sodales imperdiet, condimentum mi orci ullamcorper rhoncus at sollicitudin
            </Typography>
            <Typography color="warning">
              warning: Ultrices in nisi, augue venenatis ligula a curabitur arcu at nisi commodo
            </Typography>
            <Typography color="error">
              error: Mattis bibendum, quam integer vitae turpis quam diam a turpis, condimentum
            </Typography>
          </PreviewCombo>
        </Section>
        <Section title="Typography colors">
          <PreviewCombo
            code={examples.colors.typography}
            stackProps={{ direction: 'column', alignItems: 'flex-start' }}
          >
            <Typography color="body">
              body: Nec varius, et dui tristique et iaculis euismod quam tristique, condimentum bibendum
            </Typography>
            <Typography color="muted">
              muted: Magna ut venenatis, elit bibendum vivamus consequat fermentum ullamcorper fermentum
            </Typography>
            <Typography color="disabled">
              disabled: Dui et tempus dignissim, egestas bibendum metus integer purus venenatis ante, consequat dui
            </Typography>
          </PreviewCombo>
        </Section>
        <Section title="Neutral colors">
          <PreviewCombo code={examples.colors.neutral} stackProps={{ direction: 'column', alignItems: 'flex-start' }}>
            <Typography color="dark">
              dark: Donec facilisis, arcu suspendisse molestie congue tristique lacinia
            </Typography>
            <Typography color="neutral">
              neutral: estibulum magna et, nec fringilla consectetur urna vestibulum maximus
            </Typography>
            <Typography color="light">
              light: Sapien hendrerit, ligula sapien ipsum sagittis a consequat varius, augue dolor quis
            </Typography>
            <Typography color="inverted">
              inverted: Vestibulum iaculis, pulvinar erat id nulla quis aenean id mattis, ornare adipiscing
            </Typography>
          </PreviewCombo>
        </Section>
      </Article>
      <Article title="Formating" subtitle={`Typography can be formatted in different ways.`}>
        <Section title="Truncate" subtitle={`The text can be shortened if necessary.`}>
          <PreviewCombo
            code={examples.formatting.isTruncated}
            stackProps={{ direction: 'column', alignItems: 'flex-start' }}
          >
            <Typography isTruncated style={{ maxWidth: '100%' }}>
              Molestie augue, felis non sit amet dui vel dolor praesent accumsan turpis, fusce ante magna sit amet odio.
              Vel arcu integer, eget rutrum sollicitudin ullamcorper mi orci urna mauris, condimentum iaculis
              ollicitudin facilisis.
            </Typography>
          </PreviewCombo>
        </Section>
      </Article>
    </>
  );
};

export default PreviewView;
