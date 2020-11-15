import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';
import Polls from '../pages/Polls';
import NewUser from '../pages/NewUser';
import NewPoll from '../pages/NewPoll';
import axios from 'axios'


const Routes = (user) => (

 
  <Router>
   <MainLayout user = {user}>
      <Switch>
      <Route exact path="/">
          <Polls />
      </Route>
      <Route exact path="/user">
          <NewUser />
      </Route>
      <Route exact path="/newpoll">
          <NewPoll />
      </Route>
      <Route path="*">
          <h1>404</h1>
      </Route>
      </Switch>
    </MainLayout>
  </Router>

);

export default Routes;
