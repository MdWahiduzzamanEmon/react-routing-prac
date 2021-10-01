import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import About from './components/About/About';
import Friends from './components/Friends/Friends';
import FriendsDetails from "./components/FriendsDetails/FriendsDetails";
import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import PageNotFound from './components/PageNotFound/PageNotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/friends">
            <Friends></Friends>
          </Route>
          <Route exact path="/abouts">
            <About></About>
          </Route>
          <Route path="/friend/:friendID">
            <FriendsDetails></FriendsDetails>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
