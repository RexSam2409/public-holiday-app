import { useMemo } from 'react';
import { format, parseISO } from 'date-fns';

export const useCountriesOptions = (countriesData: any) => {
  return useMemo(() => {
    return countriesData?.map((item: any) => ({
      name: item.name[0].text,
      value: item.isoCode,
    }));
  }, [countriesData]);
};

export const useHolidayOption = (publicHolData: any) => {
  return useMemo(() => {
    return publicHolData?.map((item: any) => ({
      date: format(parseISO(item.startDate), 'd MMMM'),
      value: item.name[0].text,
    }));
  }, [publicHolData]);
};
