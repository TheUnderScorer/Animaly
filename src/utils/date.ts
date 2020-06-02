import moment from 'moment';

export type TimeOfDay = 'night' | 'morning' | 'afternoon' | 'evening';

const timesOfDay = {
  '0-5': 'night',
  '6-10': 'morning',
  '11-15': 'afternoon',
  '16-23': 'evening',
};
const timesOfDayArr = Object.entries(timesOfDay);

export const getTimeOfDayText = (date = moment()): TimeOfDay | null => {
  const hour = parseInt(date.format('H'), 10);

  const foundTime = timesOfDayArr.find(([period]) => {
    const [startTime, endTime] = period
      .split('-')
      .map((item) => parseInt(item, 10));

    return hour >= startTime && hour <= endTime;
  });

  return foundTime ? (foundTime[1] as TimeOfDay) : null;
};
