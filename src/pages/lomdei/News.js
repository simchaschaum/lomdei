import TopNavbar from "../../topNavbar/TopNavbar";
import Footer from "../../footer/Footer";
import Events from "./events";
import Newsletters  from "./Newsletters";

const News = () => {

    return(<div>
        <div className="pageContainer">
            <TopNavbar/>
            <section id="newsHeader" className="header">
                <h2>Lomdei News</h2>
            </section>
            <section className="events">
                <h2>Lomdei Events</h2>
                <Events />
                <h2>Lomdei Newsletters</h2>
                <Newsletters />
            </section>
        </div>
        <Footer />
    </div>)
}

export default News;