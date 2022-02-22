import TopNavbar from "../topNavbar/TopNavbar";
import Footer from "../footer/Footer";
import TuM from "./pdfs/Torah_Umesorah_Letter.pdf";
import NewsItems from "./lomdei/NewsItems";
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";

// images:
import BPL_in_action from "../pics/homepage/BPL in action.jpg";
import IMG_0597 from "../pics/homepage/IMG_0597.jpg";
import IMG_0606 from "../pics/homepage/IMG_0606.jpg";
import IMG_0594 from"../pics/homepage/IMG_0594.jpg";
import lomdei_pic_1 from "../pics/homepage/lomdei_pic_1.JPG";
import group_work from "../pics/homepage/group work.jpg";
import IMG_0605 from "../pics/homepage/IMG_0605.jpg";
import experts from "../pics/homepage/experts.jpg";
import LCoT_Dec_21_6 from "../pics/homepage/LCoT Dec 21 (6).PNG";
import IMG_0615 from "../pics/homepage/IMG_0615.jpg";
import IMG_20211223 from "../pics/homepage/IMG-20211223-WA0001.jpg";
import Carousel from 'react-bootstrap/Carousel';

const Home = ()=>{
    const [showVid, setShowVid] = useState(false);
    const [modalIndex, setModalIndex] = useState(0);
    const [videoUrls, setVideoUrls] = useState(["https://player.vimeo.com/video/646548530?h=3f5d4e6f27&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479", "https://www.youtube-nocookie.com/embed/H0s2SCu1bEo?rel=0"])

    const handleShow = (n) => {
        setShowVid(true);
        setModalIndex(n)
      }
      const handleClose = () => {
        setShowVid(false)
      }

    return(
        <>
    
    <div id="pageContainer">
    <TopNavbar />
  
   {/*Intro Carousel */}
    <section id="intro-carousel">
    <Carousel interval={7500}>
        <Carousel.Item>
            <img className="d-block w-100" src={BPL_in_action} alt="BPL in action in a Lomdei trained classroom" />
            <a className="carousel-link" href="./bpl/advantage">
                <h2>
                    <strong>
                        The Lomdei Advantage: Shared Values
                    </strong>
                </h2>
            </a>
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100" src={IMG_0597} alt="Teacher supports students in small group"/>
            <a className="carousel-link" href="./bpl/pd-program">
                <h2>
                    <strong>
                     Comprehensive Support: Coaching, Resources, and Community
                    </strong>
                </h2>
            </a>
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100" src={IMG_0606} alt="Children learn with the Lomdei Learning Platform" />
            <a className="carousel-link" href="./platform/about-platform">
                <h2>
                    <strong>
                        The Lomdei Learning Platform: Simple, Powerful Learning Software
                    </strong>
                </h2>
            </a>
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100" src={IMG_0594} alt="BPL in action in a classroom" />
            <a className="carousel-link" href="./bpl/advantage">
                <h2>
                    <strong>
                        The Lomdei BPL Program: <br/>
                        Cutting-Edge Professional Development for Rebbeim and Moros
                    </strong>
                </h2>
            </a>
        </Carousel.Item>
        </Carousel>
    </section>
    <section>
        <div id="intro-mission-inner">
            <div className="intro-mission-half">
                <div className="intro-mission-txt">
                    <div>
                        <h2><strong>Lomdei Learning Platform</strong></h2>
                        <h4>
                            The Premier Torah Learning Software used in Jewish Day Schools
                            <br/>
                            <a className="link link-dark" rel="noreferrer" target="_blank" href={TuM}>Endorsed by Torah Umesorah</a>
                        </h4>
                    </div>
                    <div className="btn-box">
                            <button href="./pages/platform/about-platform.html" className="link-btn">Learn More</button>
                            <button onClick={()=>handleShow(0)} className="link-btn">Watch the Video</button>
                    </div>
                </div>
                <div className="white-fade-cover"></div>
                <img src={lomdei_pic_1} alt="Closeup of Lomdei Learning Platform screen"/>
            </div>
            <div  className="intro-mission-half">
                <div className="intro-mission-txt">
                    <div>
                        <h2><strong>Lomdei BPL Program</strong></h2>
                        <h4>
                            The leading professional development service in Blended and Personalized Learning (BPL)
                        </h4>
                    </div>
                    <div className="btn-box">
                        <button href="./pages/BPL/about-BPL.html" className="link-btn">What is BPL?</button>
                        <button href="./pages/BPL/about-BPL.html" className="link-btn">Why Lomdei BPL?</button>
                        <button onClick={()=>handleShow(1)} className="link-btn">Watch the Video</button>
                    </div>
                </div>
                <div className="white-fade-cover"></div>
                <img src={group_work} alt="Students learning collaboratively in a small group"/>
            </div>
        </div>
    </section>
    {/* Popup Modals  */}
    <Modal show={showVid} onHide={handleClose}>
            <Modal.Body>
              <iframe src={videoUrls[modalIndex]} title="Lomdei Video"></iframe>
            </Modal.Body>
    </Modal>
    <section id="intro-mission">
        <h1>
            Lomdei is leading the way, empowering each rebbe and morah to create the most <strong>dynamic</strong>, <strong>personalized</strong>, and <strong>educationally sound</strong> 
            experience for their students! 
        </h1>
        <ul>
            <li>
                <h2>
                    <strong>The Lomdei BPL Program:</strong>
                </h2>
                <h3>
                    <em>Our cutting-edge professional development in Blended and Personalized Learning (BPL), providing custom training, coaching, and support
                        for each rebbe and morah.</em>
                </h3>
            </li>
            <li>
                <h2>
                    <strong>The Lomdei Learning Platform:</strong>
                </h2>
                <h3>
                    <em>Our premier Torah-learning software, used by hundreds of students throughout the world</em>
                </h3>
            </li>
        </ul>
        <h2><strong>להגדיל תורה ולהאדירה</strong></h2> 
        <a className="link-dark" href="./lomdei/schools">
            <p>See a list of schools who have joined the movement and are part of this growing community</p>
        </a>
        <a className="link-dark" href="./lomdei/contact">
            <p>Contact us to join, learn more, or to be in touch with schools who benefit from Lomdei's services</p>
        </a>
    </section>
    <section id="intro-features" className="bkg-dark">
        <div id="unique" className="features-outer">
            <h2>What Makes Lomdei Unique</h2>
            <div className="features-inner">
                <div className="provide-feature">
                    <img src={IMG_0605} alt="A rebbe leads learning in small group"/>
                    <h5>Custom BPL Program developed by expert mechanchim and geared for Rabbaim and Moros</h5>
                </div>
                <div className="provide-feature">
                    <img src={experts} alt="Mrs. Chani Richmond meets with school heads"/>
                    <h5>BPL Coaching Training Program for Rabbaim and Moros</h5>
                </div>
                <div className="provide-feature">
                    <img src={LCoT_Dec_21_6} alt="Lomdei Community of Teachers Zoom screen"/>
                    <h5>Supportive community of Lomdei BPL and Platform users</h5>
                </div>
                <div className="provide-feature">
                    <img src={IMG_0615} alt="A student learns with the Lomdei Platform"/>
                    <h5>Unique Torah Learning Platform with thousands of skill-building questions</h5>
                </div>
                <div className="provide-feature">
                    <img src={IMG_20211223} alt="Students and teacher learn in a small group"/>
                    <h5>Options for use without internet access</h5>
                </div>
                <div className="provide-feature">
                    <img src={lomdei_pic_1} alt="Closeup of Lomdei Learning Platform screen"/>
                    <h5>Comprehensive teacher support and data-driven feedback for Principals</h5>
                </div>
            </div>
        </div>
    </section>
    <section className="events">
        <h1>The Latest at Lomdei</h1>
        <NewsItems />
    </section>
    <Footer />
  </div>
  
        </>
    )
}

export default Home;