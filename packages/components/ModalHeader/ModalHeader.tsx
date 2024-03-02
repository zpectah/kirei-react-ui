import React, { ElementType } from 'react';
import { ModalHeaderProps, TypographyProps } from 'types';
import { useModalHeaderStyles, useModalHeaderProps } from './hooks';
import { Typography } from '../Typography';

const ModalHeader = <T1 extends ElementType, T2 extends ElementType>(props: ModalHeaderProps<T1, T2>) => {
  const {
    actions,
    children,
    className,
    divider,
    slotProps,
    style,
    styles,
    subtitle,
    subtitleTypographyProps,
    title,
    titleTypographyProps,
    ...rest
  } = props;

  const styleProps = { divider };
  const defaultSlotProps = {
    titleContainerProps: { ...slotProps?.titleContainerProps },
    actionsContainerProps: { ...slotProps?.actionsContainerProps },
    titleProps: {
      variant: 'h5',
      as: 'h4',
      ...slotProps?.titleProps,
    } as TypographyProps<T1>,
    subtitleProps: {
      variant: 'body2',
      color: 'text-tertiary',
      ...slotProps?.subtitleProps,
    } as TypographyProps<T2>,
  };

  const {
    composedStyles: { root, titleContainer, actionsContainer, title: titleStyles, subtitle: subtitleStyles },
  } = useModalHeaderStyles({ styles }, { ...styleProps });
  const {
    root: rootProps,
    titleContainer: titleContainerProps,
    actionsContainer: actionsContainerProps,
    title: titleProps,
    subtitle: subtitleProps,
  } = useModalHeaderProps({ style, className, slotProps: defaultSlotProps, ...styleProps });

  return (
    <header css={root} {...rootProps} {...rest}>
      <div css={titleContainer} {...titleContainerProps}>
        {title && (
          <Typography css={titleStyles} {...titleProps} {...titleTypographyProps}>
            {title}
          </Typography>
        )}
        {subtitle && (
          <Typography css={subtitleStyles} {...subtitleProps} {...subtitleTypographyProps}>
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
