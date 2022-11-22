import { Routes, Route } from "react-router-dom";
import { Private } from "./Private";

import { Admin } from "../pages/Admin";
import { Home } from "../pages/Home";
import { Error } from "../pages/Error";
import { Network } from "../pages/Network";
import { SignIn } from "../pages/Login/SignIn";
import { SignUp } from "../pages/Login/SignUp";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />

      <Route path="/home" element={<Home />} />
      <Route
        path="/admin"
        element={
          <Private>
            <Admin />
          </Private>
        }
      />
      <Route
        path="admin/social"
        element={
          <Private>
            <Network />
          </Private>
        }
      />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
}
