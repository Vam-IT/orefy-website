import { hydrateRoot } from 'react-dom/client';
import { App } from './App.jsx';
import copy from './content/en.js';

hydrateRoot(document.getElementById('root'), <App copy={copy} />);
