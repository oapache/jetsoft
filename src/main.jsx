import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import JetsoftPage from './pages/JetsoftPage';
import './design/tokens.css';

function App() {
  useEffect(() => {
    document.title = 'Jetsoft — Inovação é a chave';
  }, []);

  return <JetsoftPage />;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
