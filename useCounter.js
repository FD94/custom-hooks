import { useState } from "react";

export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const suma = (value = 1) => {
    setCounter(counter + value);
  };

  const resta = (value) => {
    setCounter(counter - value);
  };

  const reset = () => {
    setCounter(initialValue);
  };

  return {
    counter,
    suma,
    resta,
    reset,
  };
};
