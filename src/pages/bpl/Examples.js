import Footer from "../../footer/Footer";
import TopNavbar from "../../topNavbar/TopNavbar";
import Modal from 'react-bootstrap/Modal';
import { useState, useEffect } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

const Examples = () => {
    const [showMod, setShowMod] = useState(false);
    const [modalIndex, setModalIndex] = useState(0);
    const [examples, setExamples] = useState([])
    const [errorMsg, setErrorMsg] = useState("Data Loading...");

    const getData = async () => {
        setErrorMsg("Data loading...");
        const docRef = doc(db, "website-info", "bpl-examples");
        const snapshot = await getDoc(docRef);
        if (!snapshot.exists) {
            setErrorMsg("Sorry! No data available.")
        } else {
            setExamples([...snapshot.data().content]);
        }
        }
    
        useEffect(()=>getData(),[]);
        useEffect(()=>console.log(examples),[examples])

    const handleShow = (n) => {
        setModalIndex(n);
        setShowMod(true);
    }
    const handleClose = () => {
        setShowMod(false);
    }

    return (<div>
        <div className="pageContainer">
            <TopNavbar/>
            <section className="header">
                <h1>Examples and Further Resources</h1>
                <h2>for Blended and Personalized Learning</h2>
            </section>
            {/* BPL Examples Section */}
            <section>
                <div className="lrnMoreLnks-container bkg-dark">
                    <div className="learn-more">
                        <h2>
                            Examples of Blended and Personalized Learning <br/>
                                in Limudei Kodesh
                        </h2>
                    </div>
                    {examples.length > 0 && examples.map((item,index)=>
                        <button key={`ex-${index}`} className={'lrnMoreLnk'} onClick={()=>handleShow(index)}>
                            <img src={examples[index].example.picture} alt={examples[index].example.pictureAltText}/>
                            <h5>
                             {examples[index].example.title}
                            </h5>
                        </button>
                    )}
                </div>

            </section>
            {/* Modals for example: */}
            {/* Example 1 */}
            <Modal show={showMod} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h5>{examples.length > 0 && examples[modalIndex].example.title}</h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{examples.length > 0 && examples[modalIndex].example.text}</p>
                </Modal.Body>
            </Modal>
            <section>
                <div className="learn-more">
                    <h2>Online Resources on Blended and Personalized Learning</h2>
                </div>
                <div className="text-pic-side">
                    <div className="tps-txt">
                        <p>
                            <strong><a className="link link-dark" href="https://catlintucker.com/" target="_blank">Dr. Catlin R. Tucker's Website (catlintucker.com)</a></strong>
                            <br/>
                                <em>Dr. Tucker is a noted expert on Blended and Personalized Learning.  Her site contains resources for BPL, including her blog with articles.</em>
                        </p>
                        <p>
                            <strong><a className="link link-dark" href="https://blog.betterlesson.com/" target="_blank">BetterLesson (blog.betterlesson.com)</a></strong>
                            <br/>
                                <em>BetterLesson's site has a large amount of resources for teaching.  Their blog contains articles on Blended and Personalized Learning and many other subjects in the field of education.</em>
                        </p>
                        <p>
                            <strong><a className="link link-dark" href="https://www.iste.org/" target="_blank">The International Society for Technology in Education (iste.org)</a></strong>
                            <br/>
                                <em>ISTE supports the use of technology to enhance teaching and learning and has many resources on Blended and Personalized Learning.</em>
                        </p>
                        <p>
                            <strong><a className="link link-dark" href="https://www.edutopia.org/topic/blended-learning" target="_blank">Edutopia (edutopia.org/topic/blended-learning)</a></strong>
                            <br/>
                                <em>Edutopia is a popular website with many resources on many topictures in education, including Blended Learning.</em>
                        </p>
                    </div>
                    <div className="tps-pic">
                        <img src="../../pictures/lomdei_pic_6.JPG" alt="children Learning Torah"/>
                    </div>
                </div>
            </section>
            <Footer />

        </div>
    </div>)
}

export default Examples;