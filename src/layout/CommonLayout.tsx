import { Link, Outlet, useLocation } from "react-router-dom";
import Footer from "../sections/footer";
import Header from "../sections/header";

export const CommonLayout = () => {
  const { pathname } = useLocation();
  console.log("pathname", pathname);
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <main>
      <Header />
      <Outlet />
      <div className="fixed bottom-4 left-0 right-0 flex justify-center px-4">
        <div className="inline-flex items-center justify-center space-x-6 sm:space-x-8 md:space-x-10 bg-gray-50 shadow px-4 py-4 sm:py-3 rounded-full max-w-full overflow-x-auto">
          <Link
            to="/"
            title=""
            className={`text-black transition-all duration-200 hover:text-opacity-80 text-xs sm:text-sm md:text-base ${
              isActive("/") ? "font-bold sm:font-semibold text-blue-primary" : "font-normal"
            }`}
          >
            {" "}
            Home{" "}
          </Link>

          <Link
            to="/about-us"
            title=""
            className={`text-black transition-all duration-200 hover:text-opacity-80 text-xs sm:text-sm md:text-base ${
              isActive("/about-us") ? "font-bold sm:font-semibold text-blue-primary" : "font-normal"
            }`}
          >
            {" "}
            About{" "}
          </Link>

          <Link
            to="/our-services"
            title=""
            className={`text-black transition-all duration-200 hover:text-opacity-80 text-xs sm:text-sm md:text-base ${
              isActive("/our-services") ? "font-bold sm:font-semibold text-blue-primary" : "font-normal"
            }`}
          >
            {" "}
            Services{" "}
          </Link>

          <Link
            to="/contact-us"
            title=""
            className={`text-black transition-all duration-200 hover:text-opacity-80 text-xs sm:text-sm md:text-base ${
              isActive("/contact-us") ? "font-bold sm:font-semibold text-blue-primary" : "font-normal"
            }`}
          >
            {" "}
            Contact{" "}
          </Link>

          <Link
            to="/our-team"
            title=""
            className={`text-black transition-all duration-200 hover:text-opacity-80 text-xs sm:text-sm md:text-base ${
              isActive("/our-team") ? "font-bold sm:font-semibold text-blue-primary" : "font-normal"
            }`}
          >
            {" "}
            Team{" "}
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
};
