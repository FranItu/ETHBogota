import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HeroSlide1 from "./pages/HeroSlide1";
import FrameComponent from "./pages/FrameComponent";
import ScrollPage from "./pages/ScrollPage";
import TextSubsContainer from "./pages/TextSubsContainer";
import HeroSlide11 from "./pages/HeroSlide11";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/frame-8":
        title = "";
        metaDescription = "";
        break;
      case "/scroll-page":
        title = "";
        metaDescription = "";
        break;
      case "/textsubs-container":
        title = "";
        metaDescription = "";
        break;
      case "/heroslide1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HeroSlide1 />} />

      <Route path="/frame-8" element={<FrameComponent />} />

      <Route path="/scroll-page" element={<ScrollPage />} />

      <Route path="/textsubs-container" element={<TextSubsContainer />} />

      <Route path="/heroslide1" element={<HeroSlide11 />} />
    </Routes>
  );
}
export default App;
