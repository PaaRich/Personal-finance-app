import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';
import { AppContext } from './context/AppContext.tsx';
import { Provider } from 'react-redux';
import { store } from "./redux/store.ts";
import { AuthProvider } from './context/AuthProvider.tsx';
import 'react-loading-skeleton/dist/skeleton.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
      <AuthProvider>
        <AppContext>
        <App />
          </AppContext>
        </AuthProvider>
      </Provider>
      
    </BrowserRouter>
    
  </StrictMode>,
)
