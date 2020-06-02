import { useEffect, useState } from 'react';
import moment from 'moment';
import { getTimeOfDayText, TimeOfDay } from '../../utils/date';

export interface TimeOfDayBackgroundHookConfig {
  refreshDateInterval?: number;
}

const baseBackgroundUrl = 'https://source.unsplash.com/weekly';

const useTimeOfDayBackgroundAndText = ({
  refreshDateInterval = 500000,
}: TimeOfDayBackgroundHookConfig = {}) => {
  const [date, setDate] = useState(moment());
  const [background, setBackground] = useState('');
  const [text, setText] = useState<TimeOfDay | null>(null);

  useEffect(() => {
    const timeOfDay = getTimeOfDayText(date);

    if (timeOfDay) {
      setBackground(`${baseBackgroundUrl}?${timeOfDay}`);
    }

    setText(timeOfDay);
  }, [date]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(moment());
    }, refreshDateInterval);

    return () => {
      clearInterval(interval);
    };
  }, [refreshDateInterval]);

  return {
    text,
    background,
  };
};

export default useTimeOfDayBackgroundAndText;
