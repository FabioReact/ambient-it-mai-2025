import { BrowserRouter } from 'react-router';
import AppRoutes from './AppRoutes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CounterContextProvider } from './providers/CounterContextProvider';
import FavoritesContextProvider from './providers/FavoritesContextProvider';

const queryClient = new QueryClient();

function App() {
  return (
    <FavoritesContextProvider>
      <CounterContextProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </QueryClientProvider>
      </CounterContextProvider>
    </FavoritesContextProvider>
  );
}

export default App;
