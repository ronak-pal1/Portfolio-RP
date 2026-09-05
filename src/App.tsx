import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import { FaArrowUp } from "react-icons/fa";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import ProjectsPage from "./pages/ProjectsPage";
import Resume from "./pages/Resume";
import NotFound from "./pages/NotFound";
import { Analytics } from "@vercel/analytics/react";
import BlogsPage from "./pages/BlogsPage";
import SingleBlogPage from "./pages/SingleBlogPage";
import LayoutWithHeader from "./LayoutWithHeader";
import { Toaster } from "react-hot-toast";

function App() {
  const [isdarkMode, setIsDarkMode] = useState(false);
  const [isGoTopVisible, setIsGoTopVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsGoTopVisible(window.scrollY > 700);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={isdarkMode ? "dark" : ""}>
      <Toaster />
      <Analytics />
      <div className=" rough-paper-bg relative">
        {/* <div
          className={`fixed right-6 bottom-3 bg-blue-600 z-50 rounded-full text-white p-1.5 md:p-2 cursor-pointer ${
            isGoTopVisible ? "block" : "hidden"
          }`}
          onClick={goTop}
        >
          <FaArrowUp />
        </div> */}

        <Routes>
          {/* With header routes */}
          <Route
            element={<LayoutWithHeader setDark={setIsDarkMode} currentMode={isdarkMode} />}
          >
            <Route path="/" element={<HomePage />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<NotFound />} />
            {/* <Route path="/blog" element={<BlogsPage />} /> */}
            {/* <Route path="/blog/:slug" element={<SingleBlogPage />} /> */}
          </Route>

          {/* Without header routes */}
          <Route path="/projects" element={<ProjectsPage />} />

        </Routes>

        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
