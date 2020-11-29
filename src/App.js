import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import './App.css';




// import components here
import LogIn from "./components/LogIn"
import Register from "./components/Register"
import Search from "./components/Search"
import Profile from "./components/Profile"
import BookCard from "./components/BookCard"

const App = () => {
 
 
 
 
 
 
 
 
  return (
  <>
     
          <Switch>
              
              <Route path="/bookDetail">
                <BookCard />
              </Route>
              <Route path="/login">
                <LogIn />
              </Route>
              <Route path="/search">
                <Search />                
              </Route>
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
