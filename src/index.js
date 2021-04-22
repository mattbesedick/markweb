import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import {CloudinaryContext} from 'cloudinary-react';

ReactDOM.render(
    <React.StrictMode>
      <CloudinaryContext cloudName={process.env.REACT_APP_CLOUD_NAME}>
        <Router>
          <App />
        </Router>
      </CloudinaryContext>
    </React.StrictMode>,
    document.getElementById('root'),
);
