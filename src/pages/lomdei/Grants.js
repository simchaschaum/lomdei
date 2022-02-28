import TopNavbar from "../../topNavbar/TopNavbar";
import Footer from "../../footer/Footer";
import { db } from "../../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState, useRef } from "react";


const Grants = () => {

  const isMounted = useRef(false);
  const [contentArr, setContentArr] = useState([]);

  const getData = async () => {
    if(isMounted.current){
      const docRef = doc(db, "website-info", "grants-intro-text");
      const snapshot = await getDoc(docRef);
      if (snapshot.exists) {
        setContentArr([...snapshot.data().content]);
      } else {
        console.log("Sorry! No data available.");
      }
    }
  }

  useEffect(() => { 
    isMounted.current = true;
    getData();
    return ()=>(isMounted.current = false)
  }, []);

  return (<div>
    <div className="pageContainer">
      <TopNavbar />
      <section className="header">
        <h1>Government Grants</h1>
        <h2>for Lomdei Services</h2>
      </section>
      <section>
        <div className="intro-text">
          <h2>
            {contentArr.length > 0 ? contentArr[0].text : "Data Loading..."}
          </h2>
          <h4>
            {contentArr.length > 0 ? contentArr[1].text : "Data Loading..."}
          </h4>
          <h4>
            {contentArr.length > 0 ? contentArr[2].text : "Data Loading..."}
          </h4>
        </div>
        <div className="learn-more">
          <h2>For more information, please contact us.</h2>
          <a className="link-btn" href="./contact.html">Contact Us</a>
        </div>
      </section>
    </div>
    <Footer />
  </div>)
}

export default Grants;