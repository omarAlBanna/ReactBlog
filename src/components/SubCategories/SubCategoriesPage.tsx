import BlogPost from "../BlogPost/BlogPost";
import useValidateSubCategories from "../../hooks/useValidateSubCategories";

type Blog = {
  title: string;
  author: string;
  date: string;
  content: string;
};
const SubCategoriesPage = () => {
  const { subCategories, sub: dataSub } = useValidateSubCategories();

  const currSub =
    subCategories &&
    subCategories.filter(
      (sub: { name: string; blogs: Blog[] }) => sub.name === (dataSub as string)
    );

  return (
    <div className="my-20 flex lg:flex-row flex-col w-4/5 gap-5 sm:gap-10 mx-auto">
      {currSub &&
        currSub[0].blogs.map((blog: Blog) => {
          return <BlogPost key={blog.title} blog={blog} />;
        })}
    </div>
  );
};

export default SubCategoriesPage;
