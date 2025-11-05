import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout, { loader as navLoader } from "./pages/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import LangContextProvider from "./store/LangContext";
import SubCategories from "./pages/SubCategories";
import Categories from "./pages/Categories";
import CategoryLayout, {
  loader as categoriesLoader,
} from "./pages/CategoryLayout";
const App = () => {
  const router = createBrowserRouter([
    {
      path: `/`,
      element: <RootLayout />,
      loader: navLoader,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },

        {
          id: "categoryLayout",
          path: ":category",
          element: <CategoryLayout />,
          loader: categoriesLoader,
          children: [
            { index: true, element: <Categories /> },
            { path: ":sub", element: <SubCategories /> },
          ],
        },
      ],
    },
  ]);
  return (
    <LangContextProvider>
      <RouterProvider router={router} />
    </LangContextProvider>
  );
};

export default App;
