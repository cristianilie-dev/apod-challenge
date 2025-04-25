import React from 'react';

type ListProps = {
  title?: string;
  description?: string;
  subtitle?: string;
  children?: React.ReactNode;
};

export default function PictureList({
  title,
  description,
  subtitle,
  children,
}: ListProps) {
  return (
    <div className="relative mx-2 sm:mx-auto sm:max-w-3xl">
      <div className="absolute inset-0 -z-10 rounded-xl blur-2xl bg-white/10"></div>

      <div className="card bg-base-100 shadow-xl">
        {title && (
          <h1 className="text-lg sm:text-2xl font-bold mb-2">{title}</h1>
        )}
        {description && (
          <p className="mb-4 text-xs sm:text-sm opacity-70">{description}</p>
        )}

        <ul className="bg-base-100 rounded-box shadow-md border-0 sm:border sm:border-base-300">
          {subtitle && (
            <li className="p-4 pb-2 text-[0.6rem] sm:text-xs opacity-60 tracking-wide">
              {subtitle}
            </li>
          )}

          {children}
        </ul>
      </div>
    </div>
  );
}
