import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import StorePage from "./pages/StorePage";
import CartPage from "./pages/CartPage";
import KatalogPage from "./pages/KatalogPage";
import NotFound from "./pages/NotFound";
import DetailPage from "./pages/DetailPage";
// import AboutPage from "./pages/AboutPage";
// import ExamplePage from "./pages/ExamplePage";

import "./assets/scss/style.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={StorePage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/katalog" component={KatalogPage} />
        <Route path="/coffee/:id" component={DetailPage} />
        <Route path="/not-found" component={NotFound} />
        <Route component={NotFound} />
        {/* <Route exact path="/about" component={AboutPage} /> */}
        {/* <Route path="/" exact component={ExamplePage} /> */}
      </Switch>
    </Router>
  );
}

export default App;
