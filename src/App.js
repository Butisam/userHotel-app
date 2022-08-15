// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import Home from "./components/Home"
import Hotels from "./components/Hotels"
import List from "./components/List"
import HotInfo from './components/hotInfo';
import Booking from './components/booking';
import SignUp from './components/SignUp';
import Profile from './components/profile'
import Hot from './components/hot';
import Login from './components/login';
import { signInAnonymously } from 'firebase/auth';
import Navbar from './NavBar/Navbar';





function App() {
  return (
    <div>
      {/* <Navbar/> */}
      <Router>
        <Switch>

        <Route exact path="/" component={Login}></Route> 
        <Route  path="/home" component={Home}></Route>
        <Route  path="/signup" component={SignUp}></Route>
        <Route  path="/profile" component={Profile}></Route>
        <Route  path="/hotels" component={Hotels}></Route>
        <Route  path="/hot/:id" component={Hot}></Route>
        <Route path="/booking" component={Booking}></Route>
        </Switch>
      </Router>

    </div>
  );
}


export default App;
