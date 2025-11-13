import { Link } from "react-router";
import { useLanguageContext } from "../../store/LangContext";
import aboutImg from "../../assets/AboutImg.jpg";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { useLoginContext } from "../../store/LoggedInContext";
const AboutPage = () => {
  const { language } = useLanguageContext();
  const { loggedIn } = useLoginContext();
  const languageText =
    language === "EN"
      ? "text-[10px] sm:text-[12px] lg:text-[14px] xl:text-[18px]"
      : "text-[10px] sm:text-[14px] lg:text-[16px] xl:text-[20px]";

  return (
    <main className="flex flex-col  items-center justify-between  gap-2 md:gap-6 my-1 md:my-8 w-screen ">
      <div
        className={` bg-linear-to-r from-cyan-600 to-blue-600 bg-clip-text mt-4 sm:mt-8 `}
      >
        <h1 className="text-transparent text-[28px] sm:text-[33px] font-bold py-1">
          {language === "EN" ? "About us" : "من نحن"}
        </h1>
      </div>

      <div
        className="about-hero flex  gap-4 md:gap-10 items-start justify-center mb-4 md:mb-10 w-full"
        dir={language === "AR" ? "rtl" : "ltr"}
      >
        <p
          className={` ${languageText} text-cyan-700 w-[250px] sm:w-[300px] md:w-1/3 `}
        >
          {language === "EN"
            ? "Welcome to our corner of the internet a space where ideas, stories, and insights come to life. Our mission is to inspire curiosity and spark meaningful conversations through thoughtful writing and genuine perspectives. Whether we’re exploring the latest trends, sharing personal experiences, or diving deep into topics that matter, we aim to deliver content that informs, connects, and resonates. Here, every article is written with passion and purpose  because we believe good writing can make a difference."
            : "مرحباً بكم في ركننا الصغير على الإنترنت، حيث تولد الأفكار وتُروى القصص وتُشارك التجارب. رسالتنا هي إلهام الفضول وإشعال الحوارات الهادفة من خلال كتابة صادقة ومحتوى يعكس رؤيتنا للعالم. سواء كنّا نستكشف أحدث التوجهات، أو نشارك تجاربنا الشخصية، أو نتعمق في قضايا تمس حياتنا، فإن هدفنا هو تقديم محتوى يثري المعرفة ويقرّب الناس من بعضهم البعض. نحن نؤمن بأن الكلمة الصادقة قادرة على إحداث فرق، ولهذا نكتب بشغف ووعي في كل مقال ننشره."}
        </p>
        <div className="about-img relative  w-[180px]  sm:min-w-[300px] lg:min-w-[350px] xl:min-w-[400px]  h-[100px]">
          <img
            className="absolute object-cover border-4 border-cyan-600"
            src={aboutImg}
            alt="a mobile phone with a blogging site on screen"
          />
        </div>
      </div>

      {loggedIn ? null : (
        <div className="md:mt-10">
          <Link
            className=" italic  flex gap-2 items-center min-h-[50px]  font-bold text-xl sm:text-2xl text-cyan-600 hover:underline active:text-cyan-700  "
            to={"/signup"}
          >
            {language === "EN" ? "Get started" : "ابدأ الان"}
            <FaArrowRightToBracket />
          </Link>
        </div>
      )}
    </main>
  );
};

export default AboutPage;
