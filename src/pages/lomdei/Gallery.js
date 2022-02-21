import TopNavbar from "../../topNavbar/TopNavbar";
import Footer from "../../footer/Footer";
import Dropdown from "react-bootstrap/Dropdown";
import {pictures} from "./pictures";
import { useEffect, useState } from "react";
import {LazyLoad} from 'react-lazyload';

const Gallery = () => {
    const [titles, setTitles] = useState([]);
    const [longTitles, setLongTitles] = useState([]);
    const [pics, setPics] = useState([]);
    const [currentPic, setCurrentPic] = useState([0,0]);
    const [lightboxDisplay, setLightboxdisplay] = useState(false);
    const [fullSize, setFullSize] = useState("");

    useEffect(()=>{
        let [tArr, pArr,ltArr] = [[],[],[]]
        pictures.forEach(item=>{
            let k = Object.keys(item);
            tArr.push(k[0]); 
            if(item[k]["video"]){
                pArr.push({
                    video: true,
                    pics: item[k]["pics"],
                });
            } else {
                pArr.push({
                    video: false,
                    pics: item[k]["pics"],
                }); 
            }
            ltArr.push(item[k]["shortTitle"]);
        })
        setTitles([...tArr]);
        setPics([...pArr]);
        setLongTitles([...ltArr]);
    },[pictures])

    const openLightbox = (outer,inner)=>{
        setCurrentPic([outer,inner]);
        setLightboxdisplay(true);
    }
    const closeLightbox = () =>{
        setLightboxdisplay(false)
    }
    const picAdvance = (fb) => {
        let x = fb === "for" ? 1 : -1;
        let outer = currentPic[0];
        let inner = currentPic[1];
        if(inner === pics[outer].pics.length-1 && fb === "for"){ // if forward and at end of inner array 
            if(outer === pics.length-1){   // if also at the end of outer array
                outer = 0;
            } else {
                outer++;
            }
                inner = 0;
        } else if(inner === 0 && fb === "back") {  // if going backwards and at the beginning of inner array 
            if(outer === 0){  // if also at the beginning of outer array
                outer = pics.length-1;
            } else {
                outer--;
            }
            inner = pics[outer].pics.length-1;
        } else{
            inner = inner + x;
        }
        setCurrentPic([outer,inner]);
    }
    const handleFullSize = ()=>{
        if(fullSize===""){
            setFullSize("full-size");
        } else {
            setFullSize("");
        }
    }

    return(
        <div>
             <div className="pageContainer">
                <TopNavbar />
                {/* <!-- Low Dropdown Button - only available on scroll --> */}
                <div className="dropdown" id="lowDropdownBtn">
                <a className="btn link-btn dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                    All Events
                </a>
                <ul id="low-gallery-dropdown" className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                    <li><a href="#gallery-section" className="dropdown-item">Back to Top</a></li>
                    {/* <!-- Dropdown items added dynamically --> */}
                </ul>
                </div>

                <section className="header">
                    <h2>Lomdei Event Gallery</h2>
                    <Dropdown>
                        <Dropdown.Toggle className="link-btn" id="dropdown-basic">
                        Click Here for All Lomdei Events
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {titles.map((item,idx)=><Dropdown.Item key={`k-${idx}`} href="#">{item}</Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>
                </section>
                <section id="gallery-section" className="gallery-container">
                    {longTitles.map((item,index)=>
                        <div key={`key-${index}`}>
                           <span></span>
                           <h4>{item}</h4>
                           <div className="gallery-event">
                            {pics[index].pics.map((pic,idx)=>pics[index].video ? <div key={`vid-${idx}`} className="video-div">
                                <iframe className="gallery-video" src={pic.url} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" title={`Lomdei Video ${index}-${idx}`}/>
                                <p>{pic.alt}</p>
                                </div>
                            : <div  key={`pic-${idx}`}>
                                <img className="gallery-img" src={`../../pictures${pic.url}`} alt={pic.alt} onClick={()=>openLightbox(index,idx)}/>
                            </div>)}
                           </div>
                        </div>   
                    )}  
                    {/* The lightbox display: */}
                    {lightboxDisplay && 
                         <div id="lightbox">
                         <span id="close-modal-wide" className="cursor close-modal" onClick={closeLightbox}>&times;</span>
                         <div id="modal-content">
                             <button className="prev slide-arrow" onClick={()=>picAdvance('back')}>&#10094;</button>
                             {pics[currentPic[0]].pics[currentPic[1]].video ? 
                             <img id="lightboxPic" className={fullSize} onClick={handleFullSize} src={`../../pictures${pics[currentPic[0]].pics[currentPic[1]].altUrl}`} alt={pics[currentPic[0]].pics[currentPic[1]].alt} />
                             : <img id="lightboxPic" className={fullSize} onClick={handleFullSize} src={`../../pictures${pics[currentPic[0]].pics[currentPic[1]].url}`} alt={pics[currentPic[0]].pics[currentPic[1]].alt} /> }
                             <button className="next slide-arrow" onClick={()=>picAdvance('for')}>&#10095;</button>
                         </div>
                         <div id="caption">
                            {pics[currentPic[0]].pics[currentPic[1]].video ? 
                                <a id="modal-caption" className="link-light" href={pics[currentPic[0]].pics[currentPic[1]].url}>Click Here to Watch the Video</a>
                                    : pics[currentPic[0]].pics[currentPic[1]].caption && <p id="modal-caption">{pics[currentPic[0]].pics[currentPic[1]].caption}</p>}
                         </div>
                         <div id="mobile-slide-arrows">
                             <button className="prev mobile-slide-arrow" onClick={()=>picAdvance('back')}>&#10094;</button>
                             <span id="close-modal-mobile" className="close-modal cursor" onClick={closeLightbox}>&times;</span>
                             <button className="next mobile-slide-arrow" onClick={()=>picAdvance('for')}>&#10095;</button>
                         </div>
                     </div>
                    }               
                </section>
                    
            </div>
            <Footer />
        </div>
    )
}

export default Gallery;