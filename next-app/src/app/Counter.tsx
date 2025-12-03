"use client";

import { useState } from "react";

type CounterProps = {
  initial: number; 
};

export default function Counter({ initial }: CounterProps) {
  const [count, setCount] = useState(initial);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}
