import TopNavbar from "../../topNavbar/TopNavbar";
import Footer from "../../footer/Footer";
import IMG_0595 from "../../pics/lomdei/IMG_0595.jpg";
import HALBVisit from "../../pics/lomdei/HALBVisit12_7_21 (4).jpeg";
import IMG_0617 from "../../pics/lomdei/IMG_0617.jpg"

const AboutLomdei = () => {

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
                Established in 2010 by Rabbi Dovid Kestenbaum and Mr. Raphael Alter, Lomdei is committed to the ideal of 
                “להגדיל תורה ולהאדירה,” promoting the greatness and grandeur of Torah, by facilitating 
                high quality <em>limud hatorah</em>.  
              </p>
              <p>
                  Lomdei empowers teachers to deliver high quality Torah instruction by facilitating the use of Blended and 
                  Personalized Learning in Limudei Kodesh classes, as well as in general studies classes in <em>frum</em> schools.  
              </p>    
            </div>
            <div className="tps-pic">
              <img src={IMG_0595} alt="Lomdei classroom in action" />
            </div>
          </div>
          <div className="text-pic-side">
            <div className="tps-txt">
              <p>
                Lomdei facilitates Blended and Personalized Learning in two significant ways.  
              </p>
              <p>
                The Lomdei BPL Program trains and equips teachers to employ Blended and Personalized Learning 
                in their classrooms, and supports those teachers through one-on-one coaching and a community of 
                like-minded educators.
              </p>
              <a className="link link-dark" href="../BPL/about-BPL.html">
                <p>Learn more about the Lomdei BPL Program</p>
              </a>
              <p>
                The Lomdei Learning Platform is a simple, yet powerful tool, helping students retain 
                knowledge and deepen their Torah text skills in virtually all areas of Limudei Kodesh.  Teachers 
                who use this platform have access to both educational and technical resources to maximize their 
                students' learning while using the Platform.
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
                Lomdei is uniquely positioned to be an educational force in frum schools.  Our Platform and BPL 
                program are developed and run by rebbeim and moros who deeply understand the educational and spiritual 
                needs and values of Limudei Kodesh.  
              </p>
              <a className="link link-dark" href='../BPL/about-BPL.html#lomdeiAdvAnchor'>
                <p>Learn more about the unique advantages of Lomdei for Limudei Kodesh</p>
              </a>
              <p>
                Over the past several years, Lomdei has grown in popularity. The Lomdei Learning Platform is currently in 60 schools throughout the 
                world and, in just one year, the Lomdei BPL Program is training and coaching close to 20 teachers in 4 schools across the United States. 
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