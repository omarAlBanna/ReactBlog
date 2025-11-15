import NavButton from "../NavBar/NavButton";
import { useLanguageContext } from "../../store/LangContext";
import useValidateSubCategories from "../../hooks/useValidateSubCategories";

const SubNav = () => {
  const { subCategories, category, loading } = useValidateSubCategories();
  const { language } = useLanguageContext();

  return (
    <header className="bg-linear-to-r from-stone-200 to-stone-300">
      <nav className="flex items-center justify-center sm:justify-end sm:px-5">
        {loading && language === "EN" && (
          <p className="loading text-lg">Loading sub-categories</p>
        )}
        {loading && language === "AR" && (
          <p dir="rtl" className="loading text-lg">
            جاري تحميل الفقرات الثانوية
          </p>
        )}
        {!loading && (
          <ul className="flex items-center gap-5 px-5 py-0.5">
            {subCategories.map((sub: { name: string }) => (
              <NavButton
                mode="nav-bar"
                key={sub.name}
                className="text-[10px] sm:text-base md:text-sm lg:text-base xl:text-lg
                         text-cyan-800 sm:px-4 hover:text-cyan-800 hover:font-bold"
                to={`/${category}/${sub.name}`}
              >
                {sub.name}
              </NavButton>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};
export default SubNav;
