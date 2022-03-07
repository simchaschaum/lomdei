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
import BplBenefits from "./pages/bpl/BplBenefits";
import Examples from "./pages/bpl/Examples";
import PdProgram from "./pages/bpl/PdProgram";
import AboutPlatform from "./pages/platform/AboutPlatform";
import PlatformBenefits from "./pages/platform/PlatformBenefits";
import PlatformFeatures from "./pages/platform/PlatformFeatures";
import KosherDevices from "./pages/platform/KosherDevices";
import PlatformServices from "./pages/platform/PlatformServices";
import PlatformVideoTutorials from "./pages/platform/PlatformVideoTutorials";
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
          <Route path="/bpl/benefits" element={<BplBenefits/>}/>
          <Route path="/bpl/examples-resources" element={<Examples/>}/>
          <Route path="/bpl/pd-program" element={<PdProgram/>}/>
          <Route path="/platform/about-platform" element={<AboutPlatform />}/>
          <Route path="/platform/benefits" element={<PlatformBenefits/>}/>
          <Route path="/platform/features" element={<PlatformFeatures/>}/>
          <Route path="/platform/kosher-devices" element={<KosherDevices/>}/>
          <Route path="/platform/services" element={<PlatformServices/>}/>
          <Route path="/platform/video-tutorials" element={<PlatformVideoTutorials/>}/>
        </Routes>
  );
}

export default App;
