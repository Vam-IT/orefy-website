import { hydrateRoot } from 'react-dom/client';
import { App } from './App.jsx';
import copy from './content/de.js';

hydrateRoot(document.getElementById('root'), <App copy={copy} />);
