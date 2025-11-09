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
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { action } from "./components/Form";
import LoggedInCtxProvider from "./store/LoggedInContext";
import Error from "./pages/Error";
const App = () => {
  const router = createBrowserRouter([
    {
      path: `/`,
      errorElement: <Error />,
      element: <RootLayout />,
      loader: navLoader,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/login",
          element: <Login />,
          action: action,
        },
        { path: "/signup", element: <SignUp />, action: action },

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
      <LoggedInCtxProvider>
        <RouterProvider router={router} />
      </LoggedInCtxProvider>
    </LangContextProvider>
  );
};

export default App;
