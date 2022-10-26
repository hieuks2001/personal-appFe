import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./modules/Home";
import SpendingManagement from "./modules/SpendingManagement";
import Login from "./modules/Auth/pages/login/index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="nhap-chi-tieu" element={<SpendingManagement />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
