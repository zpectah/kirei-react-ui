import React from 'react';
import { useUiContext } from 'styles';
import { Button } from 'components';
import { Article, Section } from '../../../../components';

const PreviewView = () => {
  const { theme } = useUiContext();

  return (
    <Article>
      <Section title="Basic Button">
        <div style={{ display: 'flex', flexDirection: 'row', gap: theme.spacing.get(2) }}>
          <Button variant="text">Text</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="contained">Contained</Button>
        </div>
      </Section>
      <Section title="Text Button">
        <div style={{ display: 'flex', flexDirection: 'row', gap: theme.spacing.get(2) }}>
          <Button variant="text">Text</Button>
          <Button variant="text" isDisabled>
            Disabled
          </Button>
          <Button variant="text" as="a" href="/">
            Link
          </Button>
        </div>
      </Section>
      <Section title="Outlined Button">
        <div style={{ display: 'flex', flexDirection: 'row', gap: theme.spacing.get(2) }}>
          <Button variant="outlined">Outlined</Button>
          <Button variant="outlined" isDisabled>
            Disabled
          </Button>
          <Button variant="outlined" as="a" href="/">
            Link
          </Button>
        </div>
      </Section>
      <Section title="Contained Button">
        <div style={{ display: 'flex', flexDirection: 'row', gap: theme.spacing.get(2) }}>
          <Button variant="contained">Contained</Button>
          <Button variant="contained" isDisabled>
            Disabled
          </Button>
          <Button variant="contained" as="a" href="/">
            Link
          </Button>
        </div>
      </Section>
      <Section title="Active Button">
        <div style={{ display: 'flex', flexDirection: 'row', gap: theme.spacing.get(2) }}>
          <Button variant="text" isActive>
            Text
          </Button>
          <Button variant="outlined" isActive>
            Outlined
          </Button>
          <Button variant="contained" isActive>
            Contained
          </Button>
        </div>
      </Section>
      <Section title="Color">
        <div style={{ display: 'flex', flexDirection: 'row', gap: theme.spacing.get(2) }}>
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          <Button variant="contained" color="tertiary">
            Tertiary
          </Button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: theme.spacing.get(2) }}>
          <Button variant="contained" color="success">
            Success
          </Button>
          <Button variant="contained" color="info">
            Info
          </Button>
          <Button variant="contained" color="warning">
            Warning
          </Button>
          <Button variant="contained" color="error">
            Error
          </Button>
        </div>
      </Section>
      <Section title="Inverted Button">
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: theme.spacing.get(2),
            padding: theme.spacing.get(2),
            backgroundColor: theme.palette.text.primary,
          }}
        >
          <Button variant="text" color="inverted">
            Text
          </Button>
          <Button variant="outlined" color="inverted">
            Outlined
          </Button>
          <Button variant="contained" color="inverted">
            Contained
          </Button>
        </div>
      </Section>
      <Section title="Loading">
        <div style={{ display: 'flex', flexDirection: 'row', gap: theme.spacing.get(2) }}>
          <Button variant="text" isLoading>
            Text
          </Button>
          <Button variant="outlined" isLoading>
            Outlined
          </Button>
          <Button variant="contained" isLoading>
            Contained
          </Button>
        </div>
      </Section>
      <Section title="Loading with custom icon">
        <div style={{ display: 'flex', flexDirection: 'row', gap: theme.spacing.get(2) }}>
          <Button variant="text" isLoading loadingIcon={<>icon</>}>
            Text
          </Button>
          <Button variant="outlined" isLoading loadingIcon={<>icon</>}>
            Outlined
          </Button>
          <Button variant="contained" isLoading loadingIcon={<>icon</>}>
            Contained
          </Button>
        </div>
      </Section>
      <Section title="startIcon">
        <div style={{ display: 'flex', flexDirection: 'row', gap: theme.spacing.get(2) }}>
          <Button variant="text" startIcon={<>icon</>}>
            Text
          </Button>
          <Button variant="outlined" startIcon={<>icon</>}>
            Outlined
          </Button>
          <Button variant="contained" startIcon={<>icon</>}>
            Contained
          </Button>
        </div>
      </Section>
      <Section title="endIcon">
        <div style={{ display: 'flex', flexDirection: 'row', gap: theme.spacing.get(2) }}>
          <Button variant="text" endIcon={<>icon</>}>
            Text
          </Button>
          <Button variant="outlined" endIcon={<>icon</>}>
            Outlined
          </Button>
          <Button variant="contained" endIcon={<>icon</>}>
            Contained
          </Button>
        </div>
      </Section>
      <Section title="Icon start and end">
        <div style={{ display: 'flex', flexDirection: 'row', gap: theme.spacing.get(2) }}>
          <Button variant="text" startIcon={<>icon</>} endIcon={<>icon</>}>
            Text
          </Button>
          <Button variant="outlined" startIcon={<>icon</>} endIcon={<>icon</>}>
            Outlined
          </Button>
          <Button variant="contained" startIcon={<>icon</>} endIcon={<>icon</>}>
            Contained
          </Button>
        </div>
      </Section>
    </Article>
  );
};

export default PreviewView;
