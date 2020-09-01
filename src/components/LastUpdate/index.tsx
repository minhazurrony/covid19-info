import dayjs from 'dayjs';
import React from 'react';

interface LastUpdateProps {
  date: string;
}
export const LastUpdate = ({ date }: LastUpdateProps) => {
  return <p>Update On: {dayjs(date).format('MMMM D, YYYY h:mm a')}</p>;
};
