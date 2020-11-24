import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";


function App() {
  return (
    <div className="App">
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
