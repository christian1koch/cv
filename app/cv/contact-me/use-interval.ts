// Based on Dan Abramov's react's useInterval hook: https://overreacted.io/making-setinterval-declarative-with-react-hooks/

import { useEffect, useRef } from "react";

function useInterval(callback: () => void, delay: number) {
  const savedCallback = useRef<() => void>();
  const intervalId = useRef<NodeJS.Timeout>();
  const isRunning = useRef<boolean>(false);
  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  function tick() {
    savedCallback.current && savedCallback.current();
    isRunning.current = true;
  }

  const start = () => {
    const id = setInterval(() => {
      tick();
    }, delay);
    intervalId.current = id;
  };
  const stop = () => {
    clearInterval(intervalId.current);
    isRunning.current = false;
  };

  return [start, stop, isRunning.current] as const;
}

export default useInterval;
