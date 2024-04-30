// Based on Dan Abramov's react's useInterval hook: https://overreacted.io/making-setinterval-declarative-with-react-hooks/

import { useEffect, useRef } from "react";

function useInterval(callback: () => void, delay: number) {
  const savedCallback = useRef<() => void>();
  const intervalId = useRef<NodeJS.Timeout>();
  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  function tick() {
    savedCallback.current && savedCallback.current();
  }

  const start = () => {
    const id = setInterval(() => {
      tick();
    }, delay);
    intervalId.current = id;
  };
  const stop = () => {
    clearInterval(intervalId.current);
  };

  return [start, stop] as const;
}

export default useInterval;
