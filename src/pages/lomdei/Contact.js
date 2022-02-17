import TopNavbar from "../../topNavbar/TopNavbar";
import Footer from "../../footer/Footer";

const Contact = () => {

    return(
        <div>
            <div class="pageContainer">
                <TopNavbar />
            <section id="contactusHeader" class="header">
                <h2>Contact Us</h2> 
            </section>
            <section id="contact-us">
                <div class="intro-text">
                    <h4>
                    Lomdei was created with one purpose in mind: להגדיל תורה ולהאדירה. 
                    We are privileged to partner with so many schools and teachers and are humbled that we are making a 
                    difference in the limud Torah of thousands of students.
                    </h4>
                    <h4>
                    May we be <em>zocheh</em> to continue providing the necessary training, tools, and support to enhance the Limudei Kodesh 
                    experience of every school, teacher and student.
                    </h4>
                    <h4>
                    Please contact us to learn more about the ways Lomdei can help your students. 
                    </h4>
                </div>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf8XHmSJSSKx-b19lbVLORg6s9UHuUoU9k5Z-kqGZXwlwOjdw/viewform?embedded=true" title="ContactForm" width="600" height="725" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </section>


            </div>
            <Footer />
        </div>
    )
}

export default Contact;