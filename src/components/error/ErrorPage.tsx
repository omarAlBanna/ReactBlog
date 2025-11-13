import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <>
      <h1 className="text-red-500 text-6xl font-bold">Error</h1>
      <p data-testid="error-par" className="text-2xl text-white">
        Dear user, an error occured while loading the page, kindly check the
        following areas before trying again:
      </p>
      <ul className="flex flex-col justify-center gap-2 list-disc">
        <li className="text-white">
          Is your device connected to the internet?
        </li>
        <li className="text-white">Is your internet connection stable?</li>
        <li className="text-white">Is your url valid?</li>
      </ul>
      <p data-testid="advice-par" className="text-white text-xl font bold">
        <span className="text-red-500">NOTE: </span>if issues persist, its
        advisable to refresh the page , or revisit the{" "}
        <Link
          className="text-blue-400 hover:text-blue-500 hover:font-bold active:text-amber-300 active:underline "
          to={"/"}
        >
          Home page
        </Link>
      </p>
    </>
  );
};

export default ErrorPage;
