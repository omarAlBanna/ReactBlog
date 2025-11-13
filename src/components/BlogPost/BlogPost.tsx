import { type FC } from "react";
import { useLanguageContext } from "../../store/LangContext";
type BlogPostProps = {
  blog: { title: string; author: string; date: string; content: string };
};
const BlogPost: FC<BlogPostProps> = ({ blog }) => {
  const { title, author, date, content } = blog;
  const { language } = useLanguageContext();
  return (
    <article
      className="max-w-[600px] mx-auto border-2 border-cyan-700 p-5 rounded-md shadow-md shadow-gray-400 flex flex-col items-start justify-center gap-2 sm:gap-4"
      dir={language === "AR" ? "rtl" : "ltr"}
    >
      <h3 className="text-[10px] sm:text-base md:text-xl lg:text-2xl font-bold text-cyan-600">
        {title}
      </h3>
      <p className="text-[9px] sm:text-sm md:text-lg text-cyan-600 border-b pb-1 border-b-cyan-500">
        <span className="italic font-semibold text-cyan-700">{author}</span>
        {language === "AR" ? " في " : " on "}
        <span className="font-semibold">{date}</span>
      </p>
      <p className="text-[8px] sm:text-base text-cyan-800 rounded-md bg-stone-300 p-2">
        {content}
      </p>
    </article>
  );
};

export default BlogPost;
