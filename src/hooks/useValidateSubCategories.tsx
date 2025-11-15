import { useLanguageContext } from "../store/LangContext";
import { useRouteLoaderData, useParams } from "react-router";

const useValidateSubCategories = () => {
  const { language } = useLanguageContext();
  const data = useRouteLoaderData("categoryLayout");
  const params = useParams();
  const category = params.category;
  const sub = params.sub;

  const subCategories =
    data.categories[language][category!]?.["sub-categories"];

  const loading = !subCategories;
  return {
    data,
    category,
    subCategories,
    loading,
    sub,
  };
};

export default useValidateSubCategories;
