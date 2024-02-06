import { DeepPartial, breakpointKeys, ThemeBreakpoints, BreakpointKeys } from 'types';
import { BREAKPOINTS, BREAKPOINTS_UNIT, CONTAINER_WIDTH } from 'core';

export const createThemeBreakpoints = (breakpoints?: DeepPartial<ThemeBreakpoints>): ThemeBreakpoints => {
  const unit = breakpoints?.unit || BREAKPOINTS_UNIT;
  const values = {
    xs: breakpoints?.values?.xs || BREAKPOINTS.xs,
    sm: breakpoints?.values?.sm || BREAKPOINTS.sm,
    md: breakpoints?.values?.md || BREAKPOINTS.md,
    lg: breakpoints?.values?.lg || BREAKPOINTS.lg,
    xl: breakpoints?.values?.xl || BREAKPOINTS.xl,
    xxl: breakpoints?.values?.xxl || BREAKPOINTS.xxl,
  };
  const container = {
    xs: breakpoints?.container?.xs || CONTAINER_WIDTH.xs,
    sm: breakpoints?.container?.sm || CONTAINER_WIDTH.sm,
    md: breakpoints?.container?.md || CONTAINER_WIDTH.md,
    lg: breakpoints?.container?.lg || CONTAINER_WIDTH.lg,
    xl: breakpoints?.container?.xl || CONTAINER_WIDTH.xl,
    xxl: breakpoints?.container?.xxl || CONTAINER_WIDTH.xxl,
  };

  const up = (min: BreakpointKeys) => `@media only screen and (min-width: ${values[min]}${unit})`;
  const down = (max: BreakpointKeys) => `@media only screen and (max-width: ${values[max]}${unit})`;
  const between = (min: BreakpointKeys, max: BreakpointKeys) =>
    `@media only screen and (min-width: ${values[min]}${unit}) and (max-width: ${values[max]}${unit})`;
  const only = (key: BreakpointKeys) => {
    let min, max;
    switch (key) {
      case breakpointKeys.xs:
        min = `${values.xs}${unit}`;
        max = `${values.sm - 1}${unit}`;
        break;

      case breakpointKeys.sm:
        min = `${values.sm}${unit}`;
        max = `${values.md - 1}${unit}`;
        break;

      case breakpointKeys.md:
        min = `${values.md}${unit}`;
        max = `${values.lg - 1}${unit}`;
        break;

      case breakpointKeys.lg:
        min = `${values.lg}${unit}`;
        max = `${values.xl - 1}${unit}`;
        break;

      case breakpointKeys.xl:
        min = `${values.xl}${unit}`;
        max = `${values.xxl - 1}${unit}`;
        break;

      case breakpointKeys.xxl:
        min = `${values.xxl}${unit}`;
        max = '100%';
        break;
    }

    return `@media only screen and (min-width: ${min}) and (max-width: ${max})`;
  };

  return {
    values,
    container,
    unit,
    up,
    down,
    between,
    only,
  };
};
