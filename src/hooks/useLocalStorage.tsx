import { useState } from 'react';

export default function useLocalStorage<T>(key: string, initialValue: T) {
  const [data, setData] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);

      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValueData = (value: T | ((value: T) => T)) => {
    try {
      const storeValue = value instanceof Function ? value(data) : value;

      setData(storeValue);

      localStorage.setItem(key, JSON.stringify(storeValue));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  return [data, setValueData] as const;
}
