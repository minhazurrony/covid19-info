import React from 'react';

interface CovidDataProps {
  title: string;
  value: number;
}

export const CovidData = ({ title, value }: CovidDataProps) => {
  return (
    <div>
      <p>
        <span>{title}</span>{' '}
        {new Intl.NumberFormat('en-IN', {
          maximumSignificantDigits: 3,
        }).format(value)}
      </p>
    </div>
  );
};
