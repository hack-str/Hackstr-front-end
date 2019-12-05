import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { CouchNav } from './components/routing/CouchNav';
import { Switch, Route } from 'react-router';
import CouchList from './components/CouchList/CouchList';
import { userInfo } from 'os';
import Couch from './components/Couch/Couch';
import Login from './components/Login/Login';
import { getUsers, IUser, getUserById } from './http/User';
import CreateCouch from './components/CreateCouch/CreateCouch';

const App: React.FC = () => {
  const logo={
    borderRadius: '50%',
    height:'75px',
    width: '75px',
    src: 'https://cdn.dribbble.com/users/897730/screenshots/4233025/coffeecode-logo.jpg',
  }
  const [currentUser, setCurrentUser]=useState(getUserById(1));
  console.log(currentUser);
  const changeUser = async ()=> user= await getUserById(1);
    changeUser();
  let user:IUser=JSON.parse(`{
    "id": 1,
    "name": null,
    "email": "this@email.net",
    "password": null,
    "phoneNumber": 0,
    "project": null,
    "listings": []
}`);
  return (
    <BrowserRouter>
    <CouchNav username={user.email} iconStyle={logo}/>
    <div>
      <Switch>
        <Route path='/login' component={Login}/>
        <Route path='createCouch' component={CreateCouch}/>
        <Route path= '/couch/:id' component={Couch}/>
        <Route component={CouchList}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
