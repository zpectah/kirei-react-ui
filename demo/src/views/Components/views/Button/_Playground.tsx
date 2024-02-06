import React from 'react';
import { useUiContext } from 'styles';
import { Button } from 'components';
import { Article, Section } from '../../../../components';

const PlaygroundView = () => {
  const { theme } = useUiContext();

  return (
    <Article>
      {/* TODO */}
      <Section title="Medium">
        <Section>
          <div style={{ display: 'flex', flexDirection: 'row', gap: theme.spacing.get(2) }}>
            <Button variant="text" color="primary">
              Button
            </Button>
            <Button variant="text" color="secondary">
              Button
            </Button>
            <Button variant="text" color="tertiary">
              Button
            </Button>
            <Button variant="text" color="success">
              Button
            </Button>
            <Button variant="text" color="info">
              Button
            </Button>
            <Button variant="text" color="warning">
              Button
            </Button>
            <Button variant="text" color="error">
              Button
            </Button>
            <Button variant="text" color="light">
              Button
            </Button>
            <Button variant="text" color="dark">
              Button
            </Button>
            <Button variant="text" color="neutral">
              Neutral
            </Button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', gap: theme.spacing.get(2) }}>
            <Button variant="outlined" color="primary">
              Button
            </Button>
            <Button variant="outlined" color="secondary">
              Button
            </Button>
            <Button variant="outlined" color="tertiary">
              Button
            </Button>
            <Button variant="outlined" color="success">
              Button
            </Button>
            <Button variant="outlined" color="info">
              Button
            </Button>
            <Button variant="outlined" color="warning">
              Button
            </Button>
            <Button variant="outlined" color="error">
              Button
            </Button>
            <Button variant="outlined" color="light">
              Button
            </Button>
            <Button variant="outlined" color="dark">
              Button
            </Button>
            <Button variant="outlined" color="neutral">
              Neutral
            </Button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', gap: theme.spacing.get(2) }}>
            <Button variant="contained" color="primary">
              Button
            </Button>
            <Button variant="contained" color="secondary">
              Button
            </Button>
            <Button variant="contained" color="tertiary">
              Button
            </Button>
            <Button variant="contained" color="success">
              Button
            </Button>
            <Button variant="contained" color="info">
              Button
            </Button>
            <Button variant="contained" color="warning">
              Button
            </Button>
            <Button variant="contained" color="error">
              Button
            </Button>
            <Button variant="contained" color="light">
              Button
            </Button>
            <Button variant="contained" color="dark">
              Button
            </Button>
            <Button variant="contained" color="neutral">
              Neutral
            </Button>
          </div>
        </Section>
        <Section>
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
        <Section>
          <div style={{ display: 'flex', flexDirection: 'row', gap: theme.spacing.get(2) }}>
            <Button variant="text" color="primary" isDisabled>
              Button
            </Button>
            <Button variant="text" color="secondary" isDisabled>
              Button
            </Button>
            <Button variant="text" color="tertiary" isDisabled>
              Button
            </Button>
            <Button variant="text" color="success" isDisabled>
              Button
            </Button>
            <Button variant="text" color="info" isDisabled>
              Button
            </Button>
            <Button variant="text" color="warning" isDisabled>
              Button
            </Button>
            <Button variant="text" color="error" isDisabled>
              Button
            </Button>
            <Button variant="text" color="light" isDisabled>
              Button
            </Button>
            <Button variant="text" color="dark" isDisabled>
              Button
            </Button>
            <Button variant="text" color="neutral" isDisabled>
              Neutral
            </Button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', gap: theme.spacing.get(2) }}>
            <Button variant="outlined" color="primary" isDisabled>
              Button
            </Button>
            <Button variant="outlined" color="secondary" isDisabled>
              Button
            </Button>
            <Button variant="outlined" color="tertiary" isDisabled>
              Button
            </Button>
            <Button variant="outlined" color="success" isDisabled>
              Button
            </Button>
            <Button variant="outlined" color="info" isDisabled>
              Button
            </Button>
            <Button variant="outlined" color="warning" isDisabled>
              Button
            </Button>
            <Button variant="outlined" color="error" isDisabled>
              Button
            </Button>
            <Button variant="outlined" color="light" isDisabled>
              Button
            </Button>
            <Button variant="outlined" color="dark" isDisabled>
              Button
            </Button>
            <Button variant="outlined" color="neutral" isDisabled>
              Neutral
            </Button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', gap: theme.spacing.get(2) }}>
            <Button variant="contained" color="primary" isDisabled>
              Button
            </Button>
            <Button variant="contained" color="secondary" isDisabled>
              Button
            </Button>
            <Button variant="contained" color="tertiary" isDisabled>
              Button
            </Button>
            <Button variant="contained" color="success" isDisabled>
              Button
            </Button>
            <Button variant="contained" color="info" isDisabled>
              Button
            </Button>
            <Button variant="contained" color="warning" isDisabled>
              Button
            </Button>
            <Button variant="contained" color="error" isDisabled>
              Button
            </Button>
            <Button variant="contained" color="light" isDisabled>
              Button
            </Button>
            <Button variant="contained" color="dark" isDisabled>
              Button
            </Button>
            <Button variant="contained" color="neutral" isDisabled>
              Neutral
            </Button>
          </div>
        </Section>
        <Section>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: theme.spacing.get(2),
              padding: theme.spacing.get(2),
              backgroundColor: theme.palette.text.primary,
            }}
          >
            <Button variant="text" color="inverted" isDisabled>
              Text
            </Button>
            <Button variant="outlined" color="inverted" isDisabled>
              Outlined
            </Button>
            <Button variant="contained" color="inverted" isDisabled>
              Contained
            </Button>
          </div>
        </Section>
      </Section>
      <Section title="Large">
        <Section>
          <div style={{ display: 'flex', flexDirection: 'row', gap: theme.spacing.get(2) }}>
            <Button variant="text" color="primary" size="large">
              Button
            </Button>
            <Button variant="text" color="secondary" size="large">
              Button
            </Button>
            <Button variant="text" color="tertiary" size="large">
              Button
            </Button>
            <Button variant="text" color="success" size="large">
              Button
            </Button>
            <Button variant="text" color="info" size="large">
              Button
            </Button>
            <Button variant="text" color="warning" size="large">
              Button
            </Button>
            <Button variant="text" color="error" size="large">
              Button
            </Button>
            <Button variant="text" color="light" size="large">
              Button
            </Button>
            <Button variant="text" color="dark" size="large">
              Button
            </Button>
            <Button variant="text" color="neutral" size="large">
              Neutral
            </Button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', gap: theme.spacing.get(2) }}>
            <Button variant="outlined" color="primary" size="large">
              Button
            </Button>
            <Button variant="outlined" color="secondary" size="large">
              Button
            </Button>
            <Button variant="outlined" color="tertiary" size="large">
              Button
            </Button>
            <Button variant="outlined" color="success" size="large">
              Button
            </Button>
            <Button variant="outlined" color="info" size="large">
              Button
            </Button>
            <Button variant="outlined" color="warning" size="large">
              Button
            </Button>
            <Button variant="outlined" color="error" size="large">
              Button
            </Button>
            <Button variant="outlined" color="light" size="large">
              Button
            </Button>
            <Button variant="outlined" color="dark" size="large">
              Button
            </Button>
            <Button variant="outlined" color="neutral" size="large">
              Neutral
            </Button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', gap: theme.spacing.get(2) }}>
            <Button variant="contained" color="primary" size="large">
              Button
            </Button>
            <Button variant="contained" color="secondary" size="large">
              Button
            </Button>
            <Button variant="contained" color="tertiary" size="large">
              Button
            </Button>
            <Button variant="contained" color="success" size="large">
              Button
            </Button>
            <Button variant="contained" color="info" size="large">
              Button
            </Button>
            <Button variant="contained" color="warning" size="large">
              Button
            </Button>
            <Button variant="contained" color="error" size="large">
              Button
            </Button>
            <Button variant="contained" color="light" size="large">
              Button
            </Button>
            <Button variant="contained" color="dark" size="large">
              Button
            </Button>
            <Button variant="contained" color="neutral" size="large">
              Neutral
            </Button>
          </div>
        </Section>
        <Section>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: theme.spacing.get(2),
              padding: theme.spacing.get(2),
              backgroundColor: theme.palette.text.primary,
            }}
          >
            <Button variant="text" color="inverted" size="large">
              Text
            </Button>
            <Button variant="outlined" color="inverted" size="large">
              Outlined
            </Button>
            <Button variant="contained" color="inverted" size="large">
              Contained
            </Button>
          </div>
        </Section>
        <Section>
          <div style={{ display: 'flex', flexDirection: 'row', gap: theme.spacing.get(2) }}>
            <Button variant="text" color="primary" isDisabled size="large">
              Button
            </Button>
            <Button variant="text" color="secondary" isDisabled size="large">
              Button
            </Button>
            <Button variant="text" color="tertiary" isDisabled size="large">
              Button
            </Button>
            <Button variant="text" color="success" isDisabled size="large">
              Button
            </Button>
            <Button variant="text" color="info" isDisabled size="large">
              Button
            </Button>
            <Button variant="text" color="warning" isDisabled size="large">
              Button
            </Button>
            <Button variant="text" color="error" isDisabled size="large">
              Button
            </Button>
            <Button variant="text" color="light" isDisabled size="large">
              Button
            </Button>
            <Button variant="text" color="dark" isDisabled size="large">
              Button
            </Button>
            <Button variant="text" color="neutral" isDisabled size="large">
              Neutral
            </Button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', gap: theme.spacing.get(2) }}>
            <Button variant="outlined" color="primary" isDisabled size="large">
              Button
            </Button>
            <Button variant="outlined" color="secondary" isDisabled size="large">
              Button
            </Button>
            <Button variant="outlined" color="tertiary" isDisabled size="large">
              Button
            </Button>
            <Button variant="outlined" color="success" isDisabled size="large">
              Button
            </Button>
            <Button variant="outlined" color="info" isDisabled size="large">
              Button
            </Button>
            <Button variant="outlined" color="warning" isDisabled size="large">
              Button
            </Button>
            <Button variant="outlined" color="error" isDisabled size="large">
              Button
            </Button>
            <Button variant="outlined" color="light" isDisabled size="large">
              Button
            </Button>
            <Button variant="outlined" color="dark" isDisabled size="large">
              Button
            </Button>
            <Button variant="outlined" color="neutral" isDisabled size="large">
              Neutral
            </Button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', gap: theme.spacing.get(2) }}>
            <Button variant="contained" color="primary" isDisabled size="large">
              Button
            </Button>
            <Button variant="contained" color="secondary" isDisabled size="large">
              Button
            </Button>
            <Button variant="contained" color="tertiary" isDisabled size="large">
              Button
            </Button>
            <Button variant="contained" color="success" isDisabled size="large">
              Button
            </Button>
            <Button variant="contained" color="info" isDisabled size="large">
              Button
            </Button>
            <Button variant="contained" color="warning" isDisabled size="large">
              Button
            </Button>
            <Button variant="contained" color="error" isDisabled size="large">
              Button
            </Button>
            <Button variant="contained" color="light" isDisabled size="large">
              Button
            </Button>
            <Button variant="contained" color="dark" isDisabled size="large">
              Button
            </Button>
            <Button variant="contained" color="neutral" isDisabled size="large">
              Neutral
            </Button>
          </div>
        </Section>
        <Section>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: theme.spacing.get(2),
              padding: theme.spacing.get(2),
              backgroundColor: theme.palette.text.primary,
            }}
          >
            <Button variant="text" color="inverted" isDisabled size="large">
              Text
            </Button>
            <Button variant="outlined" color="inverted" isDisabled size="large">
              Outlined
            </Button>
            <Button variant="contained" color="inverted" isDisabled size="large">
              Contained
            </Button>
          </div>
        </Section>
      </Section>
      <Section title="Small">
        <Section>
          <div style={{ display: 'flex', flexDirection: 'row', gap: theme.spacing.get(2) }}>
            <Button variant="text" color="primary" size="small">
              Button
            </Button>
            <Button variant="text" color="secondary" size="small">
              Button
            </Button>
            <Button variant="text" color="tertiary" size="small">
              Button
            </Button>
            <Button variant="text" color="success" size="small">
              Button
            </Button>
            <Button variant="text" color="info" size="small">
              Button
            </Button>
            <Button variant="text" color="warning" size="small">
              Button
            </Button>
            <Button variant="text" color="error" size="small">
              Button
            </Button>
            <Button variant="text" color="light" size="small">
              Button
            </Button>
            <Button variant="text" color="dark" size="small">
              Button
            </Button>
            <Button variant="text" color="neutral" size="small">
              Neutral
            </Button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', gap: theme.spacing.get(2) }}>
            <Button variant="outlined" color="primary" size="small">
              Button
            </Button>
            <Button variant="outlined" color="secondary" size="small">
              Button
            </Button>
            <Button variant="outlined" color="tertiary" size="small">
              Button
            </Button>
            <Button variant="outlined" color="success" size="small">
              Button
            </Button>
            <Button variant="outlined" color="info" size="small">
              Button
            </Button>
            <Button variant="outlined" color="warning" size="small">
              Button
            </Button>
            <Button variant="outlined" color="error" size="small">
              Button
            </Button>
            <Button variant="outlined" color="light" size="small">
              Button
            </Button>
            <Button variant="outlined" color="dark" size="small">
              Button
            </Button>
            <Button variant="outlined" color="neutral" size="small">
              Neutral
            </Button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', gap: theme.spacing.get(2) }}>
            <Button variant="contained" color="primary" size="small">
              Button
            </Button>
            <Button variant="contained" color="secondary" size="small">
              Button
            </Button>
            <Button variant="contained" color="tertiary" size="small">
              Button
            </Button>
            <Button variant="contained" color="success" size="small">
              Button
            </Button>
            <Button variant="contained" color="info" size="small">
              Button
            </Button>
            <Button variant="contained" color="warning" size="small">
              Button
            </Button>
            <Button variant="contained" color="error" size="small">
              Button
            </Button>
            <Button variant="contained" color="light" size="small">
              Button
            </Button>
            <Button variant="contained" color="dark" size="small">
              Button
            </Button>
            <Button variant="contained" color="neutral" size="small">
              Neutral
            </Button>
          </div>
        </Section>
        <Section>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: theme.spacing.get(2),
              padding: theme.spacing.get(2),
              backgroundColor: theme.palette.text.primary,
            }}
          >
            <Button variant="text" color="inverted" size="small">
              Text
            </Button>
            <Button variant="outlined" color="inverted" size="small">
              Outlined
            </Button>
            <Button variant="contained" color="inverted" size="small">
              Contained
            </Button>
          </div>
        </Section>
        <Section>
          <div style={{ display: 'flex', flexDirection: 'row', gap: theme.spacing.get(2) }}>
            <Button variant="text" color="primary" isDisabled size="small">
              Button
            </Button>
            <Button variant="text" color="secondary" isDisabled size="small">
              Button
            </Button>
            <Button variant="text" color="tertiary" isDisabled size="small">
              Button
            </Button>
            <Button variant="text" color="success" isDisabled size="small">
              Button
            </Button>
            <Button variant="text" color="info" isDisabled size="small">
              Button
            </Button>
            <Button variant="text" color="warning" isDisabled size="small">
              Button
            </Button>
            <Button variant="text" color="error" isDisabled size="small">
              Button
            </Button>
            <Button variant="text" color="light" isDisabled size="small">
              Button
            </Button>
            <Button variant="text" color="dark" isDisabled size="small">
              Button
            </Button>
            <Button variant="text" color="neutral" isDisabled size="small">
              Neutral
            </Button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', gap: theme.spacing.get(2) }}>
            <Button variant="outlined" color="primary" isDisabled size="small">
              Button
            </Button>
            <Button variant="outlined" color="secondary" isDisabled size="small">
              Button
            </Button>
            <Button variant="outlined" color="tertiary" isDisabled size="small">
              Button
            </Button>
            <Button variant="outlined" color="success" isDisabled size="small">
              Button
            </Button>
            <Button variant="outlined" color="info" isDisabled size="small">
              Button
            </Button>
            <Button variant="outlined" color="warning" isDisabled size="small">
              Button
            </Button>
            <Button variant="outlined" color="error" isDisabled size="small">
              Button
            </Button>
            <Button variant="outlined" color="light" isDisabled size="small">
              Button
            </Button>
            <Button variant="outlined" color="dark" isDisabled size="small">
              Button
            </Button>
            <Button variant="outlined" color="neutral" isDisabled size="small">
              Neutral
            </Button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', gap: theme.spacing.get(2) }}>
            <Button variant="contained" color="primary" isDisabled size="small">
              Button
            </Button>
            <Button variant="contained" color="secondary" isDisabled size="small">
              Button
            </Button>
            <Button variant="contained" color="tertiary" isDisabled size="small">
              Button
            </Button>
            <Button variant="contained" color="success" isDisabled size="small">
              Button
            </Button>
            <Button variant="contained" color="info" isDisabled size="small">
              Button
            </Button>
            <Button variant="contained" color="warning" isDisabled size="small">
              Button
            </Button>
            <Button variant="contained" color="error" isDisabled size="small">
              Button
            </Button>
            <Button variant="contained" color="light" isDisabled size="small">
              Button
            </Button>
            <Button variant="contained" color="dark" isDisabled size="small">
              Button
            </Button>
            <Button variant="contained" color="neutral" isDisabled size="small">
              Neutral
            </Button>
          </div>
        </Section>
        <Section>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: theme.spacing.get(2),
              padding: theme.spacing.get(2),
              backgroundColor: theme.palette.text.primary,
            }}
          >
            <Button variant="text" color="inverted" isDisabled size="small">
              Text
            </Button>
            <Button variant="outlined" color="inverted" isDisabled size="small">
              Outlined
            </Button>
            <Button variant="contained" color="inverted" isDisabled size="small">
              Contained
            </Button>
          </div>
        </Section>
      </Section>
    </Article>
  );
};

export default PlaygroundView;
