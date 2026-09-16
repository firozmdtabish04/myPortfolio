import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Home from "../page/home/Home";
import Service from "../page/service/Service";
import About from "../page/about/About";
import Contact from "../page/contact/Contact";
import NotFound from "../page/NotFound";
import Project from "../page/project/Projects";
import Skill from "../page/skill/Skill";
import Achievement from "../page/achievment/Achievement";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "service", element: <Service /> },
      { path: "contact", element: <Contact /> },
      {
        path: "projects",
        element: <Project />,
      },
      {
        path: "skills",
        element: <Skill />,
      },
      {
        path: "achievements",
        element: <Achievement />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
