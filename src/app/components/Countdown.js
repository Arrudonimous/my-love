import React, { useState, useEffect } from 'react';
import calcDate from '@/helpers/calcDate';
import { CountDownContainer, CountdownNumber } from '@/styles';

export const Countdown = () => {
  const [currentDate, setCurrentDate] = useState(calcDate());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(calcDate());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <CountDownContainer>
      {currentDate.years > 0 && (<p><CountdownNumber>{currentDate.years}</CountdownNumber> ano{currentDate.years > 1 ? 's' : ''},</p>)}
      {currentDate.months > 0 && (<p><CountdownNumber>{currentDate.months}</CountdownNumber> mês{currentDate.months > 1 ? 'ses' : ''},</p>) }
      <p><CountdownNumber>{currentDate.days}</CountdownNumber> dia{currentDate.days > 1 ? 's' : ''},</p>
      <p><CountdownNumber>{currentDate.hours}</CountdownNumber> hora{currentDate.hours > 1 ? 's' : ''},</p>
      <p><CountdownNumber>{currentDate.minutes}</CountdownNumber> minuto{currentDate.minutes > 1 ? 's' : ''} e</p>
      <p><CountdownNumber>{currentDate.seconds}</CountdownNumber> segundo{currentDate.minutes > 1 ? 's' : ''}</p>
    </CountDownContainer>
  );
};
