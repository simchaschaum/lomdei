import TopNavbar from "../../topNavbar/TopNavbar";
import Footer from "../../footer/Footer";
import { db } from "../../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

const Contact = () => {

    const [contentArr, setContentArr] = useState([]);

    const getData = async () => {
      const docRef = doc(db,"website-info","contact-us-intro");
      const snapshot = await getDoc(docRef);
      if(snapshot.exists){
        setContentArr([...snapshot.data().content]);
        console.log(contentArr)
      } else {
        console.log("Sorry! No data available.");
      }
    }

    useEffect(()=>{getData()},[]);
    useEffect(()=>console.log(contentArr),[contentArr])
    return(
        <div>
            <div className="pageContainer">
                <TopNavbar />
            <section id="contactusHeader" className="header">
                <h2>Contact Us</h2> 
            </section>
            <section id="contact-us">
                <div className="intro-text">
                    <h4>
                    {contentArr.length > 0 ? contentArr[0].text : "Data loading... "}
                    </h4>
                    <h4>
                    {contentArr.length > 0 ? contentArr[1].text : "Data loading... "}
                    </h4>
                    <h4>
                    Please contact us to learn more about the ways Lomdei can help your students. 
                    </h4>
                </div>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf8XHmSJSSKx-b19lbVLORg6s9UHuUoU9k5Z-kqGZXwlwOjdw/viewform?embedded=true" title="ContactForm" width="600" height="725" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
            </section>


            </div>
            <Footer />
        </div>
    )
}

export default Contact;