// Credit: https://github.com/sindresorhus/is-plain-obj/blob/main/index.js
export const isPlainObject = (item: unknown): item is Record<keyof never, unknown> => {
  if (typeof item !== 'object' || item === null) {
    return false;
  }

  const prototype = Object.getPrototypeOf(item);
  return (
    (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) &&
    !(Symbol.toStringTag in item) &&
    !(Symbol.iterator in item)
  );
};

export interface DeepmergeOptions {
  clone?: boolean;
}

export const deepClone = <T>(source: T): T | Record<keyof never, unknown> => {
  if (!isPlainObject(source)) {
    return source;
  }

  const output: Record<keyof never, unknown> = {};

  Object.keys(source).forEach((key) => {
    output[key] = deepClone(source[key]);
  });

  return output;
};

export const deepMerge = <T>(target: T, source: unknown, options: DeepmergeOptions = { clone: true }): T => {
  const output = options.clone ? { ...target } : target;

  if (isPlainObject(target) && isPlainObject(source)) {
    Object.keys(source).forEach((key) => {
      // Avoid prototype pollution
      if (key === '__proto__') {
        return;
      }

      if (isPlainObject(source[key]) && key in target && isPlainObject(target[key])) {
        // Since `output` is a clone of `target` and we have narrowed `target` in this block we can cast to the same type.
        (output as Record<keyof never, unknown>)[key] = deepMerge(target[key], source[key], options);
      } else if (options.clone) {
        (output as Record<keyof never, unknown>)[key] = isPlainObject(source[key])
          ? deepClone(source[key])
          : source[key];
      } else {
        (output as Record<keyof never, unknown>)[key] = source[key];
      }
    });
  }

  return output;
};
