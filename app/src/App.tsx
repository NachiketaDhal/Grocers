import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Navbar from "./components/Navbar";
import AllProducts from "./pages/AllProducts";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./_app.scss";

function App() {
  return (
    <main>
      <Router>
        {/* <Navbar /> */}
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/products" component={AllProducts} exact />
          <Route path="/cart" component={Cart} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/signup" component={Signup} exact />
        </Switch>
      </Router>
    </main>
  );
}

export default App;