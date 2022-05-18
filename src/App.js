import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from './pages/home/Home';
import UsersList from './pages/userList/UserList'
import NewUser from './pages/newPaje/NewUser'
import User from './pages/user/User'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import "./app.css";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UsersList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
