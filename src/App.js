import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import BlackLayout from "./layout/BlackLayout";
import WhiteLayout from "./layout/WhiteLayout";
import GlobalStyle from "./GlobalStyle";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Contents from "./pages/Contents";
import ContentBox from "./pages/ContentsIn";
import Recruit from "./pages/Recruit";
import Articles from "./pages/Articles";
import ArticleBox from "./pages/ArticleIn";
import MainPage from "./pages/Main";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BlackLayout />}>
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="contents/detail" element={<ContentBox />} />
            <Route path="article/detail" element={<ArticleBox />} />
          </Route>
          <Route path="/" element={<WhiteLayout />}>
            <Route index element={<MainPage />} />
            <Route path="contents" element={<Contents />} />
            <Route path="recruit" element={<Recruit />} />
            <Route path="article" element={<Articles />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
