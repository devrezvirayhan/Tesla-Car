import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Admin from "./Pages/Admin/Admin";
import Home from "./Pages/Home/Home/Home";
import Products from "./Pages/Home/Products/Products";
import Review from './Pages/Home/Review/Review/Review';
import Login from "./Pages/Login/Login/Login";
import PrivetRoute from './Pages/Login/PrivetRoute/PrivetRoute';
import Register from "./Pages/Login/Register/Register";
import MyOrder from './Pages/MyOrder/MyOrder';
import Purchase from "./Pages/Purchase/Purchase";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/home">
            <Home></Home>
            </Route>
            <Route path="/login">
            <Login></Login>
            </Route>
            <PrivetRoute path="/products">
            <Products></Products>
            </PrivetRoute>
            <PrivetRoute path="/myorder">
            <MyOrder></MyOrder>
            </PrivetRoute>
            <PrivetRoute path="/admin">
            <Admin></Admin>
            </PrivetRoute>
            <PrivetRoute path="/review">
            <Review></Review>
            </PrivetRoute>
            <PrivetRoute path="/purchase/:productId">
              <Purchase></Purchase>
            </PrivetRoute>
            <Route path="/register">
            <Register></Register>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;