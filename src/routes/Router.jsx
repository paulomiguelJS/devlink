import { Routes, Route } from "react-router-dom";
import { Admin } from "../pages/Admin";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}
