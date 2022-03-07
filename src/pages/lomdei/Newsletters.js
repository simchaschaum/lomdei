import { useEffect, useState, useRef } from "react";
import { db } from "../../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

const Newsletters = ()=>{

    const isMounted = useRef(false);
    const [newslettersArr, setnewslettersArr] = useState([]);
    useEffect(()=>{
        isMounted.current = true;
        getData();
        return ()=>(isMounted.current=false)
    },[])
    // useEffect(()=>console.log(newsletterArr),[newsletterArr]);

    const getData = async () => {
        if(isMounted.current){
            const newslettersDocRef = doc(db, "website-info", "lomdei-newsletters");
            const newslettersSnapshot = await getDoc(newslettersDocRef);
            if (!newslettersSnapshot.exists) {
                console.log("Sorry! Data Failed to Load.  Please check your internet connection.")
            } else {
                setnewslettersArr([...newslettersSnapshot.data().content]);
            }
        }
    }
    return(
        <div className="events-inner">
                 {newslettersArr.length > 0 ?
                        newslettersArr.map((item, index) =>
                            <a key={`newsletter-${index}`} href={item.newsItem.link} target="_blank" rel="noreferrer">
                                <div className="events-inner-background">
                                    <img className="events-img" src={item.newsItem.image} alt={item.newsItem.imageAltText} />
                                    <p className="events-txt">{item.newsItem.title}</p>
                                </div>
                            </a>
                        ) :
                        "Newsletters Loading... "
                    }
                </div>
    )
}

export default Newsletters;