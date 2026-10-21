import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App';
import './styles/global.css';
import './styles/components.css';

const rootEl = document.getElementById('root');
if (rootEl) {
  try {
    createRoot(rootEl).render(
      <StrictMode>
        <App />
      </StrictMode>,
    );
  } catch (err) {
    rootEl.innerHTML = `<pre style="color:red;padding:2rem;font-size:14px;">${err.stack || err}</pre>`;
    console.error(err);
  }
} else {
  document.body.innerHTML = '<pre style="color:red;padding:2rem;">Root element #root not found!</pre>';
}
