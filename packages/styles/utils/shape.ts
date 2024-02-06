import Color from 'color';

export const getFocusPropertyValue = (background: string, focusOutlineAlpha: number, focusOutlineWidth: string) => {
  return {
    outline: `${focusOutlineWidth} solid ${Color(background).alpha(focusOutlineAlpha).toString()}`,
  };
};
