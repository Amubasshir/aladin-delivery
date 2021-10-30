import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddService from './AddService/AddService';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import Contact from './Pages/Contact/Contact';
import Footer from './Pages/Footer/Footer';
import Booking from './Pages/Home/Booking/Booking/Booking';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import MyOrders from './Pages/MyOrders/MyOrders';
import NotFound from './Pages/NotFound/NotFound';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/addService">
              <AddService></AddService>
            </Route>
            <Route path="/myOrders">
              <MyOrders></MyOrders>
            </Route>
            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>

            <Route path="/contact">
              <Contact></Contact>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
