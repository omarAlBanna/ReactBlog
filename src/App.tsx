import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./RootLayout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "home",
        index: true,
      },
      {
        path: "about",
      },
      {
        path: ":category",
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
