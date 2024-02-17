import React from 'react';
import { ModalHeaderProps } from 'types';
import { useModalHeaderStyles, useModalHeaderProps } from './hooks';
import { Typography } from '../Typography';

const ModalHeader = (props: ModalHeaderProps) => {
  const {
    actions,
    children,
    className,
    divider,
    style,
    styles,
    subtitle,
    subtitleTypographyProps,
    title,
    titleTypographyProps,
    ...rest
  } = props;
  const styleProps = { divider };

  const {
    composedStyles: { root, titleContainer, actionsContainer, title: titleStyles, subtitle: subtitleStyles },
  } = useModalHeaderStyles({ styles }, { ...styleProps });
  const {
    root: rootProps,
    titleContainer: titleContainerProps,
    actionsContainer: actionsContainerProps,
    title: titleProps,
    subtitle: subtitleProps,
  } = useModalHeaderProps({ style, className, ...styleProps });

  return (
    <header css={root} {...rootProps} {...rest}>
      <div css={titleContainer} {...titleContainerProps}>
        {title && (
          <Typography variant="h5" as="h4" css={titleStyles} {...titleProps} {...titleTypographyProps}>
            {title}
          </Typography>
        )}
        {subtitle && (
          <Typography
            variant="body2"
            color="text-tertiary"
            css={subtitleStyles}
            {...subtitleProps}
            {...subtitleTypographyProps}
          >
            {subtitle}
          </Typography>
        )}
        {children && children}
      </div>
      {actions && (
        <div css={actionsContainer} {...actionsContainerProps}>
          {actions}
        </div>
      )}
    </header>
  );
};

export default ModalHeader;
