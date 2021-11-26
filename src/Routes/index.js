import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  /* Redirect, */
} from "react-router-dom";
/* import { Backdrop, CircularProgress } from "@mui/material";
import { useIsFetching, useIsMutating } from "react-query"; */
import RouteConstants from "./RouteConstants";
import Home from "Pages/Home";
import PickingBagging from "Pages/PickingBagging";
import Login from "Pages/Login";
import Playground from "Pages/Playground";

const Routes = () => {
  return (
    <Router>
      <Switch>
        {/* <Redirect exact from="/" to="/login" /> */}
        <Route path={RouteConstants.LOGIN} element={<Login />} />
        <Route path={RouteConstants.HOME} element={<Home />} />
        <Route
          path={RouteConstants.PICKING_BAGGING}
          element={<PickingBagging />}
        />
        <Route path={RouteConstants.PLAYGROUND} element={<Playground />} />
        {/* <Route path={RouteConstants.REDIRECTOR} component={Home} /> */}
      </Switch>
    </Router>
  );
};

export default Routes;
