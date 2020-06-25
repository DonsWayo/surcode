import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { AppContainer as ReactHotAppContainer } from 'react-hot-loader';

// Import F7 Bundle
import Framework7 from 'framework7/framework7-lite.esm.bundle.js';

// Import F7-React Plugin
import Framework7React, { App } from 'framework7-react';

import './app.global.css';

// Init F7-React Plugin
Framework7.use(Framework7React);

const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer;

document.addEventListener('DOMContentLoaded', () =>
  render(
    <AppContainer>
      <App
        params={{
          theme: 'aurora',
          autoDarkTheme: true,
          name: 'My App',
          id: 'com.demoapp.test',
        }}
      />
    </AppContainer>,
    document.getElementById('root')
  )
);
