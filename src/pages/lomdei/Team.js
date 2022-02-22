import TopNavbar from "../../topNavbar/TopNavbar";
import Footer from "../../footer/Footer";
import Modal from 'react-bootstrap/Modal';
import { db } from "../../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

const Team = () => {

  const [contentArr, setContentArr] = useState([]);
  const [showBio, setShowBio] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const [errorMsg, setErrorMsg] = useState("Data Loading...");

  const getData = async () => {
    setErrorMsg("Data loading...")
    const docRef = doc(db, "website-info", "lomdei-team");
    const snapshot = await getDoc(docRef);
    if (snapshot.exists) {
      setContentArr([...snapshot.data().content]);
    } else {
      console.log("Sorry! No data available.");
      setErrorMsg("Sorry! Data Failed to Load.  Please check your internet connection.")
    }
  }

  useEffect(() => { getData() }, []);
  useEffect(() => console.log(contentArr), [contentArr]);

  const handleShow = (index) => {
    setShowBio(true);
    setModalIndex(index)
  }
  const handleClose = () => {
    setShowBio(false)
  }
  return (<div>
    <div className="pageContainer">
      <TopNavbar />
      <section className="header">
        <h2>
          Our Team
        </h2>
      </section>
      <section id="team">
        <div className="teamContainer">
          {contentArr.length > 0 ? contentArr.map((item, index) =>
              <button className="teamCard" key={`teamCard-${index}`} onClick={() => handleShow(index)}>
                <img src={`../../pictures/headshots/${item.info.name}.png`} alt={`${item.info.name} Headshot`} />
                <h4>{item.info.name}</h4>
                <p>{item.info.title}</p>
                <h5 className="fullBio">Full Bio</h5>
              </button>)
            : <h4>{errorMsg}</h4>}

          <Modal show={showBio} onHide={handleClose}>
            <Modal.Body>
              <p>{contentArr.length > 0 ? contentArr[modalIndex].info.bio : errorMsg}</p>
            </Modal.Body>
          </Modal>
        </div>
      </section>
    </div>
    <Footer />
  </div>)
}

export default Team;