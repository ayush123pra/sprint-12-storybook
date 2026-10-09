import React, { useState } from 'react';
import Button from './Button';

export default function Counter({ initialValue = 0 }: { initialValue?: number }) {
  const [count, setCount] = useState(initialValue);

  return (
    <div className="p-4 border border-gray-200 rounded bg-white max-w-sm">
      <h2 className="text-xl font-bold mb-2">Counter</h2>
      <div aria-live="polite" className="text-2xl font-mono mb-4 text-gray-800">
        Count: {count}
      </div>
      <div className="flex gap-2">
        <Button onClick={() => setCount(prev => prev + 1)}>Increment</Button>
        <Button onClick={() => setCount(prev => prev - 1)}>Decrement</Button>
      </div>
    </div>
  );
}