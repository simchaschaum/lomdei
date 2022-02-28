import { db } from "../../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState, useRef } from "react";

const NewsItems = () => {

    const isMounted = useRef(false);
    
    const [contentArr, setContentArr] = useState([]);
    const [errorMsg, setErrorMsg] = useState("Data Loading...");

    const getData = async () => {
        if(isMounted.current){
            setErrorMsg("Data loading...");
            const docRef = doc(db, "website-info", "lomdei-news");
            const snapshot = await getDoc(docRef);
            if (!snapshot.exists) {
                setErrorMsg("Sorry! Data Failed to Load.  Please check your internet connection.")
            } else {
                setContentArr([...snapshot.data().content]);
            }
        }
    }

    useEffect(() => { 
        isMounted.current = true;
        getData();
        return ()=>(isMounted.current = false)
    }, []);

    return (
        <div className="events-inner">
            {contentArr.length === 0 ? "Content Loading... " :
                contentArr.map((item, index) =>
                    <a key={`newsevent-${index}`} href={item.newsItem.link} target="_blank" rel="noreferrer">
                        <div className="events-inner-background">
                            <img className="events-img" src={item.newsItem.image} alt={item.newsItem.imageAltText} />
                            <p className="events-txt">{item.newsItem.title}</p>
                        </div>
                    </a>
                )
            }
        </div>
    )
}

export default NewsItems;