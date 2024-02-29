import React, { ElementType, useState } from 'react';
import { ButtonProps } from 'types';
import { Button, Switch } from 'components';
import { routes } from '../../../../config';
import { Article, ArticleFooter, Section } from '../../../../components';
import { PlaygroundPreview, PlaygroundControls } from '../../components/index';

const PlaygroundView = () => {
  const [buttonProps, setButtonProps] = useState<Partial<ButtonProps<ElementType>>>({
    children: 'Button text',
    variant: 'contained',
    color: 'primary',
    size: 'medium',
    isFullWidth: false,
    isDisabled: false,
    isActive: false,
    isLoading: false,
  });

  return (
    <>
      <Article title="Button Playground">
        <Section>
          <PlaygroundPreview>
            <Button {...buttonProps} />
          </PlaygroundPreview>
          <PlaygroundControls
            rows={[
              {
                key: 1,
                label: 'Children',
                value: (
                  <input
                    type="text"
                    value={buttonProps.children}
                    onChange={(event) => {
                      setButtonProps({
                        ...buttonProps,
                        children: event.target.value,
                      });
                    }}
                  />
                ),
              },
              {
                key: 2,
                label: 'Variant',
                value: (
                  <select
                    value={buttonProps.variant}
                    onChange={(event) => {
                      setButtonProps({
                        ...buttonProps,
                        variant: event.target.value,
                      });
                    }}
                  >
                    <option value="text" label="Text" />
                    <option value="outlined" label="Outlined" />
                    <option value="contained" label="Contained" />
                  </select>
                ),
              },
              {
                key: 3,
                label: 'Color',
                value: (
                  <select
                    value={buttonProps.color}
                    onChange={(event) => {
                      setButtonProps({
                        ...buttonProps,
                        color: event.target.value,
                      });
                    }}
                  >
                    <option value="primary" label="Primary" />
                    <option value="secondary" label="Secondary" />
                    <option value="tertiary" label="Tertiary" />
                    <option value="success" label="Success" />
                    <option value="info" label="Info" />
                    <option value="warning" label="Warning" />
                    <option value="error" label="Error" />
                    <option value="light" label="Light" />
                    <option value="dark" label="Dark" />
                    <option value="neutral" label="Neutral" />
                    <option value="inverted" label="Inverted" />
                  </select>
                ),
              },
              {
                key: 4,
                label: 'Size',
                value: (
                  <select
                    value={buttonProps.size}
                    onChange={(event) => {
                      setButtonProps({
                        ...buttonProps,
                        size: event.target.value,
                      });
                    }}
                  >
                    <option value="small" label="Small" />
                    <option value="medium" label="Medium" />
                    <option value="large" label="Large" />
                  </select>
                ),
              },
              {
                key: 5,
                label: 'Full width',
                value: (
                  <Switch
                    checked={buttonProps.isFullWidth}
                    onChange={(event) => {
                      setButtonProps({
                        ...buttonProps,
                        // size: event.target.value,
                        isFullWidth: event.target.checked,
                      });
                    }}
                  />
                ),
              },
              {
                key: 6,
                label: 'Disabled',
                value: (
                  <Switch
                    checked={buttonProps.isDisabled}
                    onChange={(event) => {
                      setButtonProps({
                        ...buttonProps,
                        // size: event.target.value,
                        isDisabled: event.target.checked,
                      });
                    }}
                  />
                ),
              },
              {
                key: 7,
                label: 'Loading',
                value: (
                  <Switch
                    checked={buttonProps.isLoading}
                    onChange={(event) => {
                      setButtonProps({
                        ...buttonProps,
                        // size: event.target.value,
                        isLoading: event.target.checked,
                      });
                    }}
                  />
                ),
              },
              {
                key: 8,
                label: 'Active',
                value: (
                  <Switch
                    checked={buttonProps.isActive}
                    onChange={(event) => {
                      setButtonProps({
                        ...buttonProps,
                        // size: event.target.value,
                        isActive: event.target.checked,
                      });
                    }}
                  />
                ),
              },
            ]}
          />
        </Section>
      </Article>

      <ArticleFooter
        backRoute={`${routes.components.routes.button.root}${routes.components.detail.api}`}
        backLabel={'API'}
      />
    </>
  );
};

export default PlaygroundView;
