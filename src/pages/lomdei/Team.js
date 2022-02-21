import TopNavbar from "../../topNavbar/TopNavbar";
import Footer from "../../footer/Footer";
import { db } from "../../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

const Team = () => {

  const [contentArr, setContentArr] = useState([]);

  const getData = async () => {
    const docRef = doc(db,"website-info","lomdei-team");
    const snapshot = await getDoc(docRef);
    if(snapshot.exists){
      setContentArr([...snapshot.data().content]);
    } else {
      console.log("Sorry! No data available.");
    }
  }

  useEffect(()=>{getData()},[]);
  useEffect(()=>console.log(contentArr),[contentArr])


    return(<div>
        <div className="pageContainer">
            <TopNavbar />
            <section className="header">
                <h2>
                    Our Team
                </h2>
            </section>
            <section id="team">
            <div className="teamContainer">
                <div className="teamCard">
                    <a data-bs-toggle="modal" data-bs-target="#bioKestenbaum">
                        <img src='../../pictures/headshots/blank portrait.png' alt="" />
                        <h4>Rabbi Dovid Kestenbaum</h4>
                        <p>Founder and Educational Director</p>
                        <h5 className="fullBio">Full Bio</h5>
                    </a>
                </div>
                
                {/* Hidden Modal for DK Bio*/}
                <div className="modal fade" id="bioKestenbaum" tabIndex="-1" aria-labelledby="bioKestenbaumLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="bioKestenbaumLabel">Rabbi Dovid Kestenbaum</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            For a long time, Rabbi Dovid Kestenbaum has had a vision of providing students across the world the tools to be the best learners they can be. 
                            Throughout over 30 years of being a rebbe and a principal, this approach has driven him in his teaching methodology and his interactions with his thousands of students along the way.
                            Rabbi Kestenbaum founded Lomdei with the intention of providing this style of learning to as many students as possible. 
                            He has taken his vision and created a platform that has reached thousands of students across the United States, Canada and Europe. 
                            He leads Lomdei as its Educational Director towards its ultimate goal - להגדיל תורה ולהאדירה
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
                </div>
                
                <div className="teamCard">
                    <a data-bs-toggle="modal" data-bs-target="#bioAlter">
                        <img src="../../pictures/headshots/Raphael Alter Headshot.jpeg" alt="" />
                        <h4>Mr. Raphael Alter</h4>
                        <p>Managing Partner, Director of Operations and Business Development</p>
                        <h5 className="fullBio">Full Bio</h5>
                    </a>
                </div>
            
                {/* Hidden Modal for RA Bio*/}
                <div className="modal fade" id="bioAlter" tabIndex="-1" aria-labelledby="bioAlterLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="bioAlterLabel">Mr. Raphael Alter</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                </div>
             </div>
             <div className="teamContainer">
            {/* Rabbi Hartstein Bio */}
            <div className="teamCard">
                <a data-bs-toggle="modal" data-bs-target="#bioHartstein">
                <img src="../../pictures/headshots/Jeremy Hartstein Headshot.jpg" alt=""/>
                <h4>Rabbi Jeremy Hartstein</h4>
                <p>Director of Teacher Development<br /> </p>
                    {/* <em>Lomdei PD Division</em>     */}
                    <h5 className="fullBio">Full Bio</h5>
                </a>
            </div>

            {/* Hidden Modal for JH Bio */}
            <div className="modal fade" id="bioHartstein" tabIndex="-1" aria-labelledby="bioHartsteinLabel" aria-hidden="true">
                <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title" id="bioHartsteinLabel">Rabbi Jeremy Hartstein</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    Rabbi Hartstein serves as Lomdei’s Director of Teacher Development. Joining the Lomdei team over a year ago, he has been building and cultivating relationships with teachers all over the world who are using Lomdei to enrich their classrooms each day. He manages teacher training and development and meets with teachers and administrators regularly throughout the school year. He also heads Lomdei's Teacher Community, facilitating best practices teacher building workshops, connecting Lomdei teachers around the world. His other responsibilities include tech-support and working with our development team to constantly improve the Lomdei experience.
                    </div>
                    <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
                </div>
            </div>

            {/* Rabbi Hochbaum */}
            <div className="teamCard">
            <a data-bs-toggle="modal" data-bs-target="#bioHochbaum">
            <img src="../../pictures/headshots/Rabbi Hochbaum Headshot.JPG" alt="" />
            <h4>Rabbi Peretz Hochbaum</h4>
            <p>Instructional Coach<br />
            <em>Lomdei PD Division</em>    
            </p>
            <h5 className="fullBio">Full Bio</h5>
            </a>
            </div>

            {/* Hidden Modal for Rabbi Hochbaum Bio */}
            <div className="modal fade" id="bioHochbaum" tabIndex="-1" aria-labelledby="bioHochbaumLabel" aria-hidden="true">
            <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
            <h5 className="modal-title" id="bioHochbaumLabel">Rabbi Peretz Hochbaum</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            Rabbi Peretz Hochbaum is a master educator, inspiring visionary leader and an effective team builder. He is experienced on all levels, K-12, and has served in leadership roles at prominent institutions including Rambam Mesivta, HANC, Mesivta Tiferes Yisroel and Camp Kaylie.  He is also the Founder and Director of BPE Educational Services, an Educational Consulting firm.
            For more than 30 years, Rabbi Hochbaum has supervised and led all aspects of school including both Religious and General Studies programs, curriculum development and student services. He has implemented staff In-Service Training & evaluation, and has presented extensively on a wide range of educational topics including methodology & didactics, class management, differentiation, cooperative learning and    curriculum pacing/mapping.
            In coming on board at Lomdei Rabbi Hochbaum summed up his feelings as follows: “I am so fortunate to have a successful career in chinuch, and I am humbled to, with Hashem’s help, have made an impact on my students, faculty, and community through my efforts. I am truly excited to be joining Lomdei’s wonderful team of educational thinkers and leaders who are working diligently to challenge the status quo and change the future landscape of Jewish education.”
            </div>
            <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
            </div>
            </div>
            </div>

                
            {/* CR Bio */}
            <div className="teamCard">
                <a data-bs-toggle="modal" data-bs-target="#bioRichmond" >
                    <img src="../../pictures/headshots/Chani Richmond Headshot.JPG" alt="" />
                    <h4>Mrs. Chani Richmond</h4>
                    <p>Director of Curriculum Development, Teacher Training and Coaching <br/>Instructional Coach<br/>
                        <em>Lomdei PD Division</em>
                    </p>
                    <h5 className="fullBio">Full Bio</h5>
                </a>
            </div>

            {/* Hidden Modal for CR Bio */}
            <div className="modal fade" id="bioRichmond" tabIndex="-1" aria-labelledby="bioRichmondLabel" aria-hidden="true">
            <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="bioRichmondLabel">Mrs. Chani Richmond</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                Chani Richmond is a Judaic Studies Education Leader and Curriculum Developer, with over 20 years of education and special education experience. Chani has left her mark of excellence in Jewish education and leadership on schools in both New York and Florida amongst them HAFTR Middle School, Scheck Hillel Day School, RASG Hebrew Academy of Miami Beach, and Katz Hillel Day School of Boca Raton. She currently holds the position of Hybrid Learning Coordinator at Yeshiva Toras Chaim Toras Emes, Klurman Elementary School in North Miami Beach, Florida.  She is a past member of the JTS Tanakh Standards and Benchmarks Project, and the "JBlend Miami" Blended & Personalized Learning Initiative. She brings years of experience in curriculum development and the know-how of personalization in the creation of a blended learning environment in the Judaic Studies classroom. Her additional roles as a former "Sefaria" Partner Educator, "Torah Live" Ambassador, and Prizmah/JEIC Edtech Facilitator & Coach, and her current participation in the Touro College Educational Technology Coach Certificate Program allows her to apply cutting-edge 21st Century Educational Technology skills to her Judaic Studies classes while coaching other teachers to do the same. As the owner and founder of <a className="link link-dark" target="_blank" href="https://www.linkedin.com/in/chani-richmond-01738330/"> CR Education Advisors, LLC</a>, an educational consulting company, Chani is looking forward to partnering with Lomdei in their PD division as the Director of Curriculum Development and Teacher Training & Mentoring. Chani enjoys living in South Florida with her husband and four children. 
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
            </div>
            </div>
            </div>

            <div className="teamCard">
                <a data-bs-toggle="modal" data-bs-target="#bioSchaum">
                    <img src="../../pictures/headshots/Simcha Schaum Headshot.jpg" alt="" />
                    <h4>Rabbi Simcha Schaum</h4>
                    <p>Director of Communications<br/>Web Developer<br/>Instructional Coach<br/>
                    <em>Lomdei PD Division</em>  
                    </p>  
                    <h5 className="fullBio">Full Bio</h5>
                </a>
            </div>

            {/* Hidden Modal for SS Bio */}
            <div className="modal fade" id="bioSchaum" tabIndex="-1" aria-labelledby="bioSchaumLabel" aria-hidden="true">
            <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="bioSchaumLabel">Rabbi Simcha Schaum</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                Rabbi Simcha Schaum fills several roles at Lomdei's professional development division.  
                As director of Communications, he coordinates and schedules the training workshops and events, and produces the Lomdei newsletter.  
                He also works with some of the teachers who benefit from Lomdei's professional development as an instructional coach. 
                A (mostly) self-taught web-developer, Rabbi Schaum also created this website!. <br/>
                Before aliya, Rabbi Schaum taught limudei Kodesh for 15 years, mainly at Yavneh Academy in Paramus, NJ. He
                taught a range of Torah subjects to grades 4, 6, 7, and 8, and utilized Project-Based Learning and Blended and Personalized Learning
                in order to facilitate his students' success. <br/>
                Rabbi Schaum lives in Ramat Beit Shemesh with his family. 
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
            </div>
            </div>
            </div>

        </div>
        <div className="teamContainer">
              {/* Lauren Adler Bio */}
              <div className="teamCard">
                <a data-bs-toggle="modal" data-bs-target="#bioAdler">
                  <img src="../../pictures/headshots/Lauren Adler Headshot.jpeg" alt="generic person icon" />
                  <h4>Mrs. Lauren Adler</h4>
                  <p>Instructional Coach<br/>
                    <em>Lomdei PD Division</em>    
                  </p>
                  <h5 className="fullBio">Full Bio</h5>
                </a>
              </div>
          
              {/* Hidden Modal for LA Bio */}
              <div className="modal fade" id="bioAdler" tabIndex="-1" aria-labelledby="bioAdlerLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="bioAdlerLabel">Mrs. Lauren Adler</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      Lauren Adler is an educational consultant at the Moriah School in Englewood, NJ. She works closely with educators and administrators to further the school's mission of personalizing learning for each student. Lauren meets regularly with teachers to assist them in examining their student achievement data which informs their curricular decisions. Lauren has previously assumed the role of being a technology integration coach who modeled and supported integration of technology tools in classrooms throughout the school. 
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>
          
            {/* Rabbi Chait Bio */}
             <div className="teamCard">
              <a data-bs-toggle="modal" data-bs-target="#bioChait">
                <img src="../../pictures/headshots/blank portrait.png" alt="generic person icon" />
                <h4>Rabbi Shmuel Chait</h4>
                <p>Instructional Coach<br/>
                  <em>Lomdei PD Division</em>    
                </p>
                <h5 className="fullBio">Full Bio</h5>
              </a>
            </div>
          
            {/* Hidden Modal for RC Bio */}
            <div className="modal fade" id="bioChait" tabIndex="-1" aria-labelledby="bioChaitLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="bioChaitLabel">Rabbi Shmuel Chait</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    ... 
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>

        </div>
            </section>
        </div>
        <Footer />
    </div>)
}

export default Team;