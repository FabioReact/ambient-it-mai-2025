import { BrowserRouter } from 'react-router';
import AppRoutes from './AppRoutes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CounterContextProvider } from './providers/CounterContextProvider';
import FavoritesContextProvider from './providers/FavoritesContextProvider';
import AuthContextProvider from './providers/AuthContextProvider';
import { Provider } from 'react-redux'
import { store } from './redux/store';

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
