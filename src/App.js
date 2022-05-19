import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from './pages/home/Home';
import Chart from '../src/components/chart/Chart'
import Seles from '../src/components/featuredinfo/FeaturedInfo'
import UsersList from './pages/userList/UserList'
import User from './pages/user/User'
import NewUser from './pages/newPaje/NewUser'
import ProductList from './pages/productList/ProductList'
import Product from './pages/product/Product'
import NewProduct from './pages/newProduct/NewProduct'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./app.css";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        {/* <Switch>
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
        </Switch> */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/analytics" element={<Chart />}></Route>
          <Route path="/sales" element={<Seles />}></Route>
          <Route path="/users" exact element={<UsersList />}></Route>
          <Route path="/user/:userId" element={<User />}></Route>
          <Route path="/newUser" element={<NewUser />}></Route>
          <Route path="/products" exact element={<ProductList />}></Route>
          <Route path="/product/:productsId" element={<Product />}></Route>
          <Route path="/newproduct" element={<NewProduct />}></Route>


        </Routes>
      </div>
    </Router>
  );
}

export default App;
