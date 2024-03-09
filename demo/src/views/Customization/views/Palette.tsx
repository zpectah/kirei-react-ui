import React from 'react';
import { useKireiContext } from 'styles';
import { View, withPlainLayout } from '../../../Layout';
import { Article, Section } from '../../../components';

const PaletteView = () => {
  const { theme } = useKireiContext();
  const { paletteV2 } = theme;

  return (
    <View
      title="Palette"
      subtitle="Tellus ut hendrerit, fusce ante sapien sapien tincidunt aliquet sollicitudin proin, nisi commodo convallis sagittis lectus quis. Augue augue, nulla sollicitudin ac hendrerit dui aliquet dui et, vel arcu faucibus non consectetur. "
    >
      <Article>
        <Section title="Default palette">
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '.5rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '.5rem',
              }}
            >
              <div
                style={{
                  width: '75px',
                  height: '75px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: paletteV2.primary.main.current,
                  color: paletteV2.primary.contrast.current,
                }}
              >
                primary
              </div>
              <div
                style={{
                  width: '75px',
                  height: '75px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: paletteV2.secondary.main.current,
                  color: paletteV2.secondary.contrast.current,
                }}
              >
                secondary
              </div>
              <div
                style={{
                  width: '75px',
                  height: '75px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: paletteV2.tertiary.main.current,
                  color: paletteV2.tertiary.contrast.current,
                }}
              >
                tertiary
              </div>
              <div
                style={{
                  width: '75px',
                  height: '75px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: paletteV2.error.main.current,
                  color: paletteV2.error.contrast.current,
                }}
              >
                error
              </div>
              <div
                style={{
                  width: '75px',
                  height: '75px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: paletteV2.warning.main.current,
                  color: paletteV2.warning.contrast.current,
                }}
              >
                warning
              </div>
              <div
                style={{
                  width: '75px',
                  height: '75px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: paletteV2.info.main.current,
                  color: paletteV2.info.contrast.current,
                }}
              >
                info
              </div>
              <div
                style={{
                  width: '75px',
                  height: '75px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: paletteV2.success.main.current,
                  color: paletteV2.success.contrast.current,
                }}
              >
                success
              </div>
              <div
                style={{
                  width: '75px',
                  height: '75px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: paletteV2.inverted.main.current,
                  color: paletteV2.inverted.contrast.current,
                }}
              >
                inverted
              </div>
              <div
                style={{
                  width: '75px',
                  height: '75px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: paletteV2.neutral.main.current,
                  color: paletteV2.neutral.contrast.current,
                }}
              >
                neutral
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '.5rem',
              }}
            >
              <div
                style={{
                  width: '75px',
                  height: '75px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: paletteV2.primary.main.dark,
                  color: paletteV2.primary.contrast.dark,
                }}
              >
                primary
              </div>
              <div
                style={{
                  width: '75px',
                  height: '75px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: paletteV2.secondary.main.dark,
                  color: paletteV2.secondary.contrast.dark,
                }}
              >
                secondary
              </div>
              <div
                style={{
                  width: '75px',
                  height: '75px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: paletteV2.tertiary.main.dark,
                  color: paletteV2.tertiary.contrast.dark,
                }}
              >
                tertiary
              </div>
              <div
                style={{
                  width: '75px',
                  height: '75px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: paletteV2.error.main.dark,
                  color: paletteV2.error.contrast.dark,
                }}
              >
                error
              </div>
              <div
                style={{
                  width: '75px',
                  height: '75px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: paletteV2.warning.main.dark,
                  color: paletteV2.warning.contrast.dark,
                }}
              >
                warning
              </div>
              <div
                style={{
                  width: '75px',
                  height: '75px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: paletteV2.info.main.dark,
                  color: paletteV2.info.contrast.dark,
                }}
              >
                info
              </div>
              <div
                style={{
                  width: '75px',
                  height: '75px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: paletteV2.success.main.dark,
                  color: paletteV2.success.contrast.dark,
                }}
              >
                success
              </div>
              <div
                style={{
                  width: '75px',
                  height: '75px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: paletteV2.inverted.main.dark,
                  color: paletteV2.inverted.contrast.dark,
                }}
              >
                inverted
              </div>
              <div
                style={{
                  width: '75px',
                  height: '75px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: paletteV2.neutral.main.dark,
                  color: paletteV2.neutral.contrast.dark,
                }}
              >
                neutral
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '.5rem',
              }}
            >
              <div
                style={{
                  width: '75px',
                  height: '75px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: paletteV2.primary.main.light,
                  color: paletteV2.primary.contrast.light,
                }}
              >
                primary
              </div>
              <div
                style={{
                  width: '75px',
                  height: '75px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: paletteV2.secondary.main.light,
                  color: paletteV2.secondary.contrast.light,
                }}
              >
                secondary
              </div>
              <div
                style={{
                  width: '75px',
                  height: '75px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: paletteV2.tertiary.main.light,
                  color: paletteV2.tertiary.contrast.light,
                }}
              >
                tertiary
              </div>
              <div
                style={{
                  width: '75px',
                  height: '75px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: paletteV2.error.main.light,
                  color: paletteV2.error.contrast.light,
                }}
              >
                error
              </div>
              <div
                style={{
                  width: '75px',
                  height: '75px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: paletteV2.warning.main.light,
                  color: paletteV2.warning.contrast.light,
                }}
              >
                warning
              </div>
              <div
                style={{
                  width: '75px',
                  height: '75px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: paletteV2.info.main.light,
                  color: paletteV2.info.contrast.light,
                }}
              >
                info
              </div>
              <div
                style={{
                  width: '75px',
                  height: '75px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: paletteV2.success.main.light,
                  color: paletteV2.success.contrast.light,
                }}
              >
                success
              </div>
              <div
                style={{
                  width: '75px',
                  height: '75px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: paletteV2.inverted.main.light,
                  color: paletteV2.inverted.contrast.light,
                }}
              >
                inverted
              </div>
              <div
                style={{
                  width: '75px',
                  height: '75px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: paletteV2.neutral.main.light,
                  color: paletteV2.neutral.contrast.light,
                }}
              >
                neutral
              </div>
            </div>
          </div>
        </Section>

        <Section title="Border">
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '.5rem',
            }}
          >
            <div
              style={{
                width: '4rem',
                height: '2rem',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: paletteV2.background.divider,
              }}
            ></div>
          </div>
        </Section>

        <Section title="Background">
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '.5rem',
            }}
          >
            ...todo
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '.5rem',
            }}
          >
            ...todo
          </div>
        </Section>

        <Section title="Common">
          <div>...todo</div>
        </Section>
      </Article>
    </View>
  );
};

export default withPlainLayout(PaletteView);
