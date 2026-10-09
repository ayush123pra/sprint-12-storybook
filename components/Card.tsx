import React from 'react';

export interface CardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  children?: React.ReactNode;
  className?: string;
}

export default function Card({ title, description, imageUrl, children, className = '' }: CardProps) {
  return (
    <div className={`border border-gray-200 rounded-lg shadow-sm overflow-hidden bg-white max-w-sm ${className}`}>
      {/* Image conditionally render hogi agar imageUrl pass kiya gaya hai */}
      {imageUrl && (
        <img 
          src={imageUrl} 
          alt={title || 'Card image'} 
          className="w-full h-48 object-cover" 
        />
      )}
      
      <div className="p-4">
        {/* Title conditionally render hoga */}
        {title && <h3 className="text-lg font-bold mb-2 text-gray-900">{title}</h3>}
        
        {/* Description conditionally render hoga */}
        {description && <p className="text-gray-600 mb-4">{description}</p>}
        
        {/* Baaki ka content (buttons ya aur koi element) yahan aayega */}
        {children}
      </div>
    </div>
  );
}