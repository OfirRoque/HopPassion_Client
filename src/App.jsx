import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home/Home";
import Create from "./components/Create/Create";
import Details from "./components/Details/Details";
import Login from "./components/Login/Login";
import UserProfile from "./components/UserProfile/UserProfile";
import SignUp from "./components/Signup/Signup";
import Cart from "./components/Cart/Cart";
import UserSessionManager from "./components/UserSessionManager/UserSessionManager"
import CartSessionManager from "./components/CartSessionManager/CartSessionManager";
import Alert18 from "./components/Alerts/Alert18";
import { useState } from "react";
import { Alert } from "react-bootstrap";


function App() {
  const [alert18, setAlert18] = useState(true);
  
  return (
    <div className="app">
      {alert18 && <Alert18 />}
      <CartSessionManager />
      <UserSessionManager />
      <Routes>
        <Route path="/confirmacion" component={Alert18} />
        <Route path="/" element={<Home />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/product/:id" element={<Details />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/user/:id" element={<UserProfile />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
