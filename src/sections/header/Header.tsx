import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-white sticky top-0 z-10">
      <div className="px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center h-16 lg:h-20 relative">
          <Link to="/" className="flex items-center">
            <img
              className="w-12 h-12 bg-green-200"
              src="https://files.cdn-files-a.com/uploads/9728499/800_66ecfe9a308b9.png"
              alt=""
            />
            <p className="font-bold sm:font-semibold text-sm sm:text-base">
              Marketing
            </p>
          </Link>
        </div>
      </div>
    </header>
  );
};
