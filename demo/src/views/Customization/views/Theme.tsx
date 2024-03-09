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
            <code>{JSON.stringify(theme.paletteV2, null, 2)}</code>
          </pre>
          <br />
        </Section>
      </Article>
      <Article>
        <Section>
          <Stack gap={2}>
            <ColorTile
              label="Label"
              background={theme.paletteV2.primary.main.current}
              color={theme.paletteV2.primary.contrast.current}
            />
            <ColorTile
              label="Label"
              background={theme.paletteV2.secondary.main.current}
              color={theme.paletteV2.secondary.contrast.current}
            />
            <ColorTile
              label="Label"
              background={theme.paletteV2.tertiary.main.current}
              color={theme.paletteV2.tertiary.contrast.current}
            />
          </Stack>
          <Stack gap={2}>
            <ColorTile
              label="Label"
              background={theme.paletteV2.success.main.current}
              color={theme.paletteV2.success.contrast.current}
            />
            <ColorTile
              label="Label"
              background={theme.paletteV2.info.main.current}
              color={theme.paletteV2.info.contrast.current}
            />
            <ColorTile
              label="Label"
              background={theme.paletteV2.warning.main.current}
              color={theme.paletteV2.warning.contrast.current}
            />
            <ColorTile
              label="Label"
              background={theme.paletteV2.error.main.current}
              color={theme.paletteV2.error.contrast.current}
            />
          </Stack>
          <Stack gap={2}>
            <ColorTile
              label="Light"
              background={theme.paletteV2.light.main.current}
              color={theme.paletteV2.light.contrast.current}
            />
            <ColorTile
              label="Dark"
              background={theme.paletteV2.dark.main.current}
              color={theme.paletteV2.dark.contrast.current}
            />
            <ColorTile
              label="Neutral"
              background={theme.paletteV2.neutral.main.current}
              color={theme.paletteV2.neutral.contrast.current}
            />
            <ColorTile
              label="Inverted"
              background={theme.paletteV2.inverted.main.current}
              color={theme.paletteV2.inverted.contrast.current}
            />
          </Stack>
        </Section>
      </Article>
    </View>
  );
};

export default withPlainLayout(ThemeView);
