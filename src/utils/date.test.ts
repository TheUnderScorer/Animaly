import moment, { Moment } from 'moment';
import { getTimeOfDayText, TimeOfDay } from './date';

describe('getTimeOfDayText', () => {
  test.each<[Moment, TimeOfDay | null]>([
    [moment('2019-08-12 19:00'), 'evening'],
    [moment('2019-08-12 08:00'), 'morning'],
    [moment('2019-08-12 06:00'), 'morning'],
    [moment('2019-08-12 15:00'), 'afternoon'],
    [moment('2019-08-12 01:00'), 'night'],
    [moment('2019-08-12 00:00'), 'night'],
  ])(
    'should return time of day text depending on date',
    (date, expectedResult) => {
      expect(getTimeOfDayText(date)).toEqual(expectedResult);
    },
  );
});
