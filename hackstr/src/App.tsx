import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { CouchNav } from './components/routing/CouchNav';
import { Switch, Route } from 'react-router';
import CouchList from './components/CouchList/CouchList';
import { userInfo } from 'os';
import Couch from './components/Couch/Couch';
import Login from './components/Login/Login';

const App: React.FC = () => {
  const logo={
    borderRadius: '50%',
    src: 'https://placehold.it/75',
  }
  const user={
    id:0,
    email:'this@email.com',
    phone: 1111111111,
  }
  return (
    <BrowserRouter>
    <CouchNav username={user.email} iconStyle={logo}/>
    <div>
      <Switch>
        { <Route path='/login' component={Login}/>
        /*<Route path='createCouch' component={CreateCouch}/> */}
        <Route path= '/couch/:id' component={Couch}/>
        <Route component={CouchList}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
