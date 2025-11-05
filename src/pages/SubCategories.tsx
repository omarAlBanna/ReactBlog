import { useParams } from "react-router";

const SubCategories = () => {
  const params = useParams();
  return <div>{params.sub}</div>;
};

export default SubCategories;
