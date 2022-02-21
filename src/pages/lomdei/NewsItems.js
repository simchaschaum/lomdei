import { db } from "../../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

const NewsItems = () => {

    const [contentArr, setContentArr] = useState([]);

    const getData = async () => {
      const docRef = doc(db,"website-info","lomdei-news");
      const snapshot = await getDoc(docRef);
      if(snapshot.exists){
        setContentArr([...snapshot.data().content]);
      } else {
        console.log("Sorry! No data available.");
      }
    }

    useEffect(()=>{getData()},[]);

    return(
        <div className="events-inner">
            {contentArr.length === 0 ? "Content Loading... " : 
                contentArr.map((item,index)=>
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