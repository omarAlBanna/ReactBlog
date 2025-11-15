import NavButton from "../NavBar/NavButton";
import { useLanguageContext } from "../../store/LangContext";
import { FaArrowRightToBracket } from "react-icons/fa6";
import useValidateSubCategories from "../../hooks/useValidateSubCategories";

const CategoriesPage = () => {
  const { language } = useLanguageContext();
  const { category, subCategories, loading } = useValidateSubCategories();

  return (
    <>
      <h1 className="text-center text-xl sm:text-4xl text-cyan-600 font-bold mt-6 ">
        {language === "EN"
          ? `Checkout the latest ${category} blogs`
          : ` تفقد احدث المقالات حول ${category}`}
      </h1>
      <section className="mt-16">
        {loading && language === "EN" && (
          <p className="loading text-5xl">Loading...</p>
        )}
        {loading && language === "AR" && (
          <p dir="rtl" className="loading text-5xl">
            جاري البحث...
          </p>
        )}
        {!loading && (
          <ul className="flex flex-col sm:flex-row items-center justify-center gap-8">
            {subCategories.map(
              (sub: { name: string; image: string; alt: string }) => {
                return (
                  <NavButton
                    mode="nav-bar"
                    to={`/${category}/${sub.name}`}
                    className=""
                    key={sub.name}
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
        )}
      </section>
    </>
  );
};

export default CategoriesPage;
