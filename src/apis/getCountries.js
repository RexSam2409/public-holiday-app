export const getCountries = async () => {
  try {
    const res = await fetch(
      'https://openholidaysapi.org/Countries?languageIsoCode=en',
    );

    if (!res) throw new Error('Failed to fetch countries list');

    const data = await res.json();

    return data;
  } catch (error) {
    console.error('Error fetching countries:', error);
    throw error;
  }
};

export const getHoliday = async (selectedCountry) => {
  if (!selectedCountry) return;
  try {
    const res = await fetch(
      `https://openholidaysapi.org/PublicHolidays?countryIsoCode=${selectedCountry}&validFrom=2023-01-01&validTo=2023-12-31&languageIsoCode=${selectedCountry}&subdivisionCode=`,
    );

    if (!res) throw new Error('Failed to fetch countries list');

    const data = await res.json();

    return data;
  } catch (error) {
    console.error('Error fetching countries:', error);
    throw error;
  }
};
