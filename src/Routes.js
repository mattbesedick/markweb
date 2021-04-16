import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home/Home';
import TMG from './components/TMG/TMG';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/tmg' component={TMG} />
    </Switch>
  );
};

export default Routes;
