import { Grid, Paper } from '@mui/material';
import { useState } from 'react';
import '../styles/holiday.page.css';
import { CountryDropdown, HolidayList } from '../components';
import { useQuery } from '@tanstack/react-query';
import { getCountries, getHoliday } from '../apis/getCountries';
import { useCountriesOptions, useHolidayOption } from '../hooks/useOptions';

const HolidayPage = () => {
  const [selectedCountry, setSelectedCounty] = useState<string | undefined>();
  const handleCountrySelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCounty(e.target.value);
  };
  const { data: countriesData } = useQuery({
    queryKey: ['countries-list'],
    queryFn: getCountries,
  });

  const { data: publicHolData, isLoading } = useQuery({
    queryKey: ['public-holiday', selectedCountry],
    queryFn: () => getHoliday(selectedCountry),
    enabled: !!selectedCountry,
  });

  const countryOptions = useCountriesOptions(countriesData);
  const holidayOptions = useHolidayOption(publicHolData);

  return (
    <Paper
      className="holiday-container"
      sx={{ width: { xs: '100%', sm: '90%', md: 720 } }}
    >
      <Grid container spacing={2}>
        <Grid size={12}>
          <h1> Public Holiday App </h1>
        </Grid>
        <Grid size={6}>
          <CountryDropdown
            selectedCountry={selectedCountry}
            countryList={countryOptions}
            handleCountrySelect={handleCountrySelect}
          />
        </Grid>
        <Grid size={6}>
          <h5>Total Public Holiday: {holidayOptions?.length ?? 0}</h5>
        </Grid>
        <Grid size={12}>
          <HolidayList isLoading={isLoading} holidayOptions={holidayOptions} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default HolidayPage;
