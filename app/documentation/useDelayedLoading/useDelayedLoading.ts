import { useEffect, useState } from "react";

/**
 * A custom React hook that adds a delay to the loading state.
 *
 * @param delayInMs - The delay in milliseconds before the loading state is set to true.
 * @returns A tuple containing the delayed loading state and a function to trigger the loading state.
 */
const useDelayedLoading = (delayInMs: number) => {
  const [delayedLoading, setDelayedLoading] = useState(false);
  const [shouldStartLoading, setShouldStartLoading] = useState(false);

  useEffect(() => {
    if (shouldStartLoading) {
      const timer = setTimeout(() => {
        setDelayedLoading(true);
      }, delayInMs);
      return () => clearTimeout(timer);
    } else {
      setDelayedLoading(false);
    }
  }, [delayInMs, shouldStartLoading]);

  return [delayedLoading, setShouldStartLoading] as const;
};

export default useDelayedLoading;
