import About from "./sections/about";
import Hero from "./sections/hero";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Services from "./sections/services";
import Contact from "./sections/contact";
import Team from "./sections/team";
import CommonLayout from "./layout";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <CommonLayout />,
      children: [
        { path: "/", element: <Hero /> },
        { path: "/about-us", element: <About /> },
        { path: "/our-services", element: <Services /> },
        { path: "/contact-us", element: <Contact /> },
        { path: "/our-team", element: <Team /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
