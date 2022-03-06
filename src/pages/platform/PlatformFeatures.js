import TopNavbar from "../../topNavbar/TopNavbar";
import Footer from "../../footer/Footer";
import { useState, useEffect, useRef } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

const PlatformFeatures = () => {
    useEffect(()=>{document.title = "Lomdei Learning Platform - Features"},[]);
    const isMounted = useRef(false);
    const [contentArr, setContentArr] = useState([]);
    const [errorMsg, setErrorMsg] = useState("Data Loading...");

    const getData = async () => {
        if(isMounted.current){
            setErrorMsg("Data loading...");
            const docRef = doc(db, "website-info", "platform-features");
            const snapshot = await getDoc(docRef);
            if (!snapshot.exists) {
                setErrorMsg("Sorry! No data available.")
            } else {
                setContentArr([...snapshot.data().content]);
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
        // useEffect(()=>console.log(contentArr),[contentArr])

    return (<div>
        <div className="pageContainer">
            <TopNavbar/>
            <section className="header">
                <h2>Lomdei Plaform Features</h2>
            </section>
            <section>
                <div className="text-pic-side">
                    <div className="tps-txt">
                        <h4>
                            {contentArr.length > 0 ? contentArr[0].text.title : "Data Loading..."}
                        </h4>
                        <p>
                            {contentArr.length > 0 && contentArr[0].text.text}
                        </p>
                        <p>
                            {contentArr.length > 0 && contentArr[1].text.text}
                        </p>
                    </div>
                    <div className="tps-pic">
                        <img src="../../pictures/Platform/platform-pic (4).jpg" alt="Students Learn with the Lomdei Platform" />
                    </div>
                </div>
                <div className="text-pic-side">
                    <div className="tps-txt">
                        <h4>
                            {contentArr.length > 0 && contentArr[2].text.title}
                        </h4>
                        <p>
                            {contentArr.length > 0 && contentArr[2].text.text}
                        </p>
                        <h4>
                            {contentArr.length > 0 && contentArr[3].text.title}
                        </h4>
                        <p>
                            {contentArr.length > 0 && contentArr[3].text.text}
                        </p>
                    </div>
                    <div className="tps-pic">
                        <img src="../../pictures/Platform/platform-pic (3).jpg" alt="Students Learn with the Lomdei Platform" />
                    </div>
                </div>
                <div className="text-pic-side">
                    <div className="tps-txt">
                        <h4>
                            {contentArr.length > 0 && contentArr[4].text.title}
                        </h4>
                        <p>
                            {contentArr.length > 0 && contentArr[4].text.text}
                        </p>
                        <h4>
                            {contentArr.length > 0 && contentArr[5].text.title}
                        </h4>
                        <p>
                            {contentArr.length > 0 && contentArr[5].text.text}
                        </p>
                    </div>
                    <div className="tps-pic">
                        <img src="../../pictures/Platform/platform-pic (5).jpg" alt="Students Learn with the Lomdei Platform" />
                    </div>
                </div>
            </section>
        </div>
        <Footer />
    </div>)
}

export default PlatformFeatures;

