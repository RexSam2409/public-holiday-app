import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import { HolidayPage } from './page';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HolidayPage />
    </QueryClientProvider>
  );
}

export default App;
