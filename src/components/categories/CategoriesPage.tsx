import NavButton from "../NavBar/NavButton";
import { useLanguageContext } from "../../store/LangContext";
import { useRouteLoaderData, useParams } from "react-router";
import { FaArrowRightToBracket } from "react-icons/fa6";

const CategoriesPage = () => {
  const data = useRouteLoaderData("categoryLayout");
  const { language, loading } = useLanguageContext();
  const params = useParams();
  const subCategories: { name: string; image: string; alt: string }[] =
    data?.categories?.[language]?.[params.category!]?.["sub-categories"];

  return (
    <>
      <h1 className="text-center text-xl sm:text-4xl text-cyan-600 font-bold mt-6 ">
        {language === "EN"
          ? `Checkout the latest ${params.category} blogs`
          : ` تفقد احدث المقالات حول ${params.category}`}
      </h1>
      {loading && <p>loading</p>}
      <section className="mt-16">
        <ul className="flex flex-col sm:flex-row items-center justify-center gap-8">
          {subCategories.map(
            (sub: { name: string; image: string; alt: string }) => {
              return (
                <NavButton
                  mode="nav-bar"
                  to={`/${params.category}/${sub.name}`}
                  className=""
                  key={sub.name + (Math.random() * 1000 ** 2).toFixed(0)}
                >
                  <div className="px-auto flex flex-col gap-4 items-center ">
                    <img
                      className=" w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] object-cover border-4 border-cyan-600 rounded-md hover:scale-105 duration-300"
                      alt={`${sub.alt}`}
                      src={`/${sub.image}`}
                    />
                    <div className="flex  flex-row  items-center gap-3 text-lg sm:text-2xl text-cyan-600 hover:underline font-bold italic active:text-cyan-700">
                      <p>{`${sub.name} `}</p>
                      <FaArrowRightToBracket />
                    </div>
                  </div>
                </NavButton>
              );
            }
          )}
        </ul>
      </section>
    </>
  );
};

export default CategoriesPage;
