import NavButton from "../components/NavBar/NavButton";
import { useLanguageContext } from "../store/LangContext";
import { useLoaderData, useParams } from "react-router";

const Categories = () => {
  const { language } = useLanguageContext();
  const data = useLoaderData();
  const params = useParams();
  const subCategories =
    data.categories[language][params.category!]["sub-categories"];

  return (
    <>
      <header>
        <nav>
          <ul>
            {subCategories.map((sub: string) => {
              return (
                <NavButton key={sub} to={`/${params.category}/${sub}`}>
                  {sub}
                </NavButton>
              );
            })}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Categories;

export async function loader() {
  try {
    const response = await fetch("http://localhost:5173/data.json");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const resData = await response.json();
    return resData;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("data fetching failed.");
      return null;
    }
  }
}
