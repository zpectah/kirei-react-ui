import React from 'react';
import { useKireiContext } from 'styles';
import { View, withPlainLayout } from '../../../Layout';
import { Article, Section } from '../../../components';

const PaletteView = () => {
  const { theme } = useKireiContext();

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
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.primary.contrast,
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
                  backgroundColor: theme.palette.secondary.main,
                  color: theme.palette.secondary.contrast,
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
                  backgroundColor: theme.palette.tertiary.main,
                  color: theme.palette.tertiary.contrast,
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
                  backgroundColor: theme.palette.error.main,
                  color: theme.palette.error.contrast,
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
                  backgroundColor: theme.palette.warning.main,
                  color: theme.palette.warning.contrast,
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
                  backgroundColor: theme.palette.info.main,
                  color: theme.palette.info.contrast,
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
                  backgroundColor: theme.palette.success.main,
                  color: theme.palette.success.contrast,
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
                  backgroundColor: theme.palette.inverted.main,
                  color: theme.palette.inverted.contrast,
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
                  backgroundColor: theme.palette.neutral.main,
                  color: theme.palette.neutral.contrast,
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
                  backgroundColor: theme.palette.primary.dark,
                  color: theme.palette.primary.contrast,
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
                  backgroundColor: theme.palette.secondary.dark,
                  color: theme.palette.secondary.contrast,
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
                  backgroundColor: theme.palette.tertiary.dark,
                  color: theme.palette.tertiary.contrast,
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
                  backgroundColor: theme.palette.error.dark,
                  color: theme.palette.error.contrast,
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
                  backgroundColor: theme.palette.warning.dark,
                  color: theme.palette.warning.contrast,
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
                  backgroundColor: theme.palette.info.dark,
                  color: theme.palette.info.contrast,
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
                  backgroundColor: theme.palette.success.dark,
                  color: theme.palette.success.contrast,
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
                  backgroundColor: theme.palette.inverted.dark,
                  color: theme.palette.inverted.contrast,
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
                  backgroundColor: theme.palette.neutral.dark,
                  color: theme.palette.neutral.contrast,
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
                  backgroundColor: theme.palette.primary.light,
                  color: theme.palette.primary.contrast,
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
                  backgroundColor: theme.palette.secondary.light,
                  color: theme.palette.secondary.contrast,
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
                  backgroundColor: theme.palette.tertiary.light,
                  color: theme.palette.tertiary.contrast,
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
                  backgroundColor: theme.palette.error.light,
                  color: theme.palette.error.contrast,
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
                  backgroundColor: theme.palette.warning.light,
                  color: theme.palette.warning.contrast,
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
                  backgroundColor: theme.palette.info.light,
                  color: theme.palette.info.contrast,
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
                  backgroundColor: theme.palette.success.light,
                  color: theme.palette.success.contrast,
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
                  backgroundColor: theme.palette.inverted.light,
                  color: theme.palette.inverted.contrast,
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
                  backgroundColor: theme.palette.neutral.light,
                  color: theme.palette.neutral.contrast,
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
                borderColor: theme.palette.shape.border,
              }}
            ></div>
            <div
              style={{
                width: '4rem',
                height: '2rem',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: theme.palette.shape.divider,
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
