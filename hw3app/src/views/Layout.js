// Layout.js

import { Outlet, Link } from "react-router-dom";
import SignInUp from "../SignInUp";

const Layout = () => {
  return (
    <div>
      <SignInUp />
      <Outlet />
    </div>
  );
};

export default Layout;