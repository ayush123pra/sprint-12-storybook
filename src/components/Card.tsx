import React from 'react';

interface CardProps {
  title?: string;
  children: React.ReactNode;
}

export default function Card({ title, children }: CardProps) {
  return (
    <article className="border border-gray-200 rounded-lg p-5 shadow-sm bg-white">
      {title && <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>}
      <div className="text-gray-600">
        {children}
      </div>
    </article>
  );
}