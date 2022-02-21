import TopNavbar from "../../topNavbar/TopNavbar";
import Footer from "../../footer/Footer";
import NewsItems from "./NewsItems";

const News = () => {

    return(<div>
        <div className="pageContainer">
            <TopNavbar/>
            <section id="newsHeader" className="header">
                <h2>Lomdei News</h2>
            </section>
            <section className="events">
                <NewsItems />
            </section>
        </div>
        <Footer />
    </div>)
}

export default News;