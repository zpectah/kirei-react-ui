import clsx from 'clsx';
import { TypographyProps, UseModalHeaderProps, UseModalHeaderPropsReturn } from 'types';
import {
  MODAL_HEADER_ROOT,
  MODAL_HEADER_TITLE_CONTAINER,
  MODAL_HEADER_ACTIONS_CONTAINER,
  MODAL_HEADER_TITLE,
  MODAL_HEADER_SUBTITLE,
} from 'core';
import { ElementType } from 'react';

export const useModalHeaderProps = <T1 extends ElementType, T2 extends ElementType>(
  props: UseModalHeaderProps<T1, T2>
): UseModalHeaderPropsReturn<T1, T2> => {
  const { style, className, slotProps } = props;
  const {
    titleContainerProps: {
      style: titleContainerStyle,
      className: titleContainerClassName,
      ...restOfTitleContainerProps
    },
    actionsContainerProps: {
      style: actionsContainerStyle,
      className: actionsContainerClassName,
      ...restOfActionsContainerProps
    },
    titleProps: { style: titleStyle, className: titleClassName, ...restOfTitleProps },
    subtitleProps: { style: subtitleStyle, className: subtitleClassName, ...restOfSubtitleProps },
  } = slotProps;

  return {
    root: {
      className: clsx(MODAL_HEADER_ROOT, className),
      style: { ...style },
    },
    titleContainer: {
      className: clsx(MODAL_HEADER_TITLE_CONTAINER, titleContainerClassName),
      style: { ...titleContainerStyle },
      ...restOfTitleContainerProps,
    },
    actionsContainer: {
      className: clsx(MODAL_HEADER_ACTIONS_CONTAINER, actionsContainerClassName),
      style: { ...actionsContainerStyle },
      ...restOfActionsContainerProps,
    },
    title: {
      className: clsx(MODAL_HEADER_TITLE, titleClassName),
      style: { ...titleStyle },
      ...restOfTitleProps,
    } as TypographyProps<T1>,
    subtitle: {
      className: clsx(MODAL_HEADER_SUBTITLE, subtitleClassName),
      style: { ...subtitleStyle },
      ...restOfSubtitleProps,
    } as TypographyProps<T2>,
  };
};
