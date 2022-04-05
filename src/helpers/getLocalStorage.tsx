const getLocalStorage = <T,>(key: string): T | null => {
  return JSON.parse(window.localStorage.getItem(key) ?? "null");
};

export default getLocalStorage;
