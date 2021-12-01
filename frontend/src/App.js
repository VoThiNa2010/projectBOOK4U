import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";
import ForgotPassScreen from "./screens/ForgotPassScreen";
import ListCategory from "./components/ListCategory";
import ListProductOfCategory from "./screens/ListProductOfCategory";
import AdminScreen from "./screens/AdminScreen";
import AddCategoryScreen from "./screens/AddCategoryScreen";
import AdminProductScreen from "./screens/AdminProductScreen";
import EditProductScreen from "./screens/EditProductScreen";
import SearchScreen from "./screens/SearchScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/order/:id" component={OrderScreen} />
          <Route path="/shipping" component={ShippingScreen} />
          <Route path="/payment" component={PaymentScreen} />
          <Route path="/placeorder" component={PlaceOrderScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/profile" component={ProfileScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/admin/userlist" component={UserListScreen} />
          <Route path="/admin/user/:id/edit" component={UserEditScreen} />
          <Route path="/admin/productlist" component={ProductListScreen} />
          <Route path="/admin/product/:id/edit" component={ProductEditScreen} />
          <Route path="/admin/orderlist" component={OrderListScreen} />
          <Route path="/admin/category" component={AdminScreen} />
          <Route path="/admin/add/category" component={AddCategoryScreen} />
          <Route
            path="/admin/add/product/:pathname"
            component={ProductEditScreen}
          />

          <Route
            path="/admin/product/:pathname"
            component={AdminProductScreen}
          />

          <Route path="/search/:keyword" component={SearchScreen} />
          <Route path="/forgotpass" component={ForgotPassScreen} />
          <Route path="/listcategory" component={ListCategory} />
          <Route
            path="/category/:pathName/list_product/"
            component={ListProductOfCategory}
          />

          <Route path="/" component={HomeScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
