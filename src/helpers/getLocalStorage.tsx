const getLocalStorage = <T,>(key: string): T => {
  return JSON.parse(window.localStorage.getItem(key) ?? "null");
};

export default getLocalStorage;
