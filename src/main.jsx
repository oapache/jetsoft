import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import JetsoftPage from './pages/JetsoftPage';
import './design/tokens.css';

console.log(
  '%cFeito por Pablo Henrique, Gostou?\nEntre em contato (=\n%chttps://www.linkedin.com/in/apachedev/',
  'color: #20c9dd; font-weight: 700;',
  'color: #0b7ca9; text-decoration: underline;',
);

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
