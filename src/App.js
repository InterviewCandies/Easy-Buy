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
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route component={Login} path="/" exact></Route>
          <Route component={Register} path="/register"></Route>
          <Route component={Home} path="/all" exact></Route>
          <Route component={Category} path="/category/:id" exact></Route>
          <Route component={ProductDetails} path="/product/:id"></Route>
          <Route component={WishedList} path="/wishlist"></Route>
          <Route component={Cart} path="/cart"></Route>
          <Route component={NotFound} path="/404"></Route>
          <Redirect to="/404"></Redirect>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
