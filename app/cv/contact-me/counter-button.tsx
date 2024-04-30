"use-client";
import { useEffect, useRef, useState } from "react";
import { Button, ButtonProps } from "@/components/ui/button";
import useInterval from "./use-interval";

interface CounterButtonProps extends ButtonProps {
  timerInMs: number;
  shouldStartCountdown: boolean;
  onCountdownFinish: () => void;
}

const MINUTE_IN_MS = 1 * 60 * 1000;

const CounterButton = ({
  timerInMs,
  onCountdownFinish,
  ...rest
}: CounterButtonProps) => {
  const [remainingTime, setRemainingTime] = useState(timerInMs);

  const [start, stop] = useInterval(() => {
    setRemainingTime((prev) => prev - 1000);
  }, 1000);

  useEffect(() => {
    setRemainingTime(timerInMs);
    if (timerInMs > 0) {
      start();
    }
  }, [timerInMs]);

  if (remainingTime <= 0) {
    stop();
    return <Button {...rest} />;
  }

  return (
    <Button {...rest} disabled>
      {(remainingTime / 1000).toFixed(0)}
    </Button>
  );
};

export default CounterButton;
