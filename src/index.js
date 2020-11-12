import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';

import './assets/reset.css';
import 'bulma/css/bulma.css';
import 'react-notifications/lib/notifications.css';
import './assets/custom.css';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
