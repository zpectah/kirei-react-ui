export const getRandomString = (length: number = 7) => (Math.random() + 1).toString(36).slice(2, length + 2);
