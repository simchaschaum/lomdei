import Footer from "../../footer/Footer";
import TopNavbar from "../../topNavbar/TopNavbar";
import { db } from "../../firebase/firebase";
import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState, useRef } from "react";


const PlatformBenefits = () => {

    const [content, setContent] = useState([]);
    const [errorMsg, setErrorMsg] = useState("Data Loading...");

    const isMounted = useRef(false);

    const getData = async () => {
        if(isMounted.current){
            setErrorMsg("Data loading...");
            const docRefPlatforms = doc(db, "website-info", "platform-benefits");
            const snapshot = await getDoc(docRefPlatforms);
            if (!snapshot.exists) {
                setErrorMsg("Sorry! No data available.")
            } else {
                setContent([...snapshot.data().content]);
            }
        }
    }

    useEffect(()=>{
        isMounted.current = true;
        getData();
        return ()=>(isMounted.current = false);
    },[]);
    // useEffect(()=>console.log(content),[content])

    return (<div>
        <div className="pageContainer">
            <TopNavbar />
            <section className="header">
                <h2>Lomdei Plaform Benefits</h2>
            </section>
            <section>
                <div className="text-pic-side">
                    <div className="tps-txt">
                        <h4>{content.length > 0 ? content[0].text.title : errorMsg}</h4>
                        <p>
                            {content.length > 0 && content[0].text.text}
                        </p>
                        <h4>
                            {content.length > 0 && content[1].text.title}
                        </h4>
                        <p>
                            {content.length > 0 && content[1].text.text}
                        </p>
                    </div>
                    <div className="tps-pic">
                        <img src="../../pictures/Platform/platform-pic (6).jpg" alt="Students Learn with the Lomdei Platform" />
                    </div>
                </div>
                <div className="text-pic-side">
                    <div className="tps-txt">
                        <h4>
                            {content.length > 0 && content[2].text.title}
                        </h4>
                        <p>
                            {content.length > 0 && content[2].text.text}
                        </p>
                        <h4>
                            {content.length > 0 && content[3].text.title}
                        </h4>
                        <p>
                            {content.length > 0 && content[3].text.text}
                        </p>
                    </div>
                    <div className="tps-pic">
                        <img src="../../pictures/Platform/platform-pic (7).jpeg" alt="Students Learn with the Lomdei Platform" />
                    </div>
                </div>
            </section>

        </div>
        <Footer />
    </div>)
}

export default PlatformBenefits;