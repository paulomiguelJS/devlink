import { Routes, Route } from "react-router-dom";
import { Private } from "./Private";

import { Admin } from "../pages/Admin";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Error } from "../pages/Error";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/admin"
        element={
          <Private>
            <Admin />
          </Private>
        }
      />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
}
