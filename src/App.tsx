import { BrowserRouter } from 'react-router';
import AppRoutes from './AppRoutes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import FavoritesContext from './contexts/favorites-context';
import { CounterContextProvider } from './providers/CounterContextProvider';

const queryClient = new QueryClient();

function App() {
  return (
    <FavoritesContext.Provider value={{ favorites: ['243'] }}>
      <CounterContextProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </QueryClientProvider>
      </CounterContextProvider>
    </FavoritesContext.Provider>
  );
}

export default App;
