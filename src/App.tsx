import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout, { loader as navLoader } from "./pages/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Categories from "./pages/Categories";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    loader: navLoader,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: ":category",
        element: <Categories />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
