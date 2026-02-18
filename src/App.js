
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import About from "./pages/AboutMe";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import RequireAuth from "./components/RequireAuth";
export default function App() {
  return (
    <BrowserRouter basename="/new">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<RequireAuth />}>
          <Route path="/" element={<Layout />}>
            <Route index element={<About />} />
            <Route path="resume" element={<Resume />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="achievements" element={<Achievements />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
// Removed duplicate root rendering