"use-client";
import { useEffect, useState } from "react";
import { Button, ButtonProps } from "@/components/ui/button";
import useInterval from "./use-interval";
import { SECOND_IN_MS } from "./contact-form-helpers";

interface CounterButtonProps extends ButtonProps {
  timerInMs: number;
  onCountdownFinish: () => void;
}

const CounterButton = ({
  timerInMs,
  onCountdownFinish,
  ...rest
}: CounterButtonProps) => {
  const [remainingTime, setRemainingTime] = useState(timerInMs);
  const [start, stop, isRunning] = useInterval(() => {
    setRemainingTime((prev) => prev - SECOND_IN_MS);
  }, SECOND_IN_MS);
  useEffect(() => {
    setRemainingTime(timerInMs);
    if (timerInMs > 0) {
      start();
    }
  }, [timerInMs]);

  if (remainingTime <= 0 && isRunning) {
    stop();
    onCountdownFinish();
  }

  if (remainingTime <= 0) {
    return <Button {...rest} />;
  }

  return (
    <Button {...rest} disabled>
      {(remainingTime / SECOND_IN_MS).toFixed(0)}
    </Button>
  );
};

export default CounterButton;
