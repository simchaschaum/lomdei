import Footer from "../../footer/Footer";
import TopNavbar from "../../topNavbar/TopNavbar";
import { useEffect, useState, useRef } from "react";
import { db } from "../../firebase/firebase";
import { doc, getDoc } from 'firebase/firestore';

const AboutPlatform = () => {

    const countersRef = useRef();
    const isMounted = useRef(false);
    const [errorMsg, setErrorMsg] = useState("Data Loading...");
    const [counters, setCounters] = useState([]);

    const getData = async () => {
        if(isMounted.current){
            setErrorMsg("Data loading...");
            const docRefPlatforms = doc(db, "website-info", "platform-counters");
            const snapshot = await getDoc(docRefPlatforms);
            if (!snapshot.exists) {
                setErrorMsg("Sorry! No data available.")
            } else {
                setCounters([...snapshot.data().content]);
            }
        }
    }

    useEffect(()=>{
        isMounted.current = true;
        getData();
        return ()=>(isMounted.current = false);
    },[]);
    useEffect(()=>console.log(counters),[counters])

    useEffect(() => {
        const countersTop = countersRef.current.getBoundingClientRect().top;
        const countersBottom = countersRef.current.getBoundingClientRect().bottom;
        if (countersTop > 0 && countersBottom < (window.innerHeight || document.documentElement.clientHeight)) {
            count();
        } else {
            window.addEventListener("scroll", handleScroll);
            return () => (window.removeEventListener("scroll", handleScroll));
        }
    }, [])

    const handleScroll = () => {
        const countersTop = countersRef.current.getBoundingClientRect().top;
        const countersBottom = countersRef.current.getBoundingClientRect().bottom;
        if (countersTop > 0 && countersBottom < (window.innerHeight || document.documentElement.clientHeight)) {
            count();
        }
    }

    const count = () => {
        const counters = document.querySelectorAll('.counter');
        const speed = 50;
        counters.forEach(counter => {
            const updateCount = () => {
                const target = parseInt(counter.getAttribute('data-target'));
                const count = parseInt(counter.innerText);
                const increment = Math.trunc(target / speed);
                if (count < target) {
                    counter.innerText = count + increment;
                    setTimeout(() => {
                        updateCount()
                    }, 25);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        })
    }

    return (<div>
        <div id="pageContainer">
            <TopNavbar />
            <section id="aboutLomdei">
                <div className="title">
                    <h1>The Lomdei Learning Platform: Simple, Yet Powerful.</h1>
                    <h5>
                        The Lomdei Learning Platform, highly recommended and endorsed by Torah Umesorah
                        (<a href="../../Torah_Umesorah_Letter.pdf" target="_blank" className="link link-dark">Click here to
                            view Rabbi Nojowitz's letter</a>), is aimed at delivering a simple yet powerful Limudei
                        Kodesh educational tool focused on skill building, formative and summative assessments
                        and rich data tracking for both teachers and students.
                    </h5>
                    <div>
                        <a className="link-btn" href="../platform/lomdei platform brochure.pdf" target="_blank">View Our Brochure</a>
                        <a className="link-btn" href="#videoAnchor">Watch Our Videos</a>
                    </div>
                </div>
            </section>

            <section id="counters-section" ref={countersRef}>
                <h2>The Lomdei Learning Platform is Currently Used By:</h2>
                <div id="counters">
                    <div>
                        <div className="counters-inner">
                            {counters.length>0 && <h3 id="schoolsNum" className="counter" data-target={counters.length > 0 ? counters[0].info.schools : 0}>0</h3>}
                            <h5>Schools</h5>
                        </div>
                        <div className="counters-inner">
                            <h3 id="studentsNum" className="counter" data-target="8540">0</h3>
                            <h5>Students</h5>
                        </div>
                    </div>
                    <div>
                        <div className="counters-inner">
                            <h3 id="classesNum" className="counter" data-target="640">0</h3>
                            <h5>Classes</h5>
                        </div>
                        <div className="counters-inner">
                            <h3 id="teachersNum" className="counter" data-target="300">0</h3>
                            <h5>Teachers</h5>
                        </div>
                    </div>
                </div>
            </section>

            <section id="promoVideos">
                <span id="videoAnchor" className="anchor"></span>
                <iframe className="video" src="https://www.youtube-nocookie.com/embed/H0s2SCu1bEo?rel=0" loading="lazy" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <iframe className="video" src="https://www.youtube-nocookie.com/embed/gfV5DNG4yJk?rel=0" loading="lazy" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </section>

            <section className="bkg-dark">
                <div className="learn-more">
                    <h2>Learn More About Lomdei Learning Platform</h2>
                </div>
                <div className="lrnMoreLnks-container">
                    <a className="lrnMoreLnk" href="./features.html">
                        <img src="../../pictures/Platform/platform-pic (1).jpg" alt="Students Learn with the Lomdei Learning Platgform" />
                        <h5>Features of the Learning Platform</h5>
                    </a>
                    <a className="lrnMoreLnk" href="./benefits.html">
                        <img src="../../pictures/Platform/platform-pic (2).jpeg" alt="Students Learn with the Lomdei Learning Platgform" />
                        <h5>The Benefits of the Learning Platform</h5>
                    </a>
                    <a className="lrnMoreLnk" href="./kosher-devices.html">
                        <img src="../../pictures/Platform/platform-pic (3).jpg" alt="Students Learn with the Lomdei Learning Platgform" />
                        <h5>Use of the Platform on Kosher Devices</h5>
                    </a>
                    <a className="lrnMoreLnk" href="./services.html">
                        <img src="../../pictures/Platform/platform-pic (4).jpg" alt="Students Learn with the Lomdei Learning Platgform" />
                        <h5>Lomdei Platform Services</h5>
                    </a>
                </div>
            </section>

        </div>
        <Footer />
    </div>)
}

export default AboutPlatform;