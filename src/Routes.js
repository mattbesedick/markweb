import React from 'react';
import {Route, Switch, useLocation} from 'react-router-dom';
import Blessings from './components/BiB/Blessings';
import Home from './components/Home/Home';
import TMG from './components/TMG/TMG';
import {AnimatePresence} from 'framer-motion';


const Routes = () => {
  const location = useLocation();
  return (
    <AnimatePresence initial={false} exitBeforeEnter>
      <Switch location={location} key={location.key}>
        <Route exact path='/' component={Home} />
        <Route exact path='/tmg' component={TMG} />
        <Route exact path='/blessingsinabackpack' component={Blessings} />
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
