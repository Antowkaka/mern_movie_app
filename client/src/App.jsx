import React from 'react';
import './components/Header/Header';
import { Header } from "./components/Header/Header";
import {
    Link,
    Route,
    Switch,
    BrowserRouter as Router
} from "react-router-dom";
import {useRoutes} from "./routes";

function App() {
  const routes = useRoutes(false)

  return (
    <Router className="App">
        <Header/>
        {routes}
    </Router>
  );
}

export default App;
