import Layout from './components/Layout/index'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Home from './features/Home';
import SpendingManagement from './features/SpendingManagement';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/nhap-chi-tieu",
        element: <SpendingManagement />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
