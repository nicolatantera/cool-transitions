import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import NoPage from "@/pages/NoPage";
import Layout from "./Layout";
import AnimatedPage from "@/components/AnimatedPage/AnimatedPage";

const router = createBrowserRouter([
  {
    path: "/cool-transitions",
    element: <Layout />,
    children: [
      { index: true, element: <AnimatedPage element={<Home />} /> },
      { path: "home", element: <AnimatedPage element={<Home />} /> },
      { path: "about", element: <AnimatedPage element={<About />} /> },
      { path: "contact", element: <AnimatedPage element={<Contact />} /> },
    ],
  },
  {
    path: "*",
    element: <NoPage />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
