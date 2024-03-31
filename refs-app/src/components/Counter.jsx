import { useEffect, useRef, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter({ initialValue = 0, incrementBy = 1 }) {
  const [counter, setCount] = useState(initialValue);
  const prevCounterRef = useRef(initialValue);
  const prevDirectionRef = useRef(null);


  useEffect(() => {
    const direction =
      counter > prevCounterRef.current ? "up" : "down";

    if (prevDirectionRef.current !== direction && prevDirectionRef.current !== null) {
      console.log(`Direction changed: ${direction}`);
    }

    prevDirectionRef.current = direction;
    prevCounterRef.current = counter;
  }, [counter]);

  function handleIncrementCounter() {
    setCount((c) => c + incrementBy);
  }
  function handleDecrementCounter() {
    setCount((c) => c - incrementBy);
  }
  function handleResetCounter() {
    setCount(initialValue);
  }
  return (
    <div>
      <CounterDisplay counter={counter} />

      <button onClick={handleIncrementCounter}>Increment</button>
      <button onClick={handleDecrementCounter}>Decrement</button>
      <button onClick={handleResetCounter}>Reset</button>
    </div>
  );
}
