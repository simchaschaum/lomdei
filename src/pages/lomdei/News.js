import TopNavbar from "../../topNavbar/TopNavbar";
import Footer from "../../footer/Footer";

const News = () => {

    return(<div>
        <div className="pageContainer">
            <TopNavbar/>
            <section id="newsHeader" className="header">
                <h2>Lomdei News</h2>
            </section>
            <section className="events">
            <div className="events-inner">
                <a href="../../newsletters/Up Close and Personal_ Lomdei's Newsletter 1.html" target="_blank" rel="noreferrer">
                <div className="events-inner-background">
                    <img className="events-img" src="../../pictures/homepage/Newsletter 1.PNG" alt="Lomdei's Newsletter 1" />
                    <p className="events-txt">Lomdei's Latest Newsletter</p>
                </div>
                </a>
                <a href="https://www.linkedin.com/posts/jeremy-hartstein-5b56878_jewisheducation-blendedlearning-personalizedlearning-activity-6881287034078543872-zlf8" target="_blank" rel="noreferrer">
                <div className="events-inner-background">
                    <img className="events-img" src="https://www.torahumesorah.org/images/db/6218-School-Culture-Ad2-01-01-01.png" alt="Torah Umesorah Conference" />
                    <p className="events-txt">Lomdei at the Torah Umesorah Conference</p>
                </div>
                </a>
                <a href="./pics/homepage/CoT Flier.jpg" target="_blank">
                    <div className="events-inner-background">
                        <img className="events-img" src="../../pictures/homepage/CoT Flier.jpg" alt="Community of Teachers Flier" />
                        <p className="events-txt">Lomdei Community of Teachers</p>
                    </div>
                </a>
            </div>
            </section>
        </div>
        <Footer />
    </div>)
}

export default News;