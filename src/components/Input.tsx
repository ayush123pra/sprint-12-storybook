import React, { useId } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function Input({ label, id, className = '', ...props }: InputProps) {
  const generatedId = useId();
  const inputId = id || generatedId;

  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={inputId} className="mb-1 font-medium text-gray-800">
        {label}
      </label>
      <input
        id={inputId}
        className={`border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed ${className}`}
        {...props}
      />
    </div>
  );
}