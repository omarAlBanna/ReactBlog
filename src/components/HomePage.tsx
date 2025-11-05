import heroImg from "../assets/HeroImg.jpg";
import { useLanguageContext } from "../store/LangContext";
import { Link } from "react-router";
const HomePage = () => {
  const { language } = useLanguageContext();
  const textSize = language === "EN" ? "text-3xl" : "text-[42px]";
  return (
    <section className="w-full h-full flex flex-col items-center justify-center ">
      <div className="relative  mt-4 mb-8 h-[260px] w-[260px] sm:w-[380px] md:h-[400px] md:w-[600px]">
        <img
          className="absolute object-cover inline-flex h-full w-full border-4 border-cyan-600"
          src={heroImg}
          alt="A pile of wooden cubes with the word blog spelled on them"
        />
      </div>
      <div className="bg-linear-to-r from-cyan-600 to-blue-600 bg-clip-text mb-8 w-[260px] sm:w-[380px] md:w-[600px]">
        <h1
          className={`text-base sm:text-2xl md:${textSize} mt-0 text-transparent font-black mb-4 text-center`}
        >
          {language === "EN"
            ? "START YOUR BLOGGING EXPERIENCE TODAY FOR FREE!"
            : "ابدأ رحلتك معنا وشارك مقالاتك بشكل مجاني"}
        </h1>
      </div>
      <div className="flex items-center justify-center mx-auto gap-2 md:gap-4">
        <Link
          to={"/about"}
          className="text-cyan-600 cursor-pointer hover:bg-cyan-100 active:bg-cyan-200 text-base md:text-2xl font-bold px-2 md:px-4 py-1 md:py-2 rounded-lg border-2 border-cyan-600"
        >
          {language === "EN" ? "Learn more" : "معلومات اضافية"}
        </Link>
        <Link
          to={language === "EN" ? "/" : "/"}
          className="bg-cyan-600 cursor-pointer hover:bg-cyan-700 active:bg-cyan-800 border-2 border-cyan-600 text-base md:text-2xl font-bold px-2 md:px-4 py-1 md:py-2 rounded-lg  text-white"
        >
          {language === "EN" ? "Get started now" : "ابدأ الان"}
        </Link>
      </div>
    </section>
  );
};

export default HomePage;
