import { useState, useEffect } from "react";

const useLocalStorage = (key, defaultValue = []) => {
  const [localStorage, setLocalStorage] = useState(() => {
    const value = JSON.parse(window.localStorage.getItem(key)) || defaultValue;
    return value;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(localStorage));
  }, [key, localStorage]);

  return [localStorage, setLocalStorage];
};

export default useLocalStorage;
