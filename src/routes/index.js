import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Login from "../pages/login";
import Home from "../pages/home";
import Cadastro from "../pages/register";
import Page404 from "../pages/page404";
import UserPage from "../pages/userPage";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Cadastro} />
      <Route exact path="/userPage" component={UserPage} />
      <Route exact path="*" component={Page404} />
    </Switch>
  );
}
