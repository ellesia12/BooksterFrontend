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

     <Register />

      <header>

      </header>
      <main>
          <Switch>
              
                
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
