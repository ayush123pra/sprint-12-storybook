import React, { useState } from 'react';
import Input from '../src/components/Input';
import Button from './Button';

interface Props {
  onSubmitAction?: (value: string) => void;
}

export default function ControlledForm({ onSubmitAction }: Props) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      onSubmitAction?.(inputValue);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border border-gray-200 rounded max-w-sm">
      <Input
        label="Username"
        name="username"
        value={inputValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
        required
      />
      <p aria-live="polite" className="mb-4 text-sm text-gray-600">
        Current Input: {inputValue}
      </p>
      <Button type="submit">Submit Form</Button>
    </form>
  );
}