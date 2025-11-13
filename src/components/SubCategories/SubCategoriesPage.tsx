import BlogPost from "../BlogPost/BlogPost";
import { useRouteLoaderData } from "react-router";
import { useLanguageContext } from "../../store/LangContext";
import { useParams } from "react-router";

type Blog = {
  title: string;
  author: string;
  date: string;
  content: string;
};
const SubCategoriesPage = () => {
  const data = useRouteLoaderData("categoryLayout");
  const { language } = useLanguageContext();
  const params = useParams();
  const subs = data.categories[language]?.[params.category!]["sub-categories"];
  const currSub = subs.filter(
    (sub: { name: string; blogs: Blog[] }) => sub.name === params.sub
  );

  return (
    <div className="my-20 flex lg:flex-row flex-col w-4/5 gap-5 sm:gap-10 mx-auto">
      {currSub[0].blogs.map((blog: Blog) => {
        return <BlogPost key={blog.title} blog={blog} />;
      })}
    </div>
  );
};

export default SubCategoriesPage;
