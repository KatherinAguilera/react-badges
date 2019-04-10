import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';

import './global.css';

// Componente de router
import App from './components/App'

const container = document.getElementById('app');

ReactDOM.render(<App />, container);