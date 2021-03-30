import React from 'react';
import {Route} from 'react-router-dom';
import Home from './components/Home/Home';

const Routes = () => {
  return (
    <Route to='/' component={Home} />
  );
};

export default Routes;
