import TopNavbar from "../../topNavbar/TopNavbar";
import Footer from "../../footer/Footer";
import IMG_0595 from "../../pics/lomdei/IMG_0595.jpg";
import HALBVisit from "../../pics/lomdei/HALBVisit12_7_21 (4).jpeg";
import IMG_0617 from "../../pics/lomdei/IMG_0617.jpg";
import { db } from "../../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

const AboutLomdei = () => {

    const [contentArr, setContentArr] = useState([]);

    const getData = async () => {
      const docRef = doc(db,"website-info","about-lomdei");
      const snapshot = await getDoc(docRef);
      if(snapshot.exists){
        setContentArr([...snapshot.data().content]);
        console.log(contentArr)
      } else {
        console.log("Sorry! No data available.");
      }
    }

    useEffect(()=>{getData()},[]);

    return(
        <div>
        <div className="pageContainer">
        <TopNavbar page={"about-lomdei"}/>
        <section className="header">
          <h1>About Lomdei</h1>
        </section>
        <section>
          <div className="text-pic-side">
            <div className="tps-txt">
              <p>
                {contentArr.length > 0 ? contentArr[0].text : "Data loading... "}
              </p>
              <p>
                {contentArr.length > 0 ? contentArr[1].text : "Data loading... "}
              </p>    
            </div>
            <div className="tps-pic">
              <img src={IMG_0595} alt="Lomdei classroom in action" />
            </div>
          </div>
          <div className="text-pic-side">
            <div className="tps-txt">
              <p>
              {contentArr.length > 0 ? contentArr[2].text : "Data loading... "}
              </p>
              <p>
                {contentArr.length > 0 ? contentArr[3].text : "Data loading... "}
              </p>
              <a className="link link-dark" href="../BPL/about-BPL.html">
                <p>Learn more about the Lomdei BPL Program</p>
              </a>
              <p>
                {contentArr.length > 0 ? contentArr[4].text : "Data loading... "}
              </p>
              <a className="link link-dark" href="../platform/about-platform.html">
                <p>Learn more about the Lomdei Learning Platform</p>
              </a>
            </div>
            <div className="tps-pic">
              <img src={HALBVisit} alt="Lomdei classroom in action" />
            </div>
          </div>
          <div className="text-pic-side">
            <div className="tps-txt">
              <p>
                {contentArr.length > 0 ? contentArr[5].text : "Data loading... "}

              </p>
              <a className="link link-dark" href='../BPL/about-BPL.html#lomdeiAdvAnchor'>
                <p>Learn more about the unique advantages of Lomdei for Limudei Kodesh</p>
              </a>
              <p>
               {contentArr.length > 0 ? contentArr[6].text : "Data loading... "}
              </p>
            </div>
            <div className="tps-pic">
              <img src={IMG_0617} alt="Lomdei classroom in action" />
            </div>
          </div>
          <div className="learn-more">
            <h4>To learn more about how Lomdei can enrich the Limudei Kodesh for your students, or to be in touch with teachers and school leaders whose 
              students are already benefiting from Lomdei, please contact us.
            </h4>
            <a className="link-btn" href="../lomdei/contact.html">Contact Us</a>
          </div>
        </section>
      </div>
      <Footer />
        </div>
    )
}

export default AboutLomdei;