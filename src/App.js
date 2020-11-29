import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import './App.css';




// import components here
import LogIn from "./components/LogIn"
import Register from "./components/Register"
import Search from "./components/Search"
import Profile from "./components/Profile"
import BookShelf from "./components/BookShelf"


const App = () => {
 
 
 
 
 
 
 
 
  return (
  <>
     
          <Switch>

              <Route path="/bookshelf"
                render={(props)=>(<BookShelf {...props}/>)}            
              />
              <Route path="/login">
                <LogIn />
              </Route>
              <Route path="/search"
                render={(props)=>(<Search {...props}/>)}            
              />
              <Route path="/profile">
                <Profile />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <Route exact path="/">
                <HomePage /> 
              </Route>

          </Switch>
</>
  );
}

export default App;
