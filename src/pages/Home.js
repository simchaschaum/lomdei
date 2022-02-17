import TopNavbar from "../topNavbar/TopNavbar";
import Footer from "../footer/Footer";
import TuM from "./pdfs/Torah_Umesorah_Letter.pdf";
import newsletter1 from "./lomdei/newsletters/newsletter1.pdf";

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
import Newsletter_1 from "../pics/homepage/Newsletter 1.PNG";
import CoT_Flier from "../pics/homepage/CoT Flier.jpg";
import Carousel from 'react-bootstrap/Carousel';


const Home = ()=>{
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
                        The Lomdei Advantage
                    </strong>
                </h2>
                <h6>
                    Lomdei creates and services our schools in the most impactful way by appreciating
                    and recognizing their specific religious needs and values. Click to learn more.
                </h6>
            </a>
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100" src={IMG_0597} alt="Teacher supports students in small group"/>
            <a className="carousel-link" href="./bpl/pd-program">
                <h2>
                    <strong>
                        Comprehensive Support
                    </strong>
                </h2>
                <h6>
                    Lomdei supports the growth of each Lomdei Platform user and Lomdei BPL program participant with coaching, resources, and supportive communities. Click to learn more.                            
                </h6>
            </a>
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100" src={IMG_0606} alt="Children learn with the Lomdei Learning Platform" />
            <a className="carousel-link" href="./platform/about-platform">
                <h2>
                    <strong>
                        The Lomdei Learning Platform
                    </strong>
                </h2>
                <h6>
                    Lomdei's Learning Platform is a simple, yet powerful tool, equipped with our virtual library of skill building content in all areas of Limudei Kodesh.  Click to learn more. 
                </h6>
            </a>
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100" src={IMG_0594} alt="BPL in action in a classroom" />
            <a className="carousel-link" href="./bpl/advantage">
                <h2>
                    <strong>
                       The Lomdei BPL Program
                    </strong>
                </h2>
                <h6>
                   Lomdei’s BPL Program works to enhance Jewish Education by training teachers in the planning, implementation and sustaining of practices in Blended & Personalized Learning.
                   Click to learn more.                            
                </h6>
            </a>
        </Carousel.Item>
        </Carousel>
    </section>
    <section id="intro-mission">
        <h1>
            Transforming Jewish Schools and Mosdos Torah Through Our Tailored Blended and Personalized Learning Program and Learning Platform        </h1>
        <h3>
            Lomdei is leading the way, providing custom training, coaching, and support for our BPL Program, along with our premier, skill-based Torah learning platform - to empower each rebbe and morah in creating the most dynamic, personalized and educationally sound experience for students.
        </h3>
        <h2><strong>להגדיל תורה ולהאדירה</strong></h2> 
        <a className="link-dark" href="./lomdei/schools">
            <p>See a list of schools who have joined the movement and are part of this growing community</p>
        </a>
        <a className="link-dark" href="./lomdei/contact">
            <p>Contact us to join, learn more, or to be in touch with schools who benefit from Lomdei's services</p>
        </a>
    </section>
    <section>
        <div id="intro-mission-inner">
            <div className="intro-mission-half">
                <div className="intro-mission-txt">
                    <div>
                        <h2><strong>Lomdei Learning Platform</strong></h2>
                        <h4>
                            The Premier Torah Learning Platform in Jewish Day Schools equipped with a library of skill building Limudei Kodesh content.
                            <br/>
                            <a className="link link-dark" rel="noreferrer" target="_blank" href={TuM}>Endorsed by Torah Umesorah</a>
                        </h4>
                    </div>
                    <a href="./platform/about-platform" className="link-btn">Learn More</a>
                </div>
                <div className="white-fade-cover"></div>
                <img src={lomdei_pic_1} alt="Closeup of Lomdei Learning Platform screen"/>
            </div>
            <div  className="intro-mission-half">
                <div className="intro-mission-txt">
                    <div>
                        <h2><strong>Lomdei BPL Program</strong></h2>
                        <h4>
                            The leading professional development service in Blended and Personalized Learning geared for a  Torah environment and the Limudei Kodesh class.
                        </h4>
                    </div>
                    <a href="./bpl/advantage" className="link-btn">Learn More</a>
                </div>
                <div className="white-fade-cover"></div>
                <img src={group_work} alt="Students learning collaboratively in a small group"/>
            </div>
        </div>
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
        <div className="events-inner">
            <a href={newsletter1} target="_blank" rel="noreferrer">
                <div className="events-inner-background">
                    <img className="events-img" src={Newsletter_1} alt="Lomdei's Newsletter 1"/>
                    <p className="events-txt">Lomdei's Latest Newsletter</p>
                </div>
            </a>
            <a href="https://www.linkedin.com/posts/jeremy-hartstein-5b56878_jewisheducation-blendedlearning-personalizedlearning-activity-6881287034078543872-zlf8" target="_blank" rel="noreferrer">
                <div className="events-inner-background">
                    <img className="events-img" src="https://www.torahumesorah.org/images/db/6218-School-Culture-Ad2-01-01-01.png" alt="Torah Umesorah Conference Flier"/>
                    <p className="events-txt">Lomdei at the Torah Umesorah Conference</p>
                </div>
            </a>
            <a href={CoT_Flier} target="_blank" rel="noreferrer">
                <div className="events-inner-background">
                    <img className="events-img" src={CoT_Flier} alt="Community of Teachers Flier"/>
                    <p className="events-txt">Lomdei Community of Teachers</p>
                </div>
            </a>
        </div>
    </section>
    <Footer />
  </div>
  
        </>
    )
}

export default Home;