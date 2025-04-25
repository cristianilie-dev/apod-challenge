import React, { useState } from 'react';

type LazyImageProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
};

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  imageClassName = '',
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {/* Pulse effect while the image is loading */}
      {!loaded && (
        <div
          className={`absolute inset-0 bg-white/10 animate-pulse pointer-events-none z-10 ${imageClassName}`}
        />
      )}

      {/* The actual image */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)} // Trigger when the image is loaded
        className={`transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'} ${imageClassName}`}
      />
    </div>
  );
};

export default LazyImage;
