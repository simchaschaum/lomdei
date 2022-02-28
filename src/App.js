import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import AboutLomdei from './pages/lomdei/about-lomdei';
import Contact from "./pages/lomdei/Contact";
import Gallery from "./pages/lomdei/Gallery";
import Grants from "./pages/lomdei/Grants";
import News from "./pages/lomdei/News";
import Team from "./pages/lomdei/Team";
import Schools from "./pages/lomdei/Schools";
import Advantage from "./pages/bpl/Advantage";
import Benefits from "./pages/bpl/Benefits";
import Examples from "./pages/bpl/Examples";
import PdProgram from "./pages/bpl/PdProgram";
import AboutPlatform from "./pages/platform/AboutPlatform";
import './styles/bpl.css';
import './styles/general.css';
import './styles/home.css';
import './styles/lomdei.css';
import './styles/platform.css';

function App() {

  return (
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/lomdei/about-lomdei" element={<AboutLomdei/>}/>
          <Route path="/lomdei/contact" element={<Contact/>}/>
          <Route path="/lomdei/gallery" element={<Gallery/>}/>
          <Route path="/lomdei/grants" element={<Grants/>}/>
          <Route path="/lomdei/news" element={<News/>}/>
          <Route path="/lomdei/team" element={<Team/>}/>
          <Route path="/lomdei/schools" element={<Schools/>}/>
          <Route path="/bpl/advantage" element={<Advantage/>}/>
          <Route path="/bpl/benefits" element={<Benefits/>}/>
          <Route path="/bpl/examples-resources" element={<Examples/>}/>
          <Route path="/bpl/pd-program" element={<PdProgram/>}/>
          <Route path="/platform/about-platform" element={<AboutPlatform />}/>
          <Route path="/platform/benefits" element={<Home/>}/>
          <Route path="/platform/features" element={<Home/>}/>
          <Route path="/platform/kosher-devices" element={<Home/>}/>
          <Route path="/platform/services" element={<Home/>}/>
          <Route path="/platform/video-tutorials" element={<Home/>}/>
        </Routes>
  );
}

export default App;
