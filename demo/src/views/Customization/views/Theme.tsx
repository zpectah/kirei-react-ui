import React from 'react';
import { Stack } from 'components';
import { View, withPlainLayout } from '../../../Layout';
import { Article, Section, ColorTile } from '../../../components';
import { useKireiContext } from 'styles';

const ThemeView = () => {
  const { theme } = useKireiContext();

  return (
    <View
      title="Theme"
      subtitle="Enim ultrices, volutpat sapien semper ac nibh enim in quis suscipit, varius aliquam lorem ipsum dolor sit amet dolor ut. Pharetra quis orci, placerat potenti leo vitae eget venenatis nullam tortor, donec varius et iaculis molestie."
    >
      <Article>
        <Section>...Theme...</Section>
        <Section>
          <pre>
            <code>{JSON.stringify(theme.palette, null, 2)}</code>
          </pre>
          <br />
        </Section>
      </Article>
      <Article>
        <Section>
          <div
            style={{
              marginTop: theme.spacing.get(2),
              marginBottom: theme.spacing.get(2),
              borderTop: `1px solid ${theme.palette.background.divider}`,
            }}
          ></div>
          <Stack gap={2}>
            <ColorTile
              label="Label"
              background={theme.palette.primary.main.current}
              color={theme.palette.primary.contrast.current}
            />
            <ColorTile
              label="Label"
              background={theme.palette.secondary.main.current}
              color={theme.palette.secondary.contrast.current}
            />
            <ColorTile
              label="Label"
              background={theme.palette.tertiary.main.current}
              color={theme.palette.tertiary.contrast.current}
            />
          </Stack>
          <Stack gap={2}>
            <ColorTile
              label="Label"
              background={theme.palette.success.main.current}
              color={theme.palette.success.contrast.current}
            />
            <ColorTile
              label="Label"
              background={theme.palette.info.main.current}
              color={theme.palette.info.contrast.current}
            />
            <ColorTile
              label="Label"
              background={theme.palette.warning.main.current}
              color={theme.palette.warning.contrast.current}
            />
            <ColorTile
              label="Label"
              background={theme.palette.error.main.current}
              color={theme.palette.error.contrast.current}
            />
          </Stack>
          <Stack gap={2}>
            <ColorTile
              label="Light"
              background={theme.palette.light.main.current}
              color={theme.palette.light.contrast.current}
            />
            <ColorTile
              label="Dark"
              background={theme.palette.dark.main.current}
              color={theme.palette.dark.contrast.current}
            />
            <ColorTile
              label="Neutral"
              background={theme.palette.neutral.main.current}
              color={theme.palette.neutral.contrast.current}
            />
            <ColorTile
              label="Inverted"
              background={theme.palette.inverted.main.current}
              color={theme.palette.inverted.contrast.current}
            />
          </Stack>
        </Section>
      </Article>
    </View>
  );
};

export default withPlainLayout(ThemeView);
