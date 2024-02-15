import React from 'react';
import { ModalHeaderProps } from 'types';
import { useModalHeaderStyles, useModalHeaderProps } from './hooks';
import { Typography } from '../Typography';

const ModalHeader = (props: ModalHeaderProps) => {
  const {
    style,
    styles,
    className,
    divider,
    children,
    title,
    subtitle,
    titleTypographyProps,
    subtitleTypographyProps,
    ...rest
  } = props;
  const styleProps = { divider };

  const {
    composedStyles: { root, anchorLeft, anchorRight, title: titleStyles, subtitle: subtitleStyles },
  } = useModalHeaderStyles({ styles }, { ...styleProps });
  const {
    root: rootProps,
    anchorLeft: anchorLeftProps,
    anchorRight: anchorRightProps,
    title: titleProps,
    subtitle: subtitleProps,
  } = useModalHeaderProps({ style, className, ...styleProps });

  return (
    <header css={root} {...rootProps} {...rest}>
      <div css={anchorLeft} {...anchorLeftProps}>
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
      <div css={anchorRight} {...anchorRightProps}>
        close btn...
      </div>
    </header>
  );
};

export default ModalHeader;
