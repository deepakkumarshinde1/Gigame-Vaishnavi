import React, { useState } from "react";
import { Navigate, NavLink, Outlet } from "react-router-dom";

function ProtectedRoute() {
  let [isLogin, setIsLogin] = useState(true); //cookie (jwt) => code
  return (
    <>
      {isLogin ? (
        <>
          <header>
            <ul className="menu">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about-us">About-Us</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <button onClick={() => setIsLogin(false)}>Logout</button>
              </li>
            </ul>
          </header>
          <hr />
          <Outlet />
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}

export default ProtectedRoute;
