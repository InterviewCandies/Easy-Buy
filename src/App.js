import "./App.css";
import { ErrorBoundary } from "react-error-boundary";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Category from "./pages/Category/Category";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import WishedList from "./pages/WishedList/WishedList";
import Cart from "./pages/Cart/Cart";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import NotFound from "./pages/NotFound/NotFound";
import { SnackbarProvider } from "notistack";
import { AUTHEN_TOKEN } from "./common";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem(AUTHEN_TOKEN) ? (
          <Component {...props}></Component>
        ) : (
          <Redirect to={{ pathname: "/" }}></Redirect>
        )
      }
    ></Route>
  );
};

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <SnackbarProvider maxSnack="1">
        <div className="App">
          <Router basename={process.env.PUBLIC_URL}>
            <Switch>
              <Route component={Login} path="/" exact></Route>
              <Route component={Register} path="/register"></Route>
              <PrivateRoute component={Home} path="/all"></PrivateRoute>
              <PrivateRoute
                component={Category}
                path="/category/:id"
              ></PrivateRoute>
              <PrivateRoute
                component={ProductDetails}
                path="/product/:id"
              ></PrivateRoute>
              <PrivateRoute
                component={WishedList}
                path="/wishlist"
              ></PrivateRoute>
              <PrivateRoute component={Cart} path="/cart"></PrivateRoute>
              <Route path="*" component={NotFound}></Route>
            </Switch>
          </Router>
        </div>
      </SnackbarProvider>
    </ErrorBoundary>
  );
}

export default App;
