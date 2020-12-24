import react, {useState, useEffect} from 'react'
import './App.css';
import Login from './auth/login/Login'
import Sidebar from './components/Sidebar/Sidebar'
import Chat from './components/Chat/Chat'
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom'
import { useStateValue } from './State/StateProvider';



function App() {

  const [{user}, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ): (
        <div className="app_body">
            <Router>
            <Sidebar />
              <Switch>
                <Route path="/rooms/:roomId">
                  <Chat />
                </Route>
              </Switch>
            </Router>
          </div>
      )}  
    </div>
  );
}

export default App;
