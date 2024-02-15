import React from 'react';
import { Button } from 'components';
import { BackwardIcon, ForwardIcon } from 'icons';
import { Article, Section } from '../../../../components';
import { PreviewStack, PreviewCode } from '../../components/index';

const PreviewView = () => {
  return (
    <>
      <Article
        title="Basic Button"
        subtitle="The Button component comes in three basic shapes. `text`, `outlined`, `contained`."
      >
        <Section>
          <PreviewStack>
            <Button variant="text">Text</Button>
            <Button variant="outlined">Outlined</Button>
            <Button variant="contained">Contained</Button>
          </PreviewStack>
          <PreviewCode>code</PreviewCode>
        </Section>
        <Section
          title="Text Button"
          subtitle={`Text buttons are often chosen for secondary actions, particularly within contexts such as dialog boxes or cards. `}
        >
          <PreviewStack>
            <Button variant="text">Default</Button>
            <Button variant="text" as="a" href="#">
              Link
            </Button>
            <Button variant="text" isDisabled>
              Disabled
            </Button>
          </PreviewStack>
          <PreviewCode>code</PreviewCode>
        </Section>
        <Section
          title="Outlined Button"
          subtitle={`Outlined buttons serve as medium-emphasis options, featuring actions of significance but not necessarily the primary action within an application.`}
        >
          <PreviewStack>
            <Button variant="outlined">Default</Button>
            <Button variant="outlined" as="a" href="#">
              Link
            </Button>
            <Button variant="outlined" isDisabled>
              Disabled
            </Button>
          </PreviewStack>
          <PreviewCode>code</PreviewCode>
        </Section>
        <Section
          title="Contained Button"
          subtitle={`The Contained button acts as a primary action element with greater emphasis, often serving to execute the main action within the application.`}
        >
          <PreviewStack>
            <Button variant="contained">Default</Button>
            <Button variant="contained" as="a" href="#">
              Link
            </Button>
            <Button variant="contained" isDisabled>
              Disabled
            </Button>
          </PreviewStack>
          <PreviewCode>code</PreviewCode>
        </Section>
      </Article>
      <Article title="Button color" subtitle={`For the Button, you can set basic colors defined in the theme.`}>
        <Section title="Base colors">
          <PreviewStack>
            <Button color="primary">Primary</Button>
            <Button color="secondary">Secondary</Button>
            <Button color="tertiary">Tertiary</Button>
          </PreviewStack>
          <PreviewCode>code</PreviewCode>
        </Section>
        <Section title="Emotion colors">
          <PreviewStack>
            <Button color="success">Success</Button>
            <Button color="info">Info</Button>
            <Button color="warning">Warning</Button>
            <Button color="error">Error</Button>
          </PreviewStack>
          <PreviewCode>code</PreviewCode>
        </Section>
        <Section title="Neutral (exotic) colors">
          <PreviewStack>
            <Button color="light">Light</Button>
            <Button color="inverted">Inverted</Button>
            <Button color="dark">Dark</Button>
            <Button color="neutral">Neutral</Button>
          </PreviewStack>
          <PreviewCode>code</PreviewCode>
        </Section>
      </Article>
      <Article title="Button states" subtitle={`The Button can also have several following states.`}>
        <Section title="Loading state">
          <PreviewStack>
            <Button variant="text" isLoading>
              Loading
            </Button>
            <Button variant="outlined" isLoading>
              Loading
            </Button>
            <Button variant="contained" isLoading>
              Loading
            </Button>
          </PreviewStack>
          <PreviewCode>code</PreviewCode>
        </Section>
        <Section title="Active state">
          <PreviewStack>
            <Button variant="text" isActive>
              Text
            </Button>
            <Button variant="outlined" isActive>
              Outlined
            </Button>
            <Button variant="contained" isActive>
              Contained
            </Button>
          </PreviewStack>
          <PreviewCode>code</PreviewCode>
        </Section>
      </Article>
      <Article
        title="Button sizes"
        subtitle={`The Button component offers versatility in size, providing options in three fundamental dimensions: "small," "medium," and "large."`}
      >
        <Section title="Small Button">
          <PreviewStack>
            <Button variant="text" size="small">
              Text
            </Button>
            <Button variant="outlined" size="small">
              Outlined
            </Button>
            <Button variant="contained" size="small">
              Contained
            </Button>
          </PreviewStack>
          <PreviewCode>code</PreviewCode>
        </Section>
        <Section title="Medium Button">
          <PreviewStack>
            <Button variant="text">Text</Button>
            <Button variant="outlined">Outlined</Button>
            <Button variant="contained">Contained</Button>
          </PreviewStack>
          <PreviewCode>code</PreviewCode>
        </Section>
        <Section title="Large Button">
          <PreviewStack>
            <Button variant="text" size="large">
              Text
            </Button>
            <Button variant="outlined" size="large">
              Outlined
            </Button>
            <Button variant="contained" size="large">
              Contained
            </Button>
          </PreviewStack>
          <PreviewCode>code</PreviewCode>
        </Section>
      </Article>
      <Article
        title="Button icons"
        subtitle={`You can also insert custom icons into the Button using the "startIcon" and "endIcon" props.`}
      >
        <Section title="Icon on start">
          <PreviewStack>
            <Button variant="text" startIcon={<BackwardIcon />}>
              Text
            </Button>
            <Button variant="outlined" startIcon={<BackwardIcon />}>
              Outlined
            </Button>
            <Button variant="contained" startIcon={<BackwardIcon />}>
              Contained
            </Button>
          </PreviewStack>
          <PreviewCode>code</PreviewCode>
        </Section>
        <Section title="Icon on end">
          <PreviewStack>
            <Button variant="text" endIcon={<ForwardIcon />}>
              Text
            </Button>
            <Button variant="outlined" endIcon={<ForwardIcon />}>
              Outlined
            </Button>
            <Button variant="contained" endIcon={<ForwardIcon />}>
              Contained
            </Button>
          </PreviewStack>
          <PreviewCode>code</PreviewCode>
        </Section>
      </Article>
      <Article
        title="Full width button"
        subtitle={`The Button can also be configured to span the entire width, particularly useful for mobile devices and similar contexts.`}
      >
        <Section>
          <PreviewStack direction="column">
            <Button variant="text" isFullWidth>
              Text
            </Button>
            <Button variant="outlined" isFullWidth>
              Outlined
            </Button>
            <Button variant="contained" isFullWidth>
              Contained
            </Button>
          </PreviewStack>
          <PreviewCode>code</PreviewCode>
        </Section>
      </Article>
    </>
  );
};

export default PreviewView;
