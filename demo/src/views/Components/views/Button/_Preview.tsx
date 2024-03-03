import React from 'react';
import { Button } from 'components';
import { BackwardIcon, ForwardIcon } from 'icons';
import { Article, Section, PreviewCode, PreviewCombo } from '../../../../components';

const PreviewView = () => {
  return (
    <>
      <Section>
        <PreviewCode code={`import { Button } from 'components';`} />
      </Section>
      <Article
        title="Basics"
        subtitle="The Button component comes in three basic shapes. `text`, `outlined`, `contained`."
      >
        <Section>
          <PreviewCombo code="<Button>...</Button>">
            <Button variant="text">Text</Button>
            <Button variant="outlined">Outlined</Button>
            <Button variant="contained">Contained</Button>
          </PreviewCombo>
        </Section>
        <Section
          title="Text Button"
          subtitle={`Text buttons are often chosen for secondary actions, particularly within contexts such as dialog boxes or cards. `}
        >
          <PreviewCombo code='<Button variant="text">...</Button>'>
            <Button variant="text">Default</Button>
            <Button variant="text" as="a" href="#">
              Link
            </Button>
            <Button variant="text" isDisabled>
              Disabled
            </Button>
          </PreviewCombo>
        </Section>
        <Section
          title="Outlined Button"
          subtitle={`Outlined buttons serve as medium-emphasis options, featuring actions of significance but not necessarily the primary action within an application.`}
        >
          <PreviewCombo code='<Button variant="outlined">...</Button>'>
            <Button variant="outlined">Default</Button>
            <Button variant="outlined" as="a" href="#">
              Link
            </Button>
            <Button variant="outlined" isDisabled>
              Disabled
            </Button>
          </PreviewCombo>
        </Section>
        <Section
          title="Contained Button"
          subtitle={`The Contained button acts as a primary action element with greater emphasis, often serving to execute the main action within the application.`}
        >
          <PreviewCombo code='<Button variant="contained">...</Button>'>
            <Button variant="contained">Default</Button>
            <Button variant="contained" as="a" href="#">
              Link
            </Button>
            <Button variant="contained" isDisabled>
              Disabled
            </Button>
          </PreviewCombo>
        </Section>
      </Article>
      <Article title="Button color" subtitle={`For the Button, you can set basic colors defined in the theme.`}>
        <Section title="Brand colors">
          <PreviewCombo
            code='<Button color="primary">...</Button>
<Button color="secondary">...</Button>
<Button color="tertiary">...</Button>'
          >
            <Button color="primary">Primary</Button>
            <Button color="secondary">Secondary</Button>
            <Button color="tertiary">Tertiary</Button>
          </PreviewCombo>
        </Section>
        <Section title="Emotion colors">
          <PreviewCombo
            code='<Button color="success">...</Button>
<Button color="info">...</Button>
<Button color="warning">...</Button>
<Button color="error">...</Button>'
          >
            <Button color="success">Success</Button>
            <Button color="info">Info</Button>
            <Button color="warning">Warning</Button>
            <Button color="error">Error</Button>
          </PreviewCombo>
        </Section>
        <Section title="Neutral colors">
          <PreviewCombo
            code='<Button color="light">...</Button>
<Button color="inverted">...</Button>
<Button color="dark">...</Button>
<Button color="neutral">...</Button>'
          >
            <Button color="light">Light</Button>
            <Button color="inverted">Inverted</Button>
            <Button color="dark">Dark</Button>
            <Button color="neutral">Neutral</Button>
          </PreviewCombo>
        </Section>
      </Article>
      <Article title="Button states" subtitle={`The Button can also have several following states.`}>
        <Section title="Loading state">
          <PreviewCombo code="<Button isLoading>...</Button>">
            <Button variant="text" isLoading>
              Loading
            </Button>
            <Button variant="outlined" isLoading>
              Loading
            </Button>
            <Button variant="contained" isLoading>
              Loading
            </Button>
          </PreviewCombo>
        </Section>
        <Section title="Active state" subtitle={`Aktivní stav může zobrazovat vybranou položku nebo jiný účel.`}>
          <PreviewCombo code="<Button isActive>...</Button>">
            <Button variant="text" isActive>
              Text
            </Button>
            <Button variant="outlined" isActive>
              Outlined
            </Button>
            <Button variant="contained" isActive>
              Contained
            </Button>
          </PreviewCombo>
        </Section>
      </Article>
      <Article
        title="Button sizes"
        subtitle={`The Button component offers versatility in size, providing options in three fundamental dimensions: "small," "medium," and "large."`}
      >
        <Section title="Small Button">
          <PreviewCombo code='<Button size="small">...</Button>'>
            <Button variant="text" size="small">
              Text
            </Button>
            <Button variant="outlined" size="small">
              Outlined
            </Button>
            <Button variant="contained" size="small">
              Contained
            </Button>
          </PreviewCombo>
        </Section>
        <Section title="Medium Button">
          <PreviewCombo code='<Button size="medium">...</Button>'>
            <Button variant="text" size="medium">
              Text
            </Button>
            <Button variant="outlined" size="medium">
              Outlined
            </Button>
            <Button variant="contained" size="medium">
              Contained
            </Button>
          </PreviewCombo>
        </Section>
        <Section title="Large Button">
          <PreviewCombo code='<Button size="large">...</Button>'>
            <Button variant="text" size="large">
              Text
            </Button>
            <Button variant="outlined" size="large">
              Outlined
            </Button>
            <Button variant="contained" size="large">
              Contained
            </Button>
          </PreviewCombo>
        </Section>
      </Article>
      <Article
        title="Button icons"
        subtitle={`You can also insert custom icons into the Button using the "startIcon" and "endIcon" props.`}
      >
        <Section title="Icon on start">
          <PreviewCombo code="<Button startIcon={<BackwardIcon />}>...</Button>">
            <Button variant="text" startIcon={<BackwardIcon />}>
              Text
            </Button>
            <Button variant="outlined" startIcon={<BackwardIcon />}>
              Outlined
            </Button>
            <Button variant="contained" startIcon={<BackwardIcon />}>
              Contained
            </Button>
          </PreviewCombo>
        </Section>
        <Section title="Icon on end">
          <PreviewCombo code="<Button endIcon={<BackwardIcon />}>...</Button>">
            <Button variant="text" endIcon={<ForwardIcon />}>
              Text
            </Button>
            <Button variant="outlined" endIcon={<ForwardIcon />}>
              Outlined
            </Button>
            <Button variant="contained" endIcon={<ForwardIcon />}>
              Contained
            </Button>
          </PreviewCombo>
        </Section>
      </Article>
      <Article
        title="Fullwidth button"
        subtitle={`The Button can also be configured to span the entire width, particularly useful for mobile devices and similar contexts.`}
      >
        <Section>
          <PreviewCombo code="<Button isFullWidth>...</Button>">
            <Button variant="text" isFullWidth>
              Text
            </Button>
            <Button variant="outlined" isFullWidth>
              Outlined
            </Button>
            <Button variant="contained" isFullWidth>
              Contained
            </Button>
          </PreviewCombo>
        </Section>
      </Article>
    </>
  );
};

export default PreviewView;
