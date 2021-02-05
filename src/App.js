import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Category from "./pages/Category/Category";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import WishedList from "./pages/WishedList/WishedList";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import NotFound from "./pages/NotFound/NotFound";
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("user") ? (
          <Component {...props}></Component>
        ) : (
          <Redirect to={{ pathname: "/", state: props.location }}></Redirect>
        )
      }
    ></Route>
  );
};
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route component={Login} path="/" exact></Route>
          <Route component={Register} path="/register"></Route>
          <PrivateRoute component={Home} path="/all" exact></PrivateRoute>
          <PrivateRoute
            component={Category}
            path="/category/:id"
            exact
          ></PrivateRoute>
          <PrivateRoute
            component={ProductDetails}
            path="/product/:id"
          ></PrivateRoute>
          <PrivateRoute component={WishedList} path="/wishlist"></PrivateRoute>
          <PrivateRoute component={Cart} path="/cart"></PrivateRoute>
          <Route component={NotFound} path="/404"></Route>
          <Redirect to="/404"></Redirect>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
