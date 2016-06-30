import React from 'react';
import {render} from 'react-dom';
import App from './common/App.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

require.ensure([], function(require) {

    //let module1 = require('./module1').default; // es6 module
    //let module2 = require('./module2'); // commonjs module

    render(
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>, document.getElementById('app'));
});
