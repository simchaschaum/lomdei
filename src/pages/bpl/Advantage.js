import Footer from "../../footer/Footer";
import TopNavbar from "../../topNavbar/TopNavbar";

const Advantage = () => {

    return (<div>
        <div className="pageContainer">
            <TopNavbar />
            <section id="intro">
                <div id="title">
                    <h1>
                        Our Cutting-Edge Professional Development in Blended and Personalized Learning (BPL):
                        Custom Training, Coaching, and Support for Each Rebbe and Morah
                    </h1>
                    <a className="link-btn" target="_blank" href="./Lomdei PD Brochure.pdf">View Our Brochure</a>
                    <a className="link-btn" href="#advantage-anchor">Learn More About the Lomdei Advantage</a>
                </div>
            </section>

            <section>
                <span id="advantage-anchor" className="anchor"></span>
                <div className="text-pic-side">
                    <div className="tps-txt">
                        <h3><strong>Lomdei's Customized PD Advantage</strong></h3>
                        <p>
                            In recent years, the benefits of Blended and Personalized Learning have become clear to an ever-increasing number of educators and educational institutions across the spectrum.
                            While there are many professional development companies that offer training in Blended and Personalized Learning, <strong>very few of them are familiar with the specific needs and methods of Limudei Kodesh</strong>.
                            As a result, a rebbe or morah who strives to develop knowledge and expertise in this new educational method is often left stranded as they struggle to apply this method without guidance or examples specifically geared to Torah study.  Additionally, these professional development companies may not appreciate a yeshiva’s specific religious values, such as the need to limit, or eliminate, the use of the internet or computer technology in general.
                        </p>
                    </div>
                    <div className="tps-pic">
                        <img src="../../pictures/lomdei_pic_5.JPG" alt="" />
                    </div>
                </div>
                <div className="text-pic-side">
                    <div className="tps-txt">
                        <h3><strong>Lomdei is here to fill the gap.</strong></h3>
                        <p>
                            Lomdei's background in, and familiarity with, frum learning environments makes it particularly equipped to introduce the methods of Blended and Personalized Learning to schools who teach Limudei Kodesh and who aim to impart the Torah's rich values and lifestyle.
                            Lomdei's program is developed and implemented by teachers with many years' experience teaching a range of subjects in Limudei Kodesh, along with the training necessary to implement Blended and Personalized Learning in the class.
                            Our intimate <strong>familiarity with Limudei Kodesh</strong> allows us to provide specific, concrete, and complete <strong>examples of lesson units</strong> in all areas of Limudei Kodesh.
                        </p>
                    </div>
                    <div className="tps-pic">
                        <img src="../../pictures/lomdei_pic_7.JPG" alt="" />
                    </div>
                </div>
                <div className="text-pic-side">
                    <div className="tps-txt">
                        <p>
                            Additionally, we are  able to provide specific, concrete, and personal <strong>support</strong> to each rebbe and morah as they plan and implement their lessons using Blended and Personalized Learning.
                            These <strong>concrete examples</strong> and <strong>specific support</strong> are often crucial to becoming comfortable and familiar with the goals and the implementation of new educational methods such as Personalized or Blended Learning.
                            Furthermore, we are able to understand and identify with the many nuanced cultural and religious considerations of frum schools, and are more able to find solutions that fit these considerations and needs.
                        </p>
                    </div>
                    <div className="tps-pic">
                        <img src="../../pictures/BPL/IMG_0605.jpg" alt="BPL in action" />
                    </div>
                </div>
            </section>
            <section className="bkg-dark">
                <div className="learn-more">
                    <h2>Learn More About Lomdei BPL</h2>
                </div>
                <div className="lrnMoreLnks-container">
                    <a className="lrnMoreLnk" href="./pd-program.html">
                        <img src="../../pictures/BPL/BPL in action.jpg" alt="BPL in action" />
                            <h5>Lomdei's Professional Developement in Action</h5>
                    </a>
                    <a className="lrnMoreLnk" href="./benefits.html">
                        <img src="../../pictures/BPL/group work.jpg" alt="BPL in action" />
                            <h5>Benefits of Blended and Personalized Learning</h5>
                    </a>
                    <a className="lrnMoreLnk" href="./examples-resources.html">
                        <img src="../../pictures/BPL/IMG-20211215-WA0030.jpg" alt="BPL in action" />
                            <h5>Examples and Resources for BPL</h5>
                    </a>

                </div>
            </section>

        </div>
        <Footer />
    </div>)
}

export default Advantage;