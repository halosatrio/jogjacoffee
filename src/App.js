import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import StorePage from "./pages/StorePage";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import KatalogPage from "./pages/KatalogPage";
import NotFound from "./pages/NotFound";
import DetailPage from "./pages/DetailPage";

import "./assets/scss/style.scss";

function App() {
  return (
    <Router>
      <Route exact path="/" component={StorePage} />
      {/* <Route exact path="/about" component={AboutPage} /> */}
      <Route exact path="/cart" component={CartPage} />
      <Route exact path="/katalog" component={KatalogPage} />
      <Route exact path="/coffee/:id" component={DetailPage}></Route>
      <Route path="/not-found" component={NotFound}></Route>
      <Redirect to="/not-found" />
    </Router>
  );
}

export default App;
