import { useParams } from "react-router";

const Categories = () => {
  const param = useParams();
  return <div>{param.category}</div>;
};

export default Categories;
