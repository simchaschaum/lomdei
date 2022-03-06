import Footer from "../../footer/Footer";
import TopNavbar from "../../topNavbar/TopNavbar";
import { useState, useEffect, useRef } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

const PdProgram = () => {

    useEffect(()=>{document.title = "Lomdei Learning Platform - Our BPL PD Program"},[]);
    
    const [textArr, setTextArr] = useState([]);
    const [errorMsg, setErrorMsg] = useState("Data loading...");

    const isMounted = useRef(false);

    const getData = async () => {
        if(isMounted.current){
            setErrorMsg("Data loading...");
            const docRef = doc(db, "website-info", "bpl-program");
            const snapshot = await getDoc(docRef);
            if (!snapshot.exists) {
                setErrorMsg("Sorry! No data available.")
            } else {
                setTextArr([...snapshot.data().content]);
            }
        }
    }
    
        useEffect(()=>{
            isMounted.current = true;
            getData();
            return () => (isMounted.current = false)
        },[]); 
        // useEffect(()=>console.log(textArr),[textArr])
    return (<div>
        <div className="pageContainer">
          <TopNavbar />
            <section className="header">
                <h1>Lomdei's Professional Development Program</h1>
                <h2>in Blended and Personalized Learning</h2>
            </section>
            {/* Our Services Section */}
            <section>
                <div className="intro-text bkg-dark">
                    <h4>
                        {textArr.length > 0 && textArr[0].text.text1}
                    </h4>
                    <h4>
                        {textArr.length > 0 && textArr[0].text.text2}
                    </h4>
                </div>
            </section>
            <section>
                <div className="text-pic-side">
                    <div className="tps-txt">
                        <h4>{textArr.length > 0 && textArr[1].text.title}</h4>
                        <p>
                            {textArr.length > 0 && textArr[1].text.text1}
                        </p>
                        <p>
                            {textArr.length > 0 && textArr[1].text.text2}
                        </p>
                    </div>
                    <div className="tps-pic">
                        <img src="../../pictures/BPL/IMG_0598.jpg" alt="Students Learn in a BPL classroom" />
                    </div>
                </div>
                <div className="text-pic-side">
                    <div className="tps-txt">
                        <h4>{textArr.length > 0 && textArr[2].text.title}</h4>
                        <p>
                            {textArr.length > 0 && textArr[2].text.text1}
                        </p>
                        <p>
                            {textArr.length > 0 && textArr[2].text.text2}
                        </p>
                    </div>
                    <div className="tps-pic">
                        <img src="../../pictures/BPL/HALBVisit12_7_21 (6).jpeg" alt="Students learn on the Lomdei Platform" />
                    </div>
                </div>
                <div className="text-pic-side">
                    <div className="tps-txt">
                        <h4>{textArr.length > 0 && textArr[3].text.title}</h4>
                        <p>
                            {textArr.length > 0 && textArr[3].text.text1}
                        </p>
                        <h5>
                            {textArr.length > 0 && textArr[4].text.title}
                        </h5>
                        <p>
                            <strong>Training:</strong>
                            {textArr.length > 0 && textArr[4].text.text1}
                            <br />
                            <strong>Coaching/Mentoring:</strong>
                            {textArr.length > 0 && textArr[4].text.text2}
                        </p>
                        <h5>
                            {textArr.length > 0 && textArr[5].text.title}
                        </h5>
                        <p>
                            <strong>Training:</strong>
                            {textArr.length > 0 && textArr[5].text.text1}
                                <br />
                                <strong>Coaching/Mentoring:</strong>
                            {textArr.length > 0 && textArr[5].text.text2}
                        </p>
                    </div>
                    <div className="tps-pic">
                        <img src="../../pictures/BPL/IMG_0604.jpg" alt="Students learn on the Lomdei Platform" />
                    </div>
                </div>
                <div className="learn-more">
                    <h4>
                        To learn more about how Lomdei's BPL Program can benefit your school and teachers, please contact us.
                    </h4>
                    <a className="link-btn" href="../lomdei/contact.html">Contact Us</a>
                </div>
            </section>




            <div className="modal fade" id="packagesModal" tabIndex="-1" aria-labelledby="packagesModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="packagesModalLabel">Professional Development Packages</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>
                                Our professional development will train a cohort of teachers over the course of a school year.
                                A second cohort of teachers can be added in the following school year with the additional options below.
                            </p>
                            <h5>
                                Basic Training Package
                            </h5>
                            <p>
                                <strong>Training:</strong>
                                10 hours of training over 3 sessions during the first 4 months of school
                                for the selected cohort of teachers. <br />
                                    <strong>Coaching/Mentoring:</strong>
                                    8 half-hour monthly follow-up coaching/mentoring sessions for each teacher in the cohort
                            </p>
                            <h5>
                                Advanced Training Package
                            </h5>
                            <p>
                                <strong>Training:</strong>
                                10 hours of training over 3 sessions during the first 4 months of school
                                for the selected cohort of teachers. <br />
                                    <strong>Coaching/Mentoring:</strong>
                                    16 half-hour bi-monthly follow-up coaching/mentoring sessions for each teacher in the cohort
                                    The option of in-person meeting and classroom observations is available as well.
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <Footer />
    </div>)
}

export default PdProgram;