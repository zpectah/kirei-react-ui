import React from 'react';
import { useKireiContext } from 'styles';
import { View, withPlainLayout } from '../../../Layout';
import { Article, Section } from '../../../components';

const PaletteView = () => {
  const { theme } = useKireiContext();
  const { palette } = theme;

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
                  backgroundColor: palette.primary.main.current,
                  color: palette.primary.contrast.current,
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
                  backgroundColor: palette.secondary.main.current,
                  color: palette.secondary.contrast.current,
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
                  backgroundColor: palette.tertiary.main.current,
                  color: palette.tertiary.contrast.current,
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
                  backgroundColor: palette.error.main.current,
                  color: palette.error.contrast.current,
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
                  backgroundColor: palette.warning.main.current,
                  color: palette.warning.contrast.current,
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
                  backgroundColor: palette.info.main.current,
                  color: palette.info.contrast.current,
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
                  backgroundColor: palette.success.main.current,
                  color: palette.success.contrast.current,
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
                  backgroundColor: palette.inverted.main.current,
                  color: palette.inverted.contrast.current,
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
                  backgroundColor: palette.neutral.main.current,
                  color: palette.neutral.contrast.current,
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
                  backgroundColor: palette.primary.main.dark,
                  color: palette.primary.contrast.dark,
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
                  backgroundColor: palette.secondary.main.dark,
                  color: palette.secondary.contrast.dark,
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
                  backgroundColor: palette.tertiary.main.dark,
                  color: palette.tertiary.contrast.dark,
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
                  backgroundColor: palette.error.main.dark,
                  color: palette.error.contrast.dark,
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
                  backgroundColor: palette.warning.main.dark,
                  color: palette.warning.contrast.dark,
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
                  backgroundColor: palette.info.main.dark,
                  color: palette.info.contrast.dark,
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
                  backgroundColor: palette.success.main.dark,
                  color: palette.success.contrast.dark,
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
                  backgroundColor: palette.inverted.main.dark,
                  color: palette.inverted.contrast.dark,
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
                  backgroundColor: palette.neutral.main.dark,
                  color: palette.neutral.contrast.dark,
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
                  backgroundColor: palette.primary.main.light,
                  color: palette.primary.contrast.light,
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
                  backgroundColor: palette.secondary.main.light,
                  color: palette.secondary.contrast.light,
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
                  backgroundColor: palette.tertiary.main.light,
                  color: palette.tertiary.contrast.light,
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
                  backgroundColor: palette.error.main.light,
                  color: palette.error.contrast.light,
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
                  backgroundColor: palette.warning.main.light,
                  color: palette.warning.contrast.light,
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
                  backgroundColor: palette.info.main.light,
                  color: palette.info.contrast.light,
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
                  backgroundColor: palette.success.main.light,
                  color: palette.success.contrast.light,
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
                  backgroundColor: palette.inverted.main.light,
                  color: palette.inverted.contrast.light,
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
                  backgroundColor: palette.neutral.main.light,
                  color: palette.neutral.contrast.light,
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
                borderColor: palette.background.divider,
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
