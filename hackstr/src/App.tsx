import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { CouchNav } from './components/routing/CouchNav';
import { Switch, Route } from 'react-router';
import CouchList from './components/CouchList/CouchList';

const App: React.FC = () => {
  return (
    <BrowserRouter>
    <CouchNav/>
    <div>
      <Switch>
        {/* <Route path='/login' component={Login}/>
        <Route path= '/couch/:id' component={Couch}/>
        <Route path='createCouch' component={CreateCouch}/> */}
        <Route component={CouchList}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
