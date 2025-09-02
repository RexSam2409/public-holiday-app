declare module '../apis/getCountries' {
  export function getCountries(): Promise<string[]>;
  export function getHoliday(
    selectedCountry: string | undefined,
  ): Promise<string[]>;
}

export interface Country {
  isoCode: string;
  name: string;
}
