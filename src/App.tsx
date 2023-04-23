import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import AddBorrower from "./modules/BorrowBooks/pages/AddNewItems";
import AddItems from "./modules/AddItems";
import Login from "./modules/Auth/pages/login/index";
import Register from "./modules/Auth/pages/register/index";
import BorrowBooks from "./modules/BorrowBooks";
import AddNewItems from "./modules/AddItems/pages/AddNewItems";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/user" element={<BorrowBooks />} />

        <Route index path="" element={<AddItems />} />
        <Route path="them-hang" element={<AddNewItems />} />

        <Route path="add" element={<AddBorrower />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
