import NavButton from "../NavBar/NavButton";
import { useLanguageContext } from "../../store/LangContext";
import { useLoaderData, useParams } from "react-router";

const SubNav = () => {
  const data = useLoaderData();
  const { language } = useLanguageContext();
  const params = useParams();
  const subCategories =
    data?.categories?.[language]?.[params.category!]?.["sub-categories"];
  return (
    <>
      <header className="bg-linear-to-r from-stone-200 to-stone-300">
        <nav className="flex items-center justify-center sm:justify-end sm:px-5">
          <ul className="flex items-center gap-5 px-5 py-0.5">
            {subCategories.map((sub: { name: string; image: string }) => {
              return (
                <NavButton
                  mode={"nav-bar"}
                  key={sub.name}
                  className="text-[10px] sm:text-base md:text-sm lg:text-base xl:text-lg text-cyan-800 sm:px-4 hover:text-cyan-800 hover:font-bold"
                  to={`/${params.category}/${sub.name}`}
                >
                  {sub.name}
                </NavButton>
              );
            })}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default SubNav;
