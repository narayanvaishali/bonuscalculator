import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter  } from 'react-router-dom';
// import AppRoutes from './components/AppRoutes';
import SideBar from './sidebar';

ReactDOM.render(
 <MuiThemeProvider>
   <BrowserRouter>
      <SideBar />
   </BrowserRouter>
</MuiThemeProvider>,
  document.getElementById('root'));
registerServiceWorker();
