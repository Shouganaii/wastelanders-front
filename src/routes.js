import React from "react";
import App from './pages/Main/Main';
import Login from './pages/Login/Login';
import Signup from './pages/Signup';
import Cardapio from './pages/Cardapio/Cardapio';
import ItemCardapio from './pages/ItemCardapio/ItemCardapio';
import Mesas from './pages/Mesas/Mesas';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated } from "./services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => isAuthenticated() ? (
      <Component {...props} />
    ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/signup" component={Signup} />
      <PrivateRoute path="/mesas" component={App} />
      <PrivateRoute path="/cardapio" component={Cardapio} />
      <PrivateRoute path="/item" component={ItemCardapio} />
      <PrivateRoute path="/qr" component={Mesas} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
