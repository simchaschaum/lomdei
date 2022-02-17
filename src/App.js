import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import AboutLomdei from './pages/lomdei/about-lomdei';
import Contact from "./pages/lomdei/Contact";
import Gallery from "./pages/lomdei/Gallery";
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
    <Route path="/lomdei/grants" element={<Home/>}/>
    <Route path="/lomdei/news" element={<Home/>}/>
    <Route path="/lomdei/team" element={<Home/>}/>
    <Route path="/lomdei/schools" element={<Home/>}/>
    <Route path="/bpl/advantage" element={<Home/>}/>
    <Route path="/bpl/benefits" element={<Home/>}/>
    <Route path="/bpl/examples-resources" element={<Home/>}/>
    <Route path="/bpl/pd-program" element={<Home/>}/>
    <Route path="/platform/about-platform" element={<Home/>}/>
    <Route path="/platform/benefits" element={<Home/>}/>
    <Route path="/platform/features" element={<Home/>}/>
    <Route path="/platform/kosher-devices" element={<Home/>}/>
    <Route path="/platform/services" element={<Home/>}/>
    <Route path="/platform/video-tutorials" element={<Home/>}/>
  </Routes>
  );
}

export default App;
