import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';

require('./index.html');
require('../css/landing-page.css');
require('../Images/04113_london_1920x1080.jpg');
require('../Images/form_green_shadow_dark_85047_1920x1080.jpg');
require('bootstrap-loader');


// Create app
const container = document.querySelector('#app-container');

// Render app
ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>
  , container
);

// Hot module reloading
if (module.hot) {
  module.hot.accept('./components/App', () => {
    ReactDOM.render(
      <AppContainer>
        <App />
      </AppContainer>
  , container
    );
  });
}