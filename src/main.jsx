
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import '@/index.css';
import { performanceMonitor } from '@/lib/monitoring';
import { SizeReporter } from '@/lib/size-reporter';
import { app, auth, analytics } from '@/firebase';

// Initialize performance monitoring
performanceMonitor.init();

// Measure resource sizes in development
if (import.meta.env.DEV) {
  window.addEventListener('load', () => {
    SizeReporter.measureResourceSizes().then(sizes => {
      console.info('Initial resource sizes measured');
    });
  });
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
