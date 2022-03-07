import TopNavbar from "../../topNavbar/TopNavbar";
import Footer from "../../footer/Footer";
import { useState, useEffect, useRef } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

const PlatformVideoTutorials = () => {
    const isMounted = useRef(false);
    const [contentArr, setContentArr] = useState([]);
    const [errorMsg, setErrorMsg] = useState("Data Loading...");
    const [showDropup, setShowDropup] = useState(false);

    const getData = async () => {
        if(isMounted.current){
            setErrorMsg("Data loading...");
            const docRef = doc(db, "website-info", "platform-video-tutorials");
            const snapshot = await getDoc(docRef);
            if (!snapshot.exists) {
                setErrorMsg("Sorry! No data available.")
            } else {
                setContentArr([...snapshot.data().content]);
            }
        }
    }

    const handleScroll = () => {
        if(window.scrollY>500){
            setShowDropup(true)
        } else {
            setShowDropup(false)
        }
    }
    useEffect(()=>{
        window.removeEventListener('scroll', handleScroll);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    })
    
        useEffect(()=>{
            isMounted.current = true;
            getData();
            return ()=>{
                isMounted.current = false
            }
        },[]);
        useEffect(()=>console.log(contentArr),[contentArr])
    return (<div>
        <div className="pageContainer">
            <TopNavbar />
            <section className="header">
                <h2>Video Tutorials</h2>
            </section>
            <div  className="list-group" id="contents">
                {contentArr.length > 0 && 
                    contentArr.map((video,index)=><a key={`a-${index}`} className="list-group-item list-group-item-action" href={`#video${index}`}>{video.video.title}</a>)
                }
            </div>
            {showDropup && <DropdownButton id="dropupButton" className="contentsDropup" drop={"up"} title={`Videos`}>
                {contentArr.length > 0 && contentArr.map((video,index)=><Dropdown.Item key={`du-${index}`} href={`#video${index}`}>{video.video.title}</Dropdown.Item>)}
            </DropdownButton>}
            <section id="tVideos">
                {contentArr.length > 0 ? 
                contentArr.map((item,index)=>
                    <div className="videoContainer" key={`v-${index}`}>
                    <span className="videoAnchor" id={`video${index}`}></span>
                    <h3>{item.video.title}</h3>
                    <iframe className="tVideo" src={`${item.video.url}?rel=0`} loading="lazy" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                    ): "Videos Loading... "}
            </section>
        </div>
        <Footer />
    </div >)
}

export default PlatformVideoTutorials;