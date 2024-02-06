export const getElementTransitions = (props: string[] = [], duration: number, easing: string, delay: number = 0) => {
  const tmp: string[] = [];
  props.forEach((prop) => {
    tmp.push(`${prop} ${duration}ms ${easing} ${delay}ms`);
  });

  return tmp.join(', ');
};
