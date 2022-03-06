import Footer from "../../footer/Footer";
import TopNavbar from "../../topNavbar/TopNavbar";
import Modal from 'react-bootstrap/Modal';
import { useState, useEffect, useRef } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

const Examples = () => {
    
    useEffect(()=>{document.title = "Lomdei Learning Platform - Examples of BPL"},[]);
    
    const isMounted = useRef(false);
    const [showMod, setShowMod] = useState(false);
    const [modalIndex, setModalIndex] = useState(0);
    const [examples, setExamples] = useState([]);
    const [resources, setResources] = useState([]);
    const [errorMsg, setErrorMsg] = useState("Data Loading...");

    const getData = async () => {
        if(isMounted.current){
            setErrorMsg("Data loading...");
            const docRef = doc(db, "website-info", "bpl-examples");
            const snapshot = await getDoc(docRef);
            const docResRef = doc(db, "website-info", "bpl-resources");
            const resSnapshot = await getDoc(docResRef);
    
            if (!snapshot.exists || !resSnapshot.exists) {
                setErrorMsg("Sorry! No data available.")
            } else {
                setExamples([...snapshot.data().content]);
                setResources([...resSnapshot.data().content]);
            }
        }
    }
    
        useEffect(()=>{
            isMounted.current = true;
            getData();
            return ()=>{
                isMounted.current = false
            }
        },[]);
        // useEffect(()=>console.log(resources),[resources])

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
                        {resources.length > 0 && resources.map((item,index)=>
                        <p key={`res-${index}`}>
                            <strong><a className="link link-dark" href={item.resource.link} target="_blank" rel="noreferrer">{item.resource.title}</a></strong>
                            <br/>
                            <em>{item.resource.text}</em>
                        </p>
                        )}
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