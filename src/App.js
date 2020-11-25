import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import './App.css';




// import components here
import LogIn from "./components/LogIn"
import Register from "./components/Register"


function App() {
  return (
    <div className="App">

     
      <header>

      </header>
      <main>
          <Switch>

              <Route
              path="/LogIn">
              <LogIn />
              </Route>
              
              <Route
              path="/register">
                <Register />
              </Route>
                
              <Route
                exact
                path="/">
                <HomePage /> 
              </Route>


          </Switch>



      </main>
      <footer>

      </footer>

    </div>
  );
}

export default App;
