import React from 'react';

interface LastUpdateProps {
  date: string;
}
export const LastUpdate = ({ date }: LastUpdateProps) => {
  return <p>Last Update: {date}</p>;
};
