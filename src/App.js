import React from 'react';
import {auth} from './firebase';
import Login from './pages/login';
import Main from "./pages/main"
import {useAuthState} from 'react-firebase-hooks/auth';


import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom"
import { useContext } from 'react';
import { AuthContext } from './Context/AuthContext';

function App() {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    user ? <Main/> : <Login/>
  );
}

export default App;
