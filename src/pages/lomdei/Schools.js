import TopNavbar from "../../topNavbar/TopNavbar";
import Footer from "../../footer/Footer";
import { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";
import { doc, getDoc } from 'firebase/firestore';

const Schools = () => {

    const [platformArr, setPlatformArr] = useState([]);
    const [bplArr, setBplArr] = useState([]);
    const [errorMsg, setErrorMsg] = useState("Data Loading...");

    const getData = async () => {
    setErrorMsg("Data loading...");
    const docRefPlatforms = doc(db, "website-info", "platform-schools");
    const docRefBPL = doc(db, "website-info", "bpl-schools");
    const pSnapshot = await getDoc(docRefPlatforms);
    const bSnapshot = await getDoc(docRefBPL);
    if (!pSnapshot.exists || !bSnapshot.exists) {
        setErrorMsg("Sorry! No data available.")
    } else {
        setPlatformArr([...pSnapshot.data().content]);
        setBplArr([...bSnapshot.data().content]);
    }
    }

    useEffect(()=>getData(),[]);
    // useEffect(()=>console.log(platformArr),[platformArr])
    // useEffect(()=>console.log(bplArr),[bplArr])

    return (<div>
        <div className="pageContainer">
            <TopNavbar />
            <section className="header">
                <h1>Schools Using Lomdei Services</h1>
            </section>
            <section id="schools">
                <h3>Schools Using the Lomdei Learning Platform</h3>
                <a className="link-dark" href="#BPL-anchor">Skip to Schools using Lomdei BPL</a>
                <div className="schools-div">
                  {platformArr.map((item,index)=>
                       <div key={`state-${index}`}>
                                <h4>{item.schools.state}</h4>
                                <ul>
                                    {item.schools.schools.map((school,idx)=><li key={`platschool-${idx}`}>{school}</li>)}
                                </ul>
                            </div>
                    )}   
                </div>                
                <span id="BPL-anchor" className="anchor-alt"></span>
                <h3>Schools Using the Lomdei BPL Program</h3>
                <div className="schools-div">
                    {bplArr.map((item,index)=><ul key={`bpllist-${index}`}>
                        {item.schools.schools.map((school,idx)=><li key={`bplschool-${idx}`}>{school}</li>)}
                    </ul>)}
                </div>
            </section>
            <div className="learn-more">
                <h4>To be in touch with teachers and school leaders whose students are already benefiting from Lomdei, please contact us.</h4>
                <a className="link-btn" href="./contact.html">Contact Us</a>
            </div>

        </div>
        <Footer />
    </div>)
}

export default Schools; 