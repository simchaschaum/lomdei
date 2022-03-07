import { useEffect, useState, useRef } from "react";
import { db } from "../../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

const Events = ()=>{

    const isMounted = useRef(false);
    const [eventsArr, setEventsArr] = useState([]);
    useEffect(()=>{
        isMounted.current = true;
        getData();
        return ()=>(isMounted.current=false)
    },[])
    // useEffect(()=>console.log(newsletterArr),[newsletterArr]);

    const getData = async () => {
        if(isMounted.current){
            const eventsDocRef = doc(db, "website-info", "lomdei-news");
            const eventsSnapshot = await getDoc(eventsDocRef);
            if (!eventsSnapshot.exists) {
                console.log("Sorry! Data Failed to Load.  Please check your internet connection.")
            } else {
                setEventsArr([...eventsSnapshot.data().content]);
            }
        }
    }
    return(
        <div className="events-inner">
                 {eventsArr.length > 0 ?
                        eventsArr.map((item, index) =>
                            <a key={`newsevent-${index}`} href={item.newsItem.link} target="_blank" rel="noreferrer">
                                <div className="events-inner-background">
                                    <img className="events-img" src={item.newsItem.image} alt={item.newsItem.imageAltText} />
                                    <p className="events-txt">{item.newsItem.title}</p>
                                </div>
                            </a>
                        ) : "Events Loading... "
                    }
                </div>
    )
}

export default Events;