interface CountriesProps {
  name: string;
  value: string;
}

interface CountryDropdown {
  selectedCountry: string | undefined;
  countryList: CountriesProps[];
  handleCountrySelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const CountryDropdown = ({
  selectedCountry,
  handleCountrySelect,
  countryList,
}: CountryDropdown) => {
  return (
    <>
      <label htmlFor="country-select" className="lable-select">
        Select a Country
        <select
          value={selectedCountry}
          onChange={handleCountrySelect}
          name="country"
          id="country-select"
          style={{ width: '100%' }}
        >
          <option value="">None</option>

          {countryList?.length > 0
            ? countryList.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.name}
                </option>
              ))
            : null}
        </select>
      </label>
    </>
  );
};
