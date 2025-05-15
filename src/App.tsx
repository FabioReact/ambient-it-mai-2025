import { BrowserRouter } from 'react-router';
import AppRoutes from './AppRoutes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CounterContextProvider } from './providers/CounterContextProvider';
import FavoritesContextProvider from './providers/FavoritesContextProvider';
import AuthContextProvider from './providers/AuthContextProvider';

const queryClient = new QueryClient();

function App() {
  return (
    <AuthContextProvider>
      <FavoritesContextProvider>
        <CounterContextProvider>
          <QueryClientProvider client={queryClient}>
            <BrowserRouter>
              <AppRoutes />
            </BrowserRouter>
          </QueryClientProvider>
        </CounterContextProvider>
      </FavoritesContextProvider>
    </AuthContextProvider>
  );
}

export default App;
