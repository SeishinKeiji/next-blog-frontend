export const getFromStorage = (key: string) => {
  if (typeof window !== "undefined") {
    return window.localStorage.getItem(key);
  }
};

export const setToStorage = (key: string, value: string) => {
  if (typeof window !== "undefined") {
    return window.localStorage.setItem(key, value);
  }
};

export const escapedRegex = (text: string) => {
  return text.trim().replace(/[-\\^$*+?.()|[\]{}]/g, "\\$&");
};

export const stopNextEvent = (event: React.KeyboardEvent<HTMLInputElement>) => {
  event.stopPropagation();
  event.preventDefault();
};
