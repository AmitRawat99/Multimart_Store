import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import CartProvider from './Context/Context.jsx';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './Context/UserContext.jsx';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <UserProvider>
    <CartProvider>
      <BrowserRouter>
        <StrictMode>
          <App />
        </StrictMode>
      </BrowserRouter>
    </CartProvider>
  </UserProvider>
);
