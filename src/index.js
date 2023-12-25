import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'smartwizard/dist/css/smart_wizard.min.css'; 
// import 'smartwizard/dist/css/smart_wizard_theme_arrows.min.css';
// import 'smartwizard/dist/js/jquery.smartWizard.min.js'; 
import MainRouts from './Rotas/rotas';
import {BrowserRouter} from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <MainRouts />
    </BrowserRouter>
    
  </React.StrictMode>
);


