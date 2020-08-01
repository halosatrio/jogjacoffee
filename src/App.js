import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import StorePage from "./pages/StorePage";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import NotFound from "./pages/NotFound";

import "./assets/scss/style.scss";

function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={StorePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/cart" component={CartPage} />
        <Route path="*" component={NotFound} />
      </Router>
    </>
  );
}

export default App;
