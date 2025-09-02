import { CircularProgress } from '@mui/material';

interface HolidayProps {
  date: string;
  value: string;
}

interface HolidayListProps {
  isLoading: boolean;
  holidayOptions: HolidayProps[];
}

export const HolidayList = ({
  isLoading,
  holidayOptions,
}: HolidayListProps) => {
  return (
    <>
      {isLoading ? (
        <CircularProgress />
      ) : holidayOptions?.length > 0 ? (
        <div className="list">
          <ul>
            {holidayOptions.map((item) => (
              <li key={item.value}>
                {item.date} - {item.value}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <h4>Please select a country</h4>
      )}
    </>
  );
};
